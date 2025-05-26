import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 text-primary">
      <svg
        width="32" // Default size, can be overridden by props
        height="32"
        viewBox="0 0 64 64" // Internal coordinate system
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Blue circle background, color inherited from parent div's text-primary */}
        <circle cx="32" cy="32" r="30" fill="currentColor" />
        
        {/* White "ATZ" monogram paths */}
        <g fill="white">
          {/* 'A' - Left diagonal leg */}
          <path d="M20 48 L30 16 H34 L24 48 Z" /> 
          
          {/* Top horizontal bar (shared by A, T, Z) */}
          {/* Starts at x=29 to connect with/overlap A's leg top (around x=30) */}
          <path d="M29 16 H50 V20 H29 Z" /> 
          
          {/* 'T' - Vertical stem */}
          {/* Centered under the T-portion of the top bar (T's top bar is roughly x=29 to x=41). Stem is x=33 to x=37, centered at x=35. */}
          <path d="M33 20 H37 V48 H33 Z" /> 
          
          {/* 'Z' - Diagonal stroke */}
          {/* Z's portion of top bar is roughly x=41 to x=50. Diagonal starts from top-right of this. */}
          <path d="M46 20 H50 L36 48 H32 Z" /> 
          
          {/* 'Z' - Bottom horizontal bar */}
          {/* Connects to the bottom-left of Z's diagonal (ending at x=32). */}
          <path d="M32 44 H48 V48 H32 Z" />
        </g>
      </svg>
      <span className="text-xl font-semibold">ATEZ Software</span>
    </div>
  );
}
