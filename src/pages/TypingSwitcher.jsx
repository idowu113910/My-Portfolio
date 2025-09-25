// TypingSwitcher.jsx
import React, { useEffect, useRef, useState } from "react";

export default function TypingSwitcher({
  texts = ["Full-stack Web Developer", "Software Engineer", ""],
  typingSpeed = 75, // ms per character when typing
  pauseDuration = 1500, // ms to pause when a full text is shown
  showCursor = true,
  cursorCharacter = "|",
  loop = true,
  className = "",
}) {
  const [index, setIndex] = useState(0); // which string in texts
  const [display, setDisplay] = useState(""); // current shown substring
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const timerRef = useRef(null);
  const blinkRef = useRef(null);

  useEffect(() => {
    // blinking cursor (toggle)
    if (!showCursor) return undefined;
    blinkRef.current = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(blinkRef.current);
  }, [showCursor]);

  useEffect(() => {
    const fullText = texts[index] ?? "";
    // If full text length is 0 (empty string), wait pauseDuration then move on
    if (!isDeleting && display === fullText) {
      // pause before deleting (or moving to next if you prefer not to delete)
      timerRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timerRef.current);
    }

    // If deleting finished (display empty), jump to next text
    if (isDeleting && display === "") {
      clearTimeout(timerRef.current);
      setIsDeleting(false);
      setIndex((i) => {
        const next = i + 1;
        if (next >= texts.length) return loop ? 0 : i; // if not looping, stay
        return next;
      });
      return;
    }

    // determine delay: typing slower, deleting maybe faster
    const speed = isDeleting ? Math.max(30, typingSpeed / 2) : typingSpeed;

    timerRef.current = setTimeout(() => {
      if (isDeleting) {
        setDisplay((d) => fullText.substring(0, d.length - 1));
      } else {
        setDisplay((d) => fullText.substring(0, d.length + 1));
      }
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [display, isDeleting, index, texts, typingSpeed, pauseDuration, loop]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(blinkRef.current);
    };
  }, []);

  return (
    <span className={className}>
      {display}
      {showCursor && (
        <span style={{ display: "inline-block", marginLeft: 4 }}>
          {cursorVisible ? cursorCharacter : " "}
        </span>
      )}
    </span>
  );
}
