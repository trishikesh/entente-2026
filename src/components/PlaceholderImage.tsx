interface PlaceholderImageProps {
  type: 'speaker' | 'event' | 'campus' | 'infrastructure';
  alt: string;
}

type StyleConfig = {
  width: number | string;
  height: number | string;
  bgColor: string;
  shape: string;
};

export default function PlaceholderImage({ type, alt }: PlaceholderImageProps) {
  const getStyles = (): StyleConfig => {
    switch (type) {
      case 'speaker':
        return {
          width: 200,
          height: 200,
          bgColor: 'bg-maroon',
          shape: 'rounded-full',
        };

      case 'event':
        return {
          width: '100%',
          height: 250,
          bgColor: 'bg-maroon-light',
          shape: 'rounded-xl',
        };

      case 'campus':
        return {
          width: '100%',
          height: 300,
          bgColor: 'bg-maroon',
          shape: 'rounded-xl',
        };

      case 'infrastructure':
        return {
          width: '100%',
          height: 280,
          bgColor: 'bg-maroon',
          shape: 'rounded-xl',
        };

      default:
        // SAFETY NET (never crashes)
        return {
          width: 200,
          height: 200,
          bgColor: 'bg-maroon',
          shape: 'rounded-sm',
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`${styles.bgColor} ${styles.shape} flex items-center justify-center text-yellow`}
      style={{
        width: typeof styles.width === 'number' ? `${styles.width}px` : styles.width,
        height: typeof styles.height === 'number' ? `${styles.height}px` : styles.height,
      }}
      aria-label={alt}
    >
      <div className="text-center p-4">
        <p className="text-sm font-semibold">[Image Placeholder]</p>
        <p className="text-xs mt-1">{alt}</p>
      </div>
    </div>
  );
}
