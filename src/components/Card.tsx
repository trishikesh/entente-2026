interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-sm shadow-sm p-6 border border-maroon-light hover:shadow-md transition ${className}`}>
      {children}
    </div>
  );
}
