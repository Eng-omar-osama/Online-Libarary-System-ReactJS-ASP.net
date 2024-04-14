import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src",
			"@components": "/src/ui",
			"@services": "/src/services",
			"@utils": "/src/utils",
			"@hooks": "/src/hooks",
			"@context": "/src/context",
			"@pages": "/src/pages",
			"@features": "/src/features",
		},
	},
});
