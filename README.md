# Shirley portfolio website

This is a static site using a thin node server to serve HTML, CSS, and Javascript. It uses React, React Router, ES6 and Webpack for bundling.

## Development

Run `npm i` to install dependencies, then run `npm run dev`. Go to `localhost:3000` and you'll see the site running.

Generally, the top level pages of the site are in the `containers` folder, and re-usable or smaller components are in the `components` folder.

Before committing your changes, run `npm run build`. This will generate a production webpack bundle in the `dist` folder. Note: If you forget this step, you won't see your changes live on production!

## Deployment

This is deployed via [Firebase](https://console.firebase.google.com/u/0/project/shirley-huong-portfolio/hosting). Please ask to be a collaborator if you need permissions.

To deploy, follow the instructions [here](https://firebase.google.com/docs/hosting/deploying)
1. Install firebase `npm install -g firebase-tools`
2. `firebase use --add shirley-huong-portfolio`
3. `firebase deploy`

The DNS `www.shirleyhuong.com` points to the Firebase app.  
# shirley-huong
