"use client";
import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-60 flex items-center justify-center">
      <div className="h-8 w-8 rounded-full bg-primary animate-pulse" />
    </div>
  );
}
