import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: { unoptimized: true }
};

export default withFlowbiteReact(nextConfig);
