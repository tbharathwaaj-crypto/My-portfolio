import { useState } from "react";
import { assetUrl } from "../utils/assets";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
};

export function SafeImage({ src, alt, className = "", loading = "lazy", fetchPriority }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <span>Image unavailable</span>
      </div>
    );
  }
  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  );
}
