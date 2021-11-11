<h1 align="center">
    <img width="200" valign="bottom" src="docs/img/explorviz-transparent.png">
    Micro-Frontends 
</h1>

## Table of content

- 🔖 [Getting started](#getting-started)
- 🛠️ [Serving and testing apps](#serving-and-testing-application)
- 📚 [Apps and libs](#apps-and-libs)

## 🔖 Getting started

- Install node 10+ [https://nodejs.org/en/](https://nodejs.org/en/)
- Install npm [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
- Install Angular CLI `npm i -g @angular/cli`
- Install Ember CLI `npm install -g ember-cli`

## 🛠️ Serving and Testing Application

### 🚀 Serving

- **LANDSCAPE**

```bash

cd landscape

# install packages
npm install

# to serve app
npm run start
```

- **SHELL**

```bash
cd shell
npm install

# start app with
npm run start

# browse http://localhost:4200
```

- **VISUALIZATION** 


```bash

cd visualization

# install packages
npm install

# to serve app
npm run start
```

- **TRACE**

```bash

cd trace

npm install

npm run start
# Browse http://localhost:4500

```

### 🏗️ Build

- **LANDSCAPE**

```bash
# build (this step automatically build, copy assets etc...)
npm run build:all:prod
```

- **SHELL**


- **VISUALIZATION**

```bash
# build (this step automatically build, copy assets etc...)
npm run build:all:prod
```



### 🚨 Testing

## 📚 Apps and libs


| Service                          | Framework/Language   | Description     |
| -------------------------------  | -------------------- | --------------- |
| [Shell](./shell)                 | Angular/TypeScript   | -               |
| [Landscape](./landscape)         | EmberJS/TypeScript   | -               |
| [Visualization](./visualization) | EmberJS/TypeScript   | -               |
| [Trace](./trace)                 | Angular/TypeScript   | -               |

## INFOS

---

- For lazy loading chunks inside **shell** im using [Angular Extensions - Elements](https://github.com/angular-extensions/elements)

- For concat ember JS and CSS files im using [Ember cli concat](https://github.com/sir-dunxalot/ember-cli-concat)

#### Cannot embed app into another:

- https://stackoverflow.com/a/47391372/6432698
