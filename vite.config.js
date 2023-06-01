import { glob } from "glob";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        ...{ main: resolve(__dirname, "index.html") },
        ...Object.fromEntries(
          glob.sync("src/pages/*.html").map((file) => [
            // This remove `src/` as well as the file extension from each
            // file, so e.g. src/nested/foo.js becomes nested/foo
            path.relative(
              "src/pages",
              file.slice(0, file.length - path.extname(file).length)
            ),
            // This expands the relative paths to absolute paths, so e.g.
            // src/nested/foo becomes /project/src/nested/foo.js
            fileURLToPath(new URL(file, import.meta.url)),
          ])
        ),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
});
