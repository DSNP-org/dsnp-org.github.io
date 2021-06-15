# DSNP.org Website Deployment Guide

We use Netlify for staging a continuous preview of the website, so you can always view your content changes there and check how they will appear. However, launching changes to the production website on GitHub Pages requires an extra manual step.

Before you can deploy the website, you will need to set up a minimal development environment, as described in the [Developer Guide](dev_guide.md).

## Running a production deployment

Once your development environment is set up, running a production deployment is as simple as running the command:

```sh
  $ npm run deploy
```

You should run this from the top-level directory of the `dsnp-web` repository. Make sure you are on the  `main` branch, and not on a feature development branch.

If you're running a deployment update, make sure you've merged all the changes you want to deploy into the `main` branch. Also make sure you have updated your local clone of the `main` branch with all the latest changes from GitHub.

## Running a local deployment

Using the same environment setup as a production deployment, you can run a local copy of the static site. This is particularly useful for previewing changes on a feature development branch before you commit them. For a local deployment, run:

```sh
  $ npm run serve
```

You will be able to view the the local deployment at `http://localhost:9000/`.


