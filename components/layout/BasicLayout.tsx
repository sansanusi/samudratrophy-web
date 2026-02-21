import React from "react";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full lg:max-w-5xl xl:max-w-7xl mx-auto p-5 2xl:p-0">
      {children}
    </div>
  );
}
