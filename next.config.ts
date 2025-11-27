import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH?.trim().replace(/^\/+|\/+$/g, "") || ""

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd && basePathEnv ? `/${basePathEnv}` : undefined,
  assetPrefix: isProd && basePathEnv ? `/${basePathEnv}/` : undefined,
  trailingSlash: true,
}

export default nextConfig
