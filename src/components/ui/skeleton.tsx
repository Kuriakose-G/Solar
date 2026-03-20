"use client";

import React from "react";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={`bg-muted animate-pulse rounded-md ${className}`}
    />
  );
};

export default Skeleton;
