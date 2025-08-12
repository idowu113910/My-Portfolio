export default function GlowingBackground({ children }) {
  return (
    <div
      className="min-h-screen  w-full bg-gradient-to-br from-gray-800 via-indigo-700 to-black
             bg-[length:100%_100%] animate-breathing-glow"
    >
      {children}
    </div>
  );
}
