import React, { forwardRef } from "react";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, children, className = "", ...props }, ref) => {
    switch (level) {
      case 1:
        return (
          <h1
            ref={ref}
            className={`text-2xl md:text-3xl lg:text-4xl text-e-text ${className}`}
            {...props}
          >
            {children}
          </h1>
        );
      case 2:
        return (
          <h2
            ref={ref}
            className={`text-xl md:text-2xl xl:text-3xl text-e-text ${className}`}
            {...props}
          >
            {children}
          </h2>
        );
      case 3:
        return (
          <h3
            ref={ref}
            className={`text-base md:text-xl xl:text-2xl text-e-text ${className}`}
            {...props}
          >
            {children}
          </h3>
        );
      case 4:
        return (
          <h4
            ref={ref}
            className={`text-sm md:text-base lg:text-lg text-e-text ${className}`}
            {...props}
          >
            {children}
          </h4>
        );
      case 5:
        return (
          <h5
            ref={ref}
            className={`text-sm md:text-base text-e-text ${className}`}
            {...props}
          >
            {children}
          </h5>
        );
      case 6:
        return (
          <h6
            ref={ref}
            className={`text-sm md:text-base text-e-text ${className}`}
            {...props}
          >
            {children}
          </h6>
        );
      default:
        return (
          <h1
            ref={ref}
            className={`text-3xl md:text-4xl lg:text-5xl text-e-text ${className}`}
            {...props}
          >
            {children}
          </h1>
        );
    }
  }
);

Heading.displayName = "Heading";

export default Heading;