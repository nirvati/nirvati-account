import { ReactNode } from "react";

export function Skeleton({ children }: { children?: ReactNode }) {
  return (
    <div className="skeleton flex flex-row items-center justify-center rounded-lg px-8 py-12 has-nirvati-bg">
      {children}
    </div>
  );
}
