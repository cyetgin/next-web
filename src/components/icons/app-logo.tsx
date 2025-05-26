import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 50" // Aspect ratio based on the provided logo image
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" // Sets default fill for text elements to the CSS color property
      {...props} // Allows passing className, width, height, etc.
    >
      {/* Icon Part */}
      <g>
        {/* Blue Circle Background - inherits fill="currentColor" from SVG root */}
        <circle cx="25" cy="25" r="22" />
        {/* Stylized ATZ monogram (White strokes) */}
        <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* A (slash-like) */}
          <path d="M16 35 L25 15" />
          {/* T (connected to A's top, forms a kind of L or gamma shape) */}
          <path d="M25 15 L20 15 M22.5 15 L22.5 35" />
          {/* Z (connected to T's top, classic Z shape) */}
          <path d="M25 15 L34 15 L25 35 L34 35" />
        </g>
      </g>

      {/* Text Part "ATEZ" - inherits fill="currentColor" */}
      <text x="58" y="33" fontFamily="inherit" fontSize="22" fontWeight="bold">ATEZ</text>

      {/* Text Part "SOFTWARE TECHNOLOGIES" - inherits fill="currentColor" */}
      <text x="125" y="23" fontFamily="inherit" fontSize="11">SOFTWARE</text>
      <text x="125" y="38" fontFamily="inherit" fontSize="11">TECHNOLOGIES</text>
    </svg>
  );
}
