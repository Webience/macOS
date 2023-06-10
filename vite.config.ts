import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig(() => {
  return {
    base: "./",
    plugins: [qwikCity({
      //@ts-ignore
      basePathname: "/macOS/",
    }), qwikVite(), tsconfigPaths(), vanillaExtractPlugin(), webfontDownload()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
