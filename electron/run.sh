#!/usr/bin/env bash

# Script folder
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
STRATOS="`cd "${DIR}/..";pwd`"

BUILD_FRONTEND=false
BUILD_BACKEND=false
ARGS=""

if [ "$1" == "fe" ]; then
  BUILD_FRONTEND=true
  shift
elif [ "$1" == "be" ]; then
  BUILD_BACKEND=true
  shift
elif [ "$1" == "all" ]; then
  BUILD_FRONTEND=true
  BUILD_BACKEND=true
  shift
fi

if [ "$1" == "dev" ]; then
  ARGS="dev"
fi

pushd ${DIR} > /dev/null
# Checks for fresh run on checkout
if [ ! -d "./node_modules" ]; then
  echo "Installing node modules ..."
  npm install
fi
popd > /dev/null

pushd ${STRATOS} > /dev/null

if [ ! -d "./node_modules" ]; then
  echo "Installing node modules in top-level folder ..."
  npm install
fi

if [ "$1" != "be" && ! -d "./dist" ]; then
  BUILD_FRONTEND=true
  echo "Frontend has not been built - will build"
fi

if [ ! -f "./src/jetstream/jetstream" ]; then
  BUILD_BACKEND=true
  echo "Backend has not been built - will build"
fi

if [ "$BUILD_FRONTEND" == "true" ]; then
  # Ensure the desktop-extendsions are included
  STRATOS_YAML=./electron/stratos.yaml ng build --configuration=desktop
fi
if [ "$BUILD_BACKEND" == "true" ]; then
  # Ensure we include the desktop backend plugin
  STRATOS_YAML=./electron/stratos.yaml npm run prepare-backend
  npm run build-backend
fi
cp ./src/jetstream/jetstream ./electron
cp -R ${STRATOS}/dist ${DIR}
cp -R ${STRATOS}/dev-ssl ${DIR}
popd > /dev/null

cat ../package.json | jq -r .version > version

echo "Building ...."
npm run electron -- ${ARGS}