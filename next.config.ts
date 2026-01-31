import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules = config.module.rules.filter(
      (rule) =>
        !(typeof rule === "object" &&
          rule &&
          "test" in rule &&
          rule.test instanceof RegExp &&
          rule.test.test(".svg"))
    );

    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  }

};

export default nextConfig;
