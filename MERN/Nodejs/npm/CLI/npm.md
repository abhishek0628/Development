# NPM CLI Commands – Notes with Examples

1. Initialize a Project
----------------------
# Interactive setup
npm init
# Auto-generate with defaults
npm init -y

Example:
$ npm init -y
# Creates package.json with default values

---

2. Install Package
------------------
# Local dependency (for current project)
npm install express

# Global dependency (available everywhere)
npm install -g nodemon

# Development dependency (only needed during development)
npm install --save-dev eslint

Example:
$ npm install express
# Installs Express in node_modules and adds to package.json dependencies

---

3. Uninstall Package
--------------------
npm uninstall express

Example:
$ npm uninstall express
# Removes Express from node_modules and package.json

---

4. Update Package
-----------------
npm update express

Example:
$ npm update express
# Updates Express to latest compatible version

---

5. Run Scripts
--------------
# Run scripts defined in package.json
npm run start
npm run dev

Example package.json scripts section:
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}

$ npm run dev
# Runs nodemon to auto-restart server during development

---

6. Check Package Info
--------------------
npm info express

Example:
$ npm info express
# Displays latest version, dependencies, repository, etc.

---

7. Search Package
-----------------
npm search lodash

Example:
$ npm search lodash
# Finds lodash packages in npm registry

---

8. Check npm and Node.js Version
--------------------------------
npm -v
node -v

Example:
$ npm -v
9.8.0
$ node -v
v20.5.1