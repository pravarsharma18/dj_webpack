```
npm init
```

```
npm install -D webpack webpack-cli
```

create file named "webpack.config.js" and write configuration

```
const path = require("path");

module.exports = {
  entry: "./assets/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src", "static", "js"),
  },
};
```

add "dev" in scripts in pakage.json to run webpack

```
"dev": "webpack --watch --mode development"
```
## installing HTMX and Alpinejs
```
npm install htmx.org alpinejs
```