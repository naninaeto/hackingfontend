// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })


import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    tailwindcss(),
    nodePolyfills(),
  ],
  resolve: {
    alias: {
      stream: 'stream-browserify',
      timers: 'timers-browserify',
      events: 'events',
      // Add other necessary polyfills here
    },
  },
});
