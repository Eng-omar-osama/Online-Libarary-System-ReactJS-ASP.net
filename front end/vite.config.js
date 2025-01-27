import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@ui": resolve(__dirname, "./src/ui"),
			"@services": resolve(__dirname, "./src/services"),
			"@features": resolve(__dirname, "./src/features"),
			"@pages": resolve(__dirname, "./src/pages"),
			"@context": resolve(__dirname, "./src/context"),
			"@hooks": resolve(__dirname, "./src/hooks"),
			"@utils": resolve(__dirname, "./src/utils"),
		},
	},
});
