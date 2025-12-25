interface CTAButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}

export default function CTAButton({
  href,
  label,
  variant = 'primary',
  external = false,
}: CTAButtonProps) {
  const baseStyles =
    'inline-block px-6 py-3 rounded-sm font-semibold transition duration-200 text-center';
  const variantStyles =
    variant === 'primary'
      ? 'bg-maroon text-yellow hover:bg-maroon-dark'
      : 'bg-white text-maroon border-2 border-maroon hover:bg-maroon hover:text-yellow';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles}`}
      >
        {label}
      </a>
    );
  }

  return (
    <a href={href} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </a>
  );
}
