import adapter from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: "warn", // Optional: helps with debugging
    },
  },
};

export default config;
