import type { Metadata } from "next";

// login/page.tsx is a Client Component, so its metadata lives here.
// Vendor login is private: keep it out of search results.
export const metadata: Metadata = {
  title: "Vendor Login",
  description: "Sign in to your Khao vendor account.",
  robots: { index: false, follow: true },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
