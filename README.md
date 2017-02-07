# jQuery Plugin Boilerplate

The prime reason of this boilerplate is to kickstart maintainable and testable jQuery frontend plugins written with TypeScript.


## Getting started
### Duplicate boilerplate repository
See https://help.github.com/articles/duplicating-a-repository/ for assistance
After mirroring the plugin boilerplate follow these steps to prepare the plugin:

- Edit plugin settings in `webpack.config.js`
- Rename static NAME in `src/index.ts` to desired plugin name
- Change plugin filename in `example/index.html` to match new output filename
- Create interfaces for plugin options
- Do some magical modular plugin development and don't forget the tests!


## Development

To install all necessary packages run:
```
yarn install
```

NPM is also possible, if Yarn is not available for any reason
```
npm install
```

The build task uses [webpack](https://github.com/webpack/webpack) to bundle the modules together.
Only minimum configuration is used at them moment (ts-loader, UglifyJS, source-map). So feel free to commit improvements.

### Tasks
- `npm run build` cleans the dist folder and starts a single build with webpack
- `npm run build:watch` same as build task but with activated watch - this is the preferred task for development
- `npm run clean` cleans the dist folder
- `npm test` executes the tests with mocha and chai


## Conventions - Best practices

### Plugin base class - JQueryPluginBase
The plugin is always initialized in `index.ts` and extends the `JQueryPluginBase` class.
See https://github.com/virtualidentityag/jquery-plugin-base for more informations on the base class.

Plugins and modules share a single convention. They all have `init()` and `destroy()` methods, so initialization and destruction is clearly specified.

The main file `index.ts` is the plugins entry point. It is used to import and initialize the necessary modules
and should never contain any business logic.


### Module base class
All modules should extend the class `JQueryModuleBase`. This class is also the base class of `JQueryPluginBase`

Modules should do only one thing. Always keep maintainability and testability in mind. Write tests for each module.


## Interfaces
Define interfaces for options and plugin definitions in sub-folder `src/interfaces`.


## Testing

For testing we currently use plain simple mocha tests.


## ToDo
- Add ESLint task
- Create releases in GitHub for base, events and boilerplate repo as soon as the boilerplate is tested in real life scenarios
- Add e2e test cases with headless browser and demos for usage with "real" html elements
