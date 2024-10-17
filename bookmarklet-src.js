// Supported git hosting services
valid_hosts = ["github.com", "gitlab.com", "bitbucket.org", "dev.azure.com"];

// Check if the current website is a valid git hosting service
if (valid_hosts.includes(document.location.host)) {
	// Clone the current repository with vscode
	vscode_url =
		"vscode://vscode.git/clone?url=" +
		document.location.origin +
		document.location.pathname;
	window.location.href = vscode_url;
} else {
	alert(
		"This website is not supported. If you want to be able to clone from this website, please add it to valid_hosts in the bookmarklet source code."
	);
}
