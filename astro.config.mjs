import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Outstanding Engineer",
      favicon: "/favicon.png",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Pages",
          items: [
            { label: "英語", slug: "1-english" },
            { label: "数学", slug: "2-mathematics" },
            { label: "プログラミング", slug: "3-programming" },
          ],
        },
      ],
    }),
  ],
});
