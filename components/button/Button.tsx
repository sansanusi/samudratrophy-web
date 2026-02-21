"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  badge?: string | number;
};

export function ButtonPrimaryOutline({
  label,
  icon,
  className = "",
  labelClassName = "",
  badge,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`relative cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-1.5 text-sm font-medium tracking-wide capitalize transition duration-300 border rounded-lg whitespace-nowrap border-e-primary text-e-primary hover:bg-e-primary hover:text-white focus-visible:outline-none active:scale-90 disabled:bg-transparent disabled:border-slate-300 disabled:text-slate-300 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {badge && (
        <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-e-primary">
          {badge}
        </div>
      )}

      <div className={`${labelClassName}`}>
        {label}
      </div>

      {icon && <span className="relative">{icon}</span>}
    </button>
  );
}

// Gradient Button
export function ButtonPrimary({
  label,
  icon,
  className = "",
  labelClassName = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium tracking-wide capitalize transition duration-300 rounded-lg whitespace-nowrap bg-gradient-primary text-white focus-visible:outline-none active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      <div className={`${labelClassName}`}>
        {label}
      </div>

      {icon && <span className="relative">{icon}</span>}
    </button>
  );
}

export function ButtonGrayPill({
  label,
  icon,
  className = "",
  labelClassName = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium tracking-wide capitalize transition duration-300 rounded-full whitespace-nowrap bg-e-gray text-e-text focus-visible:outline-none active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      <div className={`text-base ${labelClassName}`}>
        {label}
      </div>

      {icon && <span className="relative">{icon}</span>}
    </button>
  );
}