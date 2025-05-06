# Angry Pixel Skeleton - JavaScript

This template contains the necessary modules and the directory structure to start a new game project using [Angry Pixel Engine](https://github.com/angry-pixel-studio/angry-pixel-engine).

The directory structure is based on a layered architecture.

```yaml
public:
  - image: Contains the image assets
  - favicon.ico: You can replace it for your game icon.
  - index.html: Entry point of the game.
src:
  - component: Contains the component classes.
  - config: Contains the game config, assets, layers, and other config parameters.
  - entity: Contains the entities.
  - scene: Contains the scene classes.
  - system: Contains the system classes.
  - main.js: Entry point of the project, in this we instantiate the Game class.
```

You can create new directories to store assets inside `public` forder, for example, you can create an `audio` folder for the music and sound fx, or a `font` directory for the fonts.

## Setup development environment

### Clone the repository and move into the created directory

```bash
npx degit angry-pixel-studio/angry-pixel-skeleton-js my-game && cd my-game
```

You can also create your own repository based on this template by clicking the `Use this template` button.

### Install dependencies

```bash
npm install
```

### Run

```bash
npm run dev
```

The dev environment will run in http://localhost:5173/

## Build

The command will create a `dist` folder with all the files ready for distribution.

```bash
npm run build
```

## Share your game

Once built, you will have all the game data inside the `dist` folder, which can be used as a standalone website, or embedded inside an iframe, or shared on sites like [itch.io](itch.io) or [gamejolt.com](gamejolt.com) (in general these sites require the game folder to be uploaded as a .zip file).
