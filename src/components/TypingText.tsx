import type { CSSProperties } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
}

export function TypingText({ text, className = "" }: TypingTextProps) {
  return (
    <span
      className={`typing-text ${className}`}
      style={{ "--typing-ch": `${text.length}ch` } as CSSProperties}
    >
      {text}
    </span>
  );
}
