import type { NextConfig } from "next";

const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  // Empty turbopack config — satisfies Next.js 16's requirement to opt in
  // explicitly when Turbopack is used (the default). This silences the
  // "webpack config with no turbopack config" error.
  // The tailwindcss @import resolution works correctly under Turbopack; the
  // webpack fallback that caused the original error is not needed here.
  turbopack: {},

  async headers() {
    return [
      // Only the production host may be indexed. dev.khao.app, *.vercel.app
      // preview URLs and localhost all get a noindex header on every response
      // (pages stay statically rendered; this is applied at the routing layer).
      {
        source: "/:path*",
        missing: [{ type: "host", value: "khao\\.app" }],
        headers: noindex,
      },
      // Private / per-shop routes are never indexed, on any host.
      { source: "/login", headers: noindex },
      { source: "/menu/:path*", headers: noindex },
    ];
  },
};

export default nextConfig;
