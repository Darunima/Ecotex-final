import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Ecotex-final/",   // <<< ADD THIS LINE HERE

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        tutorial: path.resolve(__dirname, 'Tutorial.html'),
        gallery: path.resolve(__dirname, 'Gallery.html'),
        abouti: path.resolve(__dirname, 'Abouti.html'),
        collab: path.resolve(__dirname, 'collab.html'),
        signin: path.resolve(__dirname, 'signin.html'),
        signup: path.resolve(__dirname, 'signup.html'),
        freetrial: path.resolve(__dirname, 'freetrial.html'),
        design: path.resolve(__dirname, 'design.html'),
        example: path.resolve(__dirname, 'Example.html'),
      }
    }
  },

  server: {
    host: "::",
    port: 8080,
    open: false,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
