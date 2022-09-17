# What Chord? 

### Yonah Aviv

__goal:__ make a web app that listens for guitar riffs through the microphone and automatically finds what chords fit the riff and displays suggested chord progressions on the screen.


__technologies:__ react, ____,______


__deadline:__ 

[ ] first draft by friday sep 17 

[ ] presentable version completed by oct 5.
------------------------------------

# `min-react`

Because `create-react-app` has way too much extra boilerplate

## Contents
```
src
├── components      # all React components
│   ├── Clock.js    # clock that ticks once a second (useState and useEffect example)
│   ├── Footer.js
│   └── Header.js
├── App.js          # main React app
├── index.css       # root-level styling
└── index.js        # React entrypoint (where React gets inserted into the page)
```

## Config
### Styling
Root page styling is done in `src/index.css`. All component styling is done through [`styled-components`](https://styled-components.com/docs/basics#getting-started) (example in `src/App.js`).

### Page Metadata
To customize the font, page title, page icon, etc. you can customize the page skeleton over in `public/index.html`. 

All fonts are served through [Google Fonts](https://fonts.google.com/), you can pick and choose your own over there!

### Deployment
[Vercel](https://vercel.com/) is the recommended way to deploy this site to the internet. [Current deployment](https://min-react.vercel.app/)


----



<h1 align="center">
  Vite Template React
</h1>

<p align="center">
  <a href="https://github.com/SafdarJamal/vite-template-react/releases">
    <img src="https://img.shields.io/github/v/release/SafdarJamal/vite-template-react" alt="GitHub Release (latest by date)" />
  </a>
  <a href="https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/SafdarJamal/vite-template-react" alt="License" />
  </a>
</p>

<p align="center">
    A <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a> starter template.
</p>

![Vite Template React](https://user-images.githubusercontent.com/48409548/130238925-9ffa2704-7e42-4d85-876d-44fefb6a1548.png)

## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
vite-template-react
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/SafdarJamal/vite-template-react.git
cd vite-template-react
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm start
```

And then open http://localhost:3000 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |

## Credits

Vite Template React is built and maintained by [Safdar Jamal](https://safdarjamal.github.io).

## License

This project is licensed under the terms of the [MIT license](https://github.com/SafdarJamal/vite-template-react/blob/main/LICENSE).
