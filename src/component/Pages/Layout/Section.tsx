type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`w-full py-8 sm:py-12  ${className}`}
    >
      {children}
    </section>
  );
}