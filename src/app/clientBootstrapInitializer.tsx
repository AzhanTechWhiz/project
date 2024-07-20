// src/components/ClientBootstrapInitializer.tsx

"use client"; // Add this directive

import { useEffect } from "react";

export default function ClientBootstrapInitializer() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // This component doesn't render anything
}
