import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@domain": path.resolve(__dirname, "src/domain"),
      "@infra": path.resolve(__dirname, "src/infra"),
      "@presentation": path.resolve(__dirname, "src/presentation"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@services": path.resolve(__dirname, "src/services"),
      "@application": path.resolve(__dirname, "src/application/*"),
      "@infrastructure": path.resolve(__dirname, "src/infrastructure/*"),
    },
  },
});
