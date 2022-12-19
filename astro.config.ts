/**
 * @Author linzeguang
 * @Date 2022-12-18 20:00:30
 * @LastEditTime 2022-12-19 11:30:24
 * @LastEditors linzeguang
 * @Description astro config 配置
 */

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react()],
  output: "server",
  adapter: vercel(),
});
