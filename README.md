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
