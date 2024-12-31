import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes'; // Ensure schemaTypes exports the correct array

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'n4jg6sql', // Replace with your project ID
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes, // Use the schemaTypes array directly
  },
});
