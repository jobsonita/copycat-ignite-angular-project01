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

## Concepts

### Components and @Input()

Components are the main building blocks for Angular applications. Each component consists of:

- An HTML template that declares what renders on the page
- A TypeScript class that defines behavior
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template

To create a new component, we use the following command (where `post` is the name of our component):

```bash
ng generate component post
```

It automatically creates the files and add a reference in `app.module.ts` so that we can use the `app-post` tag (defined in our post component) anywhere in our app, like we do in `app.component.html`

```typescript
/* src/app/post/post.component.ts */
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  @Input() author?: string;
  @Input() content?: string;
}
```

```html
<!-- src/app/post/post.component.html -->
<div>
  <strong>{{author}}</strong>
  <p>{{content}}</p>
</div>
```

```typescript
/* src/app/app.module.ts */
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  /*...*/
})
export class AppModule { }
```

```html
<!-- src/app/app.component.html -->
<div>
  <app-post author="Me" content="Whatever I want to say" />
  <app-post author="You" content="Whatever you want to say" />
</div>
```

### Scoped CSS

Angular already comes with scoped CSS out-of-the-box. Any rules defined in the component's css file will only apply to the component. But we can also define global rules in the `src/styles.css` file.

```css
/* src/app/app.component.css */
.danger {
  background: red;
}
```

```html
<!-- src/app/app.component.html -->
<div class="danger">
  <p>This paragraph has a red background</p>
</div>
```

```ts
/* src/app/app.component.ts */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project01';
}
```

If we use other components in our `app.component.html` file, those components won't see the `danger` class, and their `danger` classes won't be affected by the parent's one.

We can also move and/or rename our `src/styles.css` file, but we must also configure `angular.json` to point to that file.

#### Importing Fonts from CDNs

There are 3 alternatives: using `link` tags in our `index.html` file, using a `@import` rule in our `styles.css` file (or `global.css` if you renamed it), or using a third party loader like [`webfontloader`](https://www.npmjs.com/package/webfontloader). Below, I list both the link and import options, but according to [this answer on SO](https://stackoverflow.com/questions/12316501/including-google-fonts-link-or-import), 90% of the time we should use the link version.

```html
<!-- src/index.html: link version -->
<head>
  ...
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ...
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  ...
</head>
...
```

```css
/* src/global.css: import version */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

#### Component styling based on context

We can use a combination of `:host`, `:host(selectors)`, `:host-context` and `:host-context(selectors)` [special selectors](https://angular.io/guide/component-styles#special-selectors) to style a component based on its ancestors or siblings.

For example, to style only the posts which are siblings of other posts, we can use:

```css
:host-context + :host {
  .post {
    margin-top: 2rem;
  }
}
```

However, such usage isn't recommended. For alternatives, I'll mention 2 of them:

- Allowing for the parent to pass classes down to the component:

```css
/* child.component.css */
:host(.sibling) {
  .post {
    margin-top: 2rem;
  }
}
```

```html
<!-- parent.component.html -->
<app-child />
<app-child class="sibling" />
```

- Styling the children from the parent itself:

```html
<!-- parent.component.html -->
<app-child />
<app-child />
```

```css
/* parent.component.css */
app-child + app-child {
  .post {
    margin-top: 2rem;
  }
}
```

### Icon Libraries

In this project, we'll use the [Ng Icons](https://github.com/ng-icons/ng-icons) library as a substitute to the `phosphor-react` library used in Rocketseat's Ignite React course. We'll start with only the [Feather Icons](https://feathericons.com/) set of icons, but will add other sets as necessary.

Example of installation and usage:

```bash
npm install @ng-icons/core @ng-icons/feather-icons @ng-icons/heroicons
```

```ts
/* app.module.ts */
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ featherAirplay, heroUsers }),
  ],
})
export class AppModule {}
```

```html
<!-- xxx.component.html -->
<ng-icon name="featherAirplay" size="20" color="red" strokeWidth="2"></ng-icon>
```

Also, it lets us use it with standalone components (better than loading and providing the whole library globally), but we won't be using them in this project:

```ts
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ featherAirplay, heroUsers })],
})
export class AppComponent {}
```
