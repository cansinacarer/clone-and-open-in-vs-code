# Bookmarklet to Clone and Open a Repo in VSCode

This repository contains a Javascript snippet that opens VSCode and instructs it to clone the repository you are viewing in your browser.

## Usage

You can create a bookmark with the following as the URL. Then this bookmark becomes the shortcut for cloning a repository.

```js
javascript:valid_hosts = ["github.com", "gitlab.com", "bitbucket.org", "dev.azure.com"];if (valid_hosts.includes(document.location.host)) {vscode_url ="vscode://vscode.git/clone?url=" +document.location.origin +document.location.pathname;window.location.href = vscode_url;} else {alert("This website is not supported. If you want to be able to clone from this website, please add it to valid_hosts in the bookmarklet source code.");}
```
