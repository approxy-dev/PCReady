//#region node_modules/.nitro/vite/services/ssr/assets/site-Bvq3kyV4.js
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
var downloadArtifact = {
	file: "PCReady.exe",
	label: "PCReady (Self-contained)",
	version: "2.5.0",
	sizeBytes: 169209693,
	sizeLabel: formatSize(169209693),
	sha256: "27a585845b892ee870ffe18980189a56d7e102ce247e86d34344e897ba61c916",
	description: "No installer and no .NET runtime needed. Extract anywhere and run PCReady.exe — the self-contained portable build.",
	href: "https://github.com/approxy-dev/PCReady/releases/latest/download/PCReady.exe",
	checksumHref: "https://github.com/approxy-dev/PCReady/releases/latest/download/VERSION.txt"
};
var legalDisclaimer = {
	title: "Responsible Use Notice",
	body: "PCReady is a legitimate system-preparation tool. It does not distribute, endorse, or promote cracked, pirated, or unlicensed software — including unofficial versions or activators for Internet Download Manager, Microsoft Windows, or Microsoft Office. You are solely responsible for obtaining valid licences and ensuring your use of any software is lawful. PCReady and its developers are not responsible for how the application is used."
};
//#endregion
export { SITE_URL, downloadArtifact, legalDisclaimer };
