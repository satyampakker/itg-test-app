#!/bin/bash

# build and tag the docker image
if [ "$1" == "-prod" ] 
then 
  echo "building production docker image"
  docker build -f Dockerfile-prod -t CoETechTraining-Web:prod .
else 
  echo "building development docker image"
  docker build -t CoETechTraining-Web:dev .
fi
