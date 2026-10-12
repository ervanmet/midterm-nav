# Midterm Navigation

A small, responsive multi-page portfolio website built with HTML, SCSS, and JavaScript ES modules. The site uses hash-based navigation to load four different page views without a full-page reload.

## Team

- **Eve Vanmeter** — team leader
- **Chris Cucuietu** — teammate and GitHub contributor

## GitHub

[https://github.com/ervanmet/midterm-nav](https://github.com/ervanmet/midterm-nav)

## Pages and navigation

The navigation links load the following views:

- **Home** (`#home`)
- **About** (`#about`)
- **Services** (`#services`)
- **Contact** (`#contact`)

The page content is rendered inside the main element as the URL hash changes. The layout styles stack the main content and cards on smaller screens.

> **Mobile navigation:** The current navigation contains the four links, but it does not yet switch to a separate mobile menu. Add that behavior before presenting the project as meeting the mobile-navigation requirement.

## MVC structure

- **Model — `model/model.js`:** Maps route names to page templates and renders the selected template into the main element.
- **View — `pages/`:** Holds the content templates for Home, About, Services, and Contact.
- **Controller — `app/app.js`:** Initializes the Home page and responds to URL hash changes by requesting the appropriate view from the model.

## Run locally

1. Clone or download the repository.
2. Open the project through a local web server (for example, the VS Code Live Server extension). The JavaScript uses ES modules, so opening `index.html` directly as a `file://` URL may not work in all browsers.
3. Visit the local server URL in a browser and use the navigation links to switch pages.

To watch and compile the SCSS during development, run:

```sh
npm install
npm run compile:sass
```

The Sass script watches `scss/styles.scss` and writes the compiled stylesheet to `css/styles.css`.
