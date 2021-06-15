# DSNP.org Website Developer Guide

For most development activity, you will only need to set up a minimal development environment.

## Setting up a minimal development environment

In order to run a deployment of the DSNP.org website, you will need to install a few components locally. This guide only covers the absolute minimum setup necessary to deploy the website, see the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-0/) for more detailed instructions on setting up a development environment, or for Mac or Windows instructions.

(Note: You might find it best to set up the deployment environment in a small container or VM, to keep it from cluttering up your desktop/laptop with NPM and other software.)

### DSNP.org source

Checkout a local copy of the DSNP.org website source code:

```sh
   $ git clone git@github.com:DSNP-org/dsnp-web.git
```

### Node.js & NPM

Gatsby runs on Node.js, so you will need to install it first. The Gatsby docs recommend installing version 14 or higher of Node.js, which is newer than many Linux distributions provide in their default packages. If you use Ubuntu with Snaps, you can install version 14, 15, or 16 of the [Node.js snap](https://snapcraft.io/node).

```sh
  $ sudo snap install node --channel=14/stable --classic
```

For other Linux distributions, Mac, or Windows, see the Node.js docs on [installing from a package manager](https://nodejs.org/en/download/package-manager/).

As a last resort, if you can't find a recent version of Node.js any other way, you can install it with `nvm` (the Node Version Manager). First install `nvm`:

```sh
 $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

Then use `nvm` to install version 14 of Node.js:

```sh
  $ nvm install 14
  $ nvm use 14
```

After you install Node.js, you can check that the install was successful by running:

```sh
  $ node --version
  $ npm --version
```

(Note: On some Linux distributions, the Node.js executable is named `nodejs` instead of `node`.)

### Gatsby CLI

The Gatsby command-line interface is a published Node.js package, so you install it using NPM:

```sh
  $ npm install gatsby-cli
```

You can check that the install was successful by running (it should be version 3 or higher):

```sh
  $ gatsby --version
```

### Ghost API Key

You need to tell Gatsby how to access the API for Ghost. For production or local deployments, Gatsby will pull this information from two environment variables:

 * `GHOST_API_URL` should be set to `https://ghost-cms.dsnp.org`.
 * `GHOST_CONTENT_API_KEY` should be set to the value of the read-only "Content API key" from Ghost. (You can find this API key in Ghost, under "Integrations" in the left sidebar, as a custom integrattion named "dsnp.org Gatsby".)

