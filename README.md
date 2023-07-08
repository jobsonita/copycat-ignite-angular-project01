# copycat-ignite-angular-project01

## Creating an Angular project

### Angular CLI

Before creating the project, make sure you have the required tools by running the following commands:

```bash
npm --version
node --version
ng --help
```
If you don't have npm or node, install them from [Node.js](https://nodejs.org/) homepage.

If you don't have Angular CLI (ng), install it through npm:

```bash
npm install -g @angular/cli
```

### Project creation

To create a new project with Angular, run the following commands:

```bash
ng new project01 --directory .
```

> **Trick**: we pass `--directory .` as an extra argument to allow picking the current directory as the project root.

Make sure to modify the `start` script in `package.json` to include the `--host=0.0.0.0` and `--disable-host-check` options when developing in Codespaces to bypass host checks until you have CORS properly configured.

At this point, I changed `src/index.html` and all files under `src/app/` to make it look like the initial state of Rocketseat's Ignite course.

### Installing the dependencies

If you just downloaded this project, run the following command:

```bash
npm install
```

### Running the project

Finally, execute the project with the command:

```bash
npm start
```
