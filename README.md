# Getting started

## Environment requirements

Here are the must have on your local machine for the project to work:

### Node

```shell
node -v
# v13.1.0
```

### Yarn

```shell
yarn -v
# 1.19.1
```

## Installation

Here are the commands you'll need to run to install the project:

```shell
git clone https://github.com/tungphan311/GymManager.git
cd /GymManager
code .
```

Create new file, name as ".env" (if this file isn't created yet) and paste line below to this file.

```shell
NODE_PATH=src/
```

After that, continue with commands below:

```shell
yarn
yarn start
```

## Setup your code editor

### VsCode

Here are some of the packages we use to ease up our development experience on VsCode:

- ES7 React/Redux/GraphQL/React-native snippets
- ESLint
- GitLens
- Import Cost
- npm Intellisens
- Prettier - Code formatter

We strongly advise that you turn on the format on save setting in VsCode so that your code gets automatically formatted according to the Prttier config of the project.

## Editor (vscode) should follow this configs:

```shell
"[javascriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[scss]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.autoFixOnSave": true,
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
"javascript.preferences.importModuleSpecifier": "non-relative",
```

Create new file, name as "jsconfig.json" (if it isn't exist) and paste those config below to it.

```shell
{
  "compilerOptions": {
    "target": "ES6",
    "baseUrl": "./src"
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```
