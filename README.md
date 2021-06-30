# poc-explorviz-shell
Exploviz PoC With Angular Shell


## Install Shell Angular app

```bash
cd shell  
npm install

# start app with 

npm run start 

```


## Build Landscape Ember app

```bash

cd landscape

npm install

# build custom element (normal build) and copy into shell assets

npm run build:all
```


## INFOS


- For lazy loading chunks inside shell im using [Angular Extensions - Elements](https://github.com/angular-extensions/elements)

- For concat ember JS and CSS files im using [Ember cli concat](https://github.com/sir-dunxalot/ember-cli-concat)

- `billy.js` and `billy.css` files are the result of ember-app build located here: https://github.com/billyjov/ember-react-microfrontend/tree/master/ember-app
