"use client";

import { useEffect } from "react";

interface DevfolioButtonProps {
  slug: string; 
  theme?: "light" | "dark" | "dark-inverted";
  width?: string;
  height?: string;
}

export default function DevfolioButton({
  slug,
  theme = "light",
  width = "312px",
  height = "44px",
}: DevfolioButtonProps) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug={slug}
      data-button-theme={theme}
      style={{
        width,
        height,
      }}
    />
  );
}
