import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// This RETURNS A STRING (the generated testDir)
const testDir = defineBddConfig({
  features: 'e2e/features/**/*.feature',
  steps: ['e2e/steps/**/*.ts'],
  outputDir: '.features-gen'
});

export default defineConfig({
  testDir, // ✅ use it directly
  reporter: [['html', { open: 'never' }]],

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ]
});
