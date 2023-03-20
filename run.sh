#!/bin/bash

# Run lerna bootstrap
lerna bootstrap
lerna exec npm install

# Navigate to the Angular library package directory
cd packages/vm-ui

# Run npm build command
npm run build

# Navigate back to the root directory
cd ../..

# Start the Node.js server
cd packages/vm-server
npm start
