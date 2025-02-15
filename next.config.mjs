import i18config from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: i18config.i18n,
  images: {
    domains: ["localhost", "firebasestorage.googleapis.com"]
  }
};

export default nextConfig;
