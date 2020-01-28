# What You Will Be Installing - Windows

1. Visual Studio Code (Recommended) and Extensions
2. Git for Windows
3. Node.js and NPM Packages
4. Chrome (Recommended) or Firefox and Extensions
5. Slack

## Visual Studio Code (Recommended)

Visual Studio Code is an IDE, which is an intelligent code editor. We will be teaching with Visual Studio Code and highly recommend that you use it too. If you are experienced with programming and command line, and you believe that you can translate whatever we teach you in Visual Studio Code to your editor of choice, you may opt for another editor, but we will not be able to help you if problems arise.

To install, go to https://code.visualstudio.com and click on _Download for Windows_.

When it finishes downloading, double click on the downloaded .exe file and accept the License Agreement. You will accept all of the defaults until you get to the _Select Additional Tasks_ screen. I suggest that you check everything below. You should definitely check _Add to PATH_.

![Everything but Register Code as an empty editor for support file types](img/vsocde-select-additional-tasks.png)

Continue with the installer. When it finishes, Visual Studio Code should open. When it does, close out of it for now. We will revisit Visual Studio Code once we finish installing a few dependencies.

## Git for Windows

**You are required to use Git Bash because it supports Unix style commands. If you have Git installed but not Git Bash, then you should remove Git and follow the instruction below to reinstall.**

Git is version control software. It is used for sharing code, combining team members' code and managing different versions of your code.

To install git, got to https://git-scm.com/downloads and click on _Windows_.

When it finishes downloading, open the installer. If you are asked to allow the app to make changes to your device, click on _Yes_. Below is the recommended git settings. If you do not see instructions for whatever screen you are on, then accept the defaults.

### Select Components

I suggest you check the following:

![Additional Icons, Check daily for Git for Windows updates and the defaults](img/git-select-components.png)

### Choose the default editor used by Git

If you intalled Visual Studio code, select _Use Visual Studio Code as Git's default editor_ from the dropdown. If you opt for another code editor, you can select it from the list. If it's not there, then choose nano.

![Use Visual Studio Code as Git's default editor](img/git-default-editor.png)

### Configuring the line-endings conversions

To avoid unnecessary merge conflicts (believe me, merge conflicts are very frustrating), please make sure _Checkout Windows-style, commit Unix-style line endings_ is selected.

When you finish installing, you should see Git Bash on your computer. Open it, type `git --version` to confirm that it works. You should see something like _git version 2.23.0_. Then close out of Git Bash.

## Node.js and NPM Packages

Node.js is a JavaScript runtime engine. Basically, it allows you to run JavaScript programs outside of the browser.

You will need to have the latest _LTS_ version of Node installed as of January 2020 (12.14). If you already have Node.js installed, type `node -v` in Git Bash. If you do not have the latest version, you will need to remove Node.js and reinstall it again.

If Node.js is up-to-date, you should update NPM. You can update it with:

```bash
npm install -g npm@latest
```

To install Node.js, go to https://nodejs.org/en/ and click on the _12.14.X LTS_ version.

When it finishes downloading, open the downloaded file. Accept the License Agreement and all of the defaults. If you are asked to allow the app to make changes to your device, click on _Yes_.

When it’s finished installing, open Git Bash and type `node -v` to confirm that it has installed. If you had Git Bash open before installing Node.js and you get an error, try reopening Git Bash and see if this resolves the issue.

### ESLint

ESLint is a linter, meaning that it will point out potential errors while you are typing in a code editor like Visual Studio Code, Atom or Sublime.

To install ESLint and its React plugin, type:

```bash
npm install -g eslint
npm install -g eslint-plugin-react
```

When it’s finished, type `eslint -v` in your terminal to confirm it has installed.

### Yarn

Moving forward, we are going to use yarn instead of npm to manage and install packages. (Yarn is perferred by the React community). Install yarn with:

```bash
npm install -g yarn
```

## Visual Studio Code Setup and Extensions

### Setting Git Bash as your Default Shell

In Visual Studio Code, press `ctrl+shift+p`, search for _default shell_ and select _Terminal: Select Default Shell_. Then choose _Git Bash_.

![](img/vscode-windows-shell.png)

Press `` ctrl+` ``. If Git Bash opens inside of Visual Studio Code, then it worked.

![](img/vscode-git-bash.png)

### ESLint Extension

Open the Extensions tab on the left, search for _ESLint_ and install _ESLint_.

![](img/vscode-eslint.png)

Once its installed, the _Install_ button may have transformed into a _Reload_ button. If you see _Reload_, click on it.

### Quokka.js

[Quokka.js](https://quokkajs.com/docs/?editor=vsc) is a sandbox that lets you play with JavaScript inside Visual Studio Code and other popular code editors. Search for _Quokka_ in the Extensions tab on the left and install _Quokka.js_. Once its installed, click on _Reload_ if necessary.

If Quokka prompts you to go Pro, select _'Community' features only_.

![](img/vscode-quokka-prompt.png)

If you get this Windows Security Alert from Windows when running Quokka, make sure both options are checked and click on _Allow access_.

![Windows Security Alert](img/quokka-windows-alert.png)

### Prettier Extension (Optional)

Prettier automatically formats your code and you can configure it to format your code whenever you save a file. Using this is optional for now but we will require it for our final group project.

If you would like to use prettier, search for _Prettier_ in the Extensions tab on the left and install _Prettier - Code formatter_. Once its installed, click on _Reload_ if necessary.

You can now adjust Visual Studio's settings so that it will format on save and will play nicely with Prettier's defaults. Press `command+shift+p,` search for _settings_ and click on _Preferences: Open Settings (JSON))_.

![](img/settings-search.png)

Paste the following into the JSON file. Do not overwrite any settings that you already have.

```json
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
```

## Chrome (Recommended) or Firefox and Extensions

You are required to use Chrome or Firefox because the React and Redux extensions for debugging your code are only available for these browsers. We recommend Chrome because we will be demostrating Chrome's tools in class, but you are free to download any of following:

- [Chrome](https://www.google.com/chrome/) & [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [FirefoxDeveloperEdition](https://www.mozilla.org/en-US/firefox/developer/) & [React Developer Tools for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Firefox](https://www.mozilla.org/en-US/firefox/) & [React Developer Tools for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

We will also ask you install the _React Developer Tools_ extension as well. See the links above.

## Slack

Before installing Slack, please accept the invite to AlbanyCanCode's channel (_albanycancode_). You should have received an email before class.

Use can use the web or desktop version. If you would like to use the desktop version, go to https://slack.com/downloads/windows and click on a download option.
