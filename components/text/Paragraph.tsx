import React, { forwardRef } from "react";

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

const Paragraph = forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ children, className = "", level = 3, ...props }, ref) => {
  const sizeClass =
    level === 1
      ? "text-xs"
      : level === 2
        ? "text-xs md:text-sm"
        : level === 3
          ? "text-sm md:text-base"
          : "text-base md:text-lg";

  return (
    <p
      ref={ref}
      className={`${sizeClass} text-e-text ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});

Paragraph.displayName = "Paragraph";

export default Paragraph;