import { Globe } from 'lucide-react';
import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 text-primary">
      <Globe className="h-7 w-7" />
      <span className="text-xl font-semibold">ATEZ Software</span>
    </div>
  );
}
