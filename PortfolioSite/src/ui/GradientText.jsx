// src/components/ui/GradientText.jsx
export default function GradientText({ children, className = '' }) {
  return (
    <span
      className={`
        bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
        bg-clip-text text-transparent font-extrabold tracking-tight
        ${className}
      `}
    >
      {children}
    </span>
  );
}