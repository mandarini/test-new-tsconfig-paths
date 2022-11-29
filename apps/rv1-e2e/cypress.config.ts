import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import vitePreprocessor from 'cypress-vite';
import * as path from 'path';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        vitePreprocessor(path.resolve(__dirname, '../rv1/vite.config.ts'))
      );
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: require(path.resolve(__dirname, '../rv1/vite.config')),
    },
  },
});
