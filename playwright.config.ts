import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// ============================
// UI BDD GENERATION
// ============================
const uiBddDir = defineBddConfig({
  features: 'e2e/ui/features/**/*.feature',
  steps: ['e2e/ui/steps/**/*.ts'],
  outputDir: '.features-gen-ui',
});

// ============================
// API BDD GENERATION
// ============================
const apiBddDir = defineBddConfig({
  features: 'e2e/api/features/**/*.feature',
  steps: ['e2e/api/steps/**/*.ts'],
  outputDir: '.features-gen-api',
});

export default defineConfig({
  reporter: [['html', { open: 'never' }]],

  projects: [
    // =========================
    // ✅ UI BDD PROJECT
    // =========================
    {
      name: 'ui-chromium',
      testDir: uiBddDir,
      use: {
        browserName: 'chromium',
        headless: true,
      },
    },

    // =========================
    // ✅ API BDD PROJECT
    // =========================
    {
      name: 'api',
      testDir: apiBddDir,
      use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
        },
      },
    },
  ],
});
