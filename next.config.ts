import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty turbopack config — satisfies Next.js 16's requirement to opt in
  // explicitly when Turbopack is used (the default). This silences the
  // "webpack config with no turbopack config" error.
  // The tailwindcss @import resolution works correctly under Turbopack; the
  // webpack fallback that caused the original error is not needed here.
  turbopack: {},
};

export default nextConfig;
