"use client";
import React, { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookieConsent", "true");
    } catch {
      // ignore storage errors in restricted environments
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 mx-4 mb-4 rounded-md md:mx-6">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between gap-4">
        <span className="text-sm text-gray-700">
          Bu site çerezleri kullanır. Deneyiminizi geliştirmek için çerezleri kullanmamıza izin verin.
        </span>
        <button
          onClick={accept}
          className="bg-primary text-white font-semibold px-4 py-2 rounded"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
