type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id} 
      className={`w-full py-8 sm:py-12 ${className}`}
    >
      {children}
    </section>
  );
}
