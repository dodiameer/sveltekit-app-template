import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      plugins: [WindiCSS()],
      resolve: {
        alias: {
          //? $lib is aliased by default
          $components: resolve('./src/components'),
        },
      },
    },
  },
};

export default config;
