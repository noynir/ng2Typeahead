System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app": "src"
  },
  packages: {
    "app": {
      "main": "main.ts",
      "defaultExtension": "ts"
    }
  },


  map: {
    "jquery": "github:components/jquery@2.1.4",
    "typeahead": "github:twitter/typeahead.js@0.11.1",
    "typescript": "lib/typescript",
    "github:twitter/typeahead.js@0.11.1": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
