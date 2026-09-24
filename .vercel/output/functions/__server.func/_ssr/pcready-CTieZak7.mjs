//#region node_modules/.nitro/vite/services/ssr/assets/pcready-CTieZak7.js
var faqs = [
	{
		q: "What is PCReady?",
		a: "PCReady is a Windows desktop application that helps you rebuild your software environment after a fresh Windows installation. It combines a curated app catalog, setup profiles, an automated installation queue, download management, Windows and Office media tools, and diagnostics in one application."
	},
	{
		q: "Does PCReady reinstall applications that are already installed?",
		a: "No. PCReady detects installed applications using Windows package information and system detection. Profiles support an \"Install missing only\" mode so existing applications are skipped instead of being reinstalled."
	},
	{
		q: "Does PCReady require WinGet?",
		a: "WinGet is recommended because it unlocks search across thousands of additional Windows packages, but it is not required. When WinGet is unavailable, PCReady falls back to direct installers from the curated catalog."
	},
	{
		q: "Can I create custom profiles?",
		a: "Yes. Alongside the 5 built-in profiles (Student, Gamer, Mobile Developer, Data / Python, and Technician) you can build a custom profile from any of the 336 catalog applications and install only the ones missing from the current PC."
	},
	{
		q: "Can I use PCReady offline?",
		a: "The catalog is cached locally, so you can browse applications and prepare a selection without a connection. Downloads and installation resume once network access is available again."
	},
	{
		q: "Does PCReady support large Windows downloads?",
		a: "Yes. The download manager handles large files with retry handling, timeout control, and disk-space checks, and it can hand off supported large transfers to Internet Download Manager when IDM is detected."
	},
	{
		q: "Can I see installation logs?",
		a: "Yes. PCReady writes structured, timestamped logs for downloads, verification, and installer execution. Logs are stored locally and sensitive credentials are never logged."
	},
	{
		q: "Can I change download settings?",
		a: "Yes. Download directory, concurrent downloads, retry count, timeout, proxy, catalog source, and theme are all configurable, and settings are persisted locally."
	},
	{
		q: "Does PCReady support Windows 10 and Windows 11?",
		a: "PCReady runs on Windows 10 and Windows 11 on x64 and ARM64 systems."
	}
];
var queueItems = [
	{
		name: "7-Zip",
		status: "Installed",
		progress: 100
	},
	{
		name: "Git",
		status: "Installed",
		progress: 100
	},
	{
		name: "Visual Studio Code",
		status: "Installing",
		progress: 72
	},
	{
		name: "Google Chrome",
		status: "Downloading",
		progress: 41
	},
	{
		name: "VLC media player",
		status: "Queued",
		progress: 0
	}
];
//#endregion
export { faqs, queueItems };
