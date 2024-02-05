import autoprefixer from "autoprefixer";
import viteCompression from "vite-plugin-compression";
import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [viteCompression()],
  build: {
    rollupOptions: {
      input: ["scss/boilerplate.scss"],
      output: {
        assetFileNames: ({ name }) => name,
      },
    },
    outDir: "build",
    cssMinify: true,
  },
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [autoprefixer(),
        purgecss({
          content: ["blog/*.html"],
          safelist: [/^entry/, /^archive/, /^page/]
        }),
      ]
    }
  },
};
