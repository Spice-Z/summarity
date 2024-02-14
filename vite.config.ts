import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import styleX from "vite-plugin-stylex";


export default defineConfig({
  plugins: [remix({ unstable_ssr: false }), tsconfigPaths(),styleX()],
  server: {
    port: 3000
  }
});
