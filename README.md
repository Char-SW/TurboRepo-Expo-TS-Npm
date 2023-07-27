# Intro

One of the PoCs using the official Turborepo starter. Added an Expo App using typescript. All using npm. 
I purposely left some of the default apps and packages using this starter as a full visual of the potential options TR gives us. 


## What's inside?

Includes the following packages/apps:

### Apps and Packages

- `native`: an [Expo](https://expo.dev/) app
- `common`: common package providing functions used from other features
- `feature 1`: imports and uses the expo-image dependency
- `feature 2`: imports and uses another internal modußle as a dependency (common)
- `feature 3`: navigates between modules / uses nested navigator to move between screens within the module
- `features`: uses turbo gen to generate sourcecode for new packages

#### Defaults with installation:
- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications 
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Setup
```
npm install
```
### Develop

#### Whole repo

To develop all apps and packages, run the following command:

```
npm run dev
```

#### Native only

```
cd apps/native
npx expo start
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```





