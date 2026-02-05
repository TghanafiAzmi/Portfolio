// src/components/layout/Container.tsx
export default function Container({
  children,
  className = "", // add optional className
}: {
  children: React.ReactNode;
  className?: string; // allow passing className
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
