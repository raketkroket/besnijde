interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  rounded?: string;
  objectPosition?: string;
  priority?: boolean;
}

export function Image({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-xl2',
  objectPosition = 'object-center',
  priority = false,
}: ImageProps) {
  return (
    <div className={`relative overflow-hidden bg-bcn-50 ${aspect} ${rounded} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={`w-full h-full object-cover ${objectPosition} ${imgClassName}`}
      />
    </div>
  );
}
