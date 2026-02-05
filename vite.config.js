import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Personal Portfolio',
        short_name: 'Portfolio',
        description: 'My personal portfolio website',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/pwa-icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/pwa-icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
