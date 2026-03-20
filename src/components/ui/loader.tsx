"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 initial-loader-overlay">
      <div className="flex flex-col items-center gap-4">
        <svg className="w-20 h-20 text-[hsl(var(--primary))] animate-spin" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity="0.18" />
          <path fill="currentColor" d="M25 5a20 20 0 0 1 0 40 1 1 0 1 1 0-2 18 18 0 1 0 0-36z"></path>
        </svg>
        <div className="text-sm text-gray-200">Loading…</div>
      </div>
    </div>
  );
};

export default Loader;
