import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared 1200×630 social card (app/opengraph-image.tsx + app/twitter-image.tsx).
// Brand colours from app/globals.css: brand #DC2626, ink #121212.
export const ogSize = { width: 1200, height: 630 };
export { OG_IMAGE_ALT as ogAlt } from "./site";

export async function renderOgImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121212",
          padding: "72px 80px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={112} height={112} style={{ borderRadius: 24 }} alt="" />
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>Khao</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, color: "#DC2626", letterSpacing: -1.5 }}>
            QR menus & table ordering
          </div>
          <div style={{ fontSize: 40, marginTop: 18, color: "#E4E4E7", lineHeight: 1.25 }}>
            for tea stalls, cafes, food trucks and small restaurants in India.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#A1A1AA",
            borderTop: "2px solid #2A2A2A",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>Diners scan and order. No app install.</div>
          <div style={{ display: "flex", color: "#ffffff", fontWeight: 700 }}>khao.app</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
