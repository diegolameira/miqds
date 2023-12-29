import mileiq from "./src/lib/mileiq";

export default {
  presets: [mileiq],
  content: [
    "./src/**/*.{(j,t)s?(x),md?(x)}", // just for reference
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
};
