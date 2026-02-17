import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export"
};

export default withFlowbiteReact(nextConfig);
