import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
export default defineConfig({root:'standalone',base:'./',plugins:[react()],publicDir:'../public',resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},build:{outDir:'../dist-static',emptyOutDir:true}});
