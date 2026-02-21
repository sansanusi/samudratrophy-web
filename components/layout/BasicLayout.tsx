import React from "react";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full lg:max-w-5xl xl:max-w-7xl mx-auto px-5 2xl:px-0">
      {children}
    </div>
  );
}
