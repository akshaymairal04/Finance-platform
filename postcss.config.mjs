/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ use this instead of 'tailwindcss'
    autoprefixer: {}, // ✅ still needed
  },
};

export default config;
