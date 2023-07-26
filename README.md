## CUSTOM REACT-APP

Enables creaton of React app that can be used in Medio. Also enables creation and building React components that can be shared among React-apps

### TODO:

-   Rename export function in scr/components/MAIN/index.tsx! This will be the name of the main component. If a component is built, it can be invoked by this name.
-   Do NOT change the name of the model.tsx, module.css, and the context.tsx files and the directory
-   Change the componentName in package.json
-   Change the package name to @username/packagename in package.json
-   Modify the index.d.ts file
    -   Start with `@username/[packagename]`
    -   Create namespace
    -   Change ComponentName everywhere

### BUILD APP:

index.js:

-   Rename window.renderAPP = renderAPP --> window.render[AppName] = renderAPP
-   Rename in the interface
-   Run: `npm run build`

### BUILD MAIN COMPONENT:

Run `npm run release:RELEASE_LEVEL` where RELEASE_LEVEL = major | minor | patch
In the other app run `npm i file:path/to/file/versions/....tgz`
