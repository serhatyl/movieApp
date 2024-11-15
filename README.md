# Movie App

Movie App is a web application that allows users to discover movies. This app is built using React, TypeScript, and Webpack, and it uses JSON Server to provide mock API data.

## Getting Started

Follow this guide to set up and run the Movie App in your local development environment.

### Requirements

- Node.js (version 16 or higher recommended)
- npm or yarn

# Installation & Usage

## 1 - Clone the Repository

```bash
git clone https://github.com/serhatyl/movieapp.git
cd movieapp
```

## 2 - Install Dependencies

```bash
npm install
# or
yarn install
```

## 3 - Start the application:

```bash
npm start
# or
yarn start
```

The application uses the npm-run-all package for quick startup. If you prefer to start only the frontend or the JSON server, you can use the commands below:

```bash
npm start:webpack
npm start:json-server
#or
yarn start:webpack
yarn start:json-server
```

## Lint & Code Format

```bash
npm run lint
npm run pretty
# or
yarn lint
yarn pretty
```

## Testing

The application uses Jest for unit testing. To run the tests, follow these steps:

```bash
npm test
#or
yarn test
```

To watch file changes and rerun tests automatically, use:

```bash
npm test:watch
yarn test:watch
```

To view the test coverage report, use:

```bash
npm test:coverage
yarn test:coverage
```

## Author

- [@serhatyilmaz](https://www.bento.me/serhatyilmaz)
