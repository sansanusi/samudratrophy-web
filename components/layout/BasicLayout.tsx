import React from "react";

interface BasicLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasicLayout({
  children,
  className = "",
}: BasicLayoutProps) {
  return (
    <div
      className={`w-full h-full lg:max-w-5xl xl:max-w-7xl mx-auto px-5 2xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}