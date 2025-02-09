interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type: "submit" | "reset" | "button" | undefined;
}

export default function Button({ label, onClick, className, type}: ButtonProps) {
  return (
    <button
      className={`w-full rounded-lg p-2 border border-border hover:opacity-80 transition ${className}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}
