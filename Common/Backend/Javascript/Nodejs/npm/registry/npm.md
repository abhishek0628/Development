# npm Registry

The **npm Registry** is an **online database** of Node.js packages (modules).
Think of it like an **app store for Node.js**, except the apps are JavaScript libraries and frameworks.

* Anyone can publish a package (**public**)
* Companies can have **private packages** (restricted access)
* Millions of packages are available

---

## How it works

1. **Publish**: A developer publishes a package to the registry using:

```bash
npm publish
```

2. **Install**: Anyone can fetch it via npm CLI:

```bash
npm install <package-name>
```

3. **Update**: Packages can be updated, and npm ensures you can control which version you want.

---

## Key Features

* **Central repository**: All publicly available Node.js packages live here
* **Versioning**: Each package has versions (semver: major.minor.patch)
* **Scoped packages**: Private or organizational packages
* **Searchable**: You can search packages online or via CLI:

```bash
npm search <keyword>
```

---

## Example

Install a package from the registry:

```bash
npm install express
```

* Node fetches `express` from the npm Registry
* Downloads all its dependencies
* Installs them in `node_modules`

---

## TL;DR

The **npm Registry** =

> A huge online library where all Node.js packages live, ready to download, share, or
