import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

defineBddConfig({
  features: 'e2e/features/**/*.feature',
  steps: ['e2e/steps/**/*.ts'],
  outputDir: '.features-gen'
});

export default defineConfig({
  testDir: '.features-gen',
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: true }
    }
  ]
});
