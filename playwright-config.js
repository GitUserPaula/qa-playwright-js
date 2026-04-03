// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',                    
  testMatch: '**/*.spec.js',        
  use: {
    headless: false,                
    screenshot: 'on', 
    reporter: 'html',              
  },
});