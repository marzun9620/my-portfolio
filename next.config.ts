import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const repo = "my-portfolio" // Set to "" if deploying to <username>.github.io root

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd && repo ? `/${repo}` : undefined,
  assetPrefix: isProd && repo ? `/${repo}/` : undefined,
  trailingSlash: true,
}

export default nextConfig
