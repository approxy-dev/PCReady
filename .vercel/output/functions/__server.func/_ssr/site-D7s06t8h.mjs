//#region node_modules/.nitro/vite/services/ssr/assets/site-D7s06t8h.js
var SITE_URL = ({
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_SITE_URL"] ?? "https://pcready.app").replace(/\/+$/, "");
function formatSize(bytes) {
	const mb = bytes / 1048576;
	return mb >= 100 ? `${mb.toFixed(0)} MB` : `${mb.toFixed(1)} MB`;
}
var downloads = [
	{
		id: "setup",
		file: "PCReady-Setup-v2.5.0-win-x64.exe",
		label: "PCReady Setup",
		version: "2.5.0",
		kind: "installer",
		sizeBytes: 53294410,
		sha256: "a4320b9a1636325fb10bc2fe5a631bab2d8b67c2bab8ab40ccc6c9a93d7fa057",
		description: "Our recommended install. Wrapped in an Inno Setup installer with Start Menu and desktop shortcuts. Self-contained — no .NET runtime needed.",
		recommended: true
	},
	{
		id: "portable",
		file: "PCReady-v2.5.0-win-x64-portable-selfcontained.zip",
		label: "Portable (self-contained)",
		version: "2.5.0",
		kind: "portable",
		sizeBytes: 71590841,
		sha256: "be472e308735f1564d31685f28573204738dce95111faa5ac3b468e71e1f2adc",
		description: "No installer, no .NET runtime needed. Unzip and run PCReady.exe."
	},
	{
		id: "framework",
		file: "PCReady-v2.5.0-win-x64-framework-dependent.zip",
		label: "Framework-dependent",
		version: "2.5.0",
		kind: "framework",
		sizeBytes: 6255582,
		sha256: "154eeb0681120773aa27c2bf51ab28968d3f7967fb0e365760d01b3afd4ab257",
		description: "Smallest download (~6.0 MB). Requires the .NET 8 Desktop Runtime, which is usually installed via Windows Update."
	}
].map((d) => ({
	...d,
	sizeLabel: formatSize(d.sizeBytes)
}));
var recommendedDownload = downloads.find((d) => d.recommended) ?? downloads[0];
//#endregion
export { SITE_URL, downloads, recommendedDownload };
