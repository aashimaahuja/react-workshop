### Project Setup

- Creating App
- Adding linter
- Adding prettifier
- Adding husky

**Creating React App**

1. Using frameworks like NextJs, Remix, Gatsby
2. create-react-app
3. From scratch using webpack, babel
4. Using vite

**Creating React App with Vite**

1. `npm create vite@latest`
2. Name your project
3. Select framework ‘React’
4. Select variant (javascript/ typescript)
5. Go to the project directory and run commands:
   `npm install && npm run dev`
6. Voila!

---

**EsLint**

Install following packages

- eslint
- eslint-plugin-react
- eslint-plugin-react-hooks

> You can check in `package.json` if package is already installed or run command `npm list <package_name>`

**Create eslint config file**

You can define eslint configuration for a project in `.eslintrc.json` . You can specify rules that ESLint will apply when analysing the code

**Some useful eslint rules**

- react/react-in-jsx-scope
- react/jsx-uses-react

> Before React 17, it was important to import React in a jsx file because browser doesn't understand jsx out of the box. Babel would transpile it as React.createElement. It would throw an error if react is not imported.

**Add Airbnb eslint config**

`npm i eslint-config-airbnb`

## Add 
`"extends" : ["airbnb", "airbnb/hooks"]` to your `.eslintrc`

**Installing prettier**

- npm install --save-dev --save-exact prettier
- create .prettierrc.json file, add `{"singleQuote": true }`
- Set VScode default formatter to prettier and turn of format on save option.
- To prettify all files use command
  `npx prettier . --write`
- create .prettierignore file, add node_modules
- Add prettier command in scripts in package.json
  `"prettier": npx prettier . --write`

---

**Husky**

**Husky** allows developers to set up and manage pre-commit and pre-push Git hooks easily. Hooks are scripts that run automatically at specific points during the Git workflow. For example, before a commit is made or before pushing changes to a remote repository.

No more bad commits... :)

1. Add Pre Commit hook
2. Pre-push hooks
3. Custom hooks

**Installing husky**

1. `npx husky-init && npm install`
2. `npm install lint-staged --save-dev`
3. Add husky config in package.json

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,md,json}": [
      "npx prettier --write",
      "git add"
    ],
    "*.{js,jsx}": "npm run lint"
  }

```

6. `npx husky add .husky/pre-commit "npx lint-staged"`
