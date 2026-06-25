
"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageWithSkeletonProps = ImageProps & {
  containerClassName?: string;
};

export default function ImageWithSkeleton({
  containerClassName = "",
  className = "",
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton shimmer — visible until image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/40 to-transparent" />
        </div>
      )}

      <Image
        {...props}
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}