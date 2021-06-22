#!/bin/bash

# set defaults for dev mode
environment="development"
port="4200"
command="docker run -d -v ${PWD}:/co-etech-training-web -v /co-etech-training-web/node_modules -p 4200:4200 --name co-etech-training-web --rm co-etech-training-web:dev"

# if set to production, alter variable and command
if [ "$1" == "-prod" ] 
then
  echo "Running in production mode"
  environment="production"
  port="80"
  command="docker run -d -p 80:80 --rm co-etech-training-web:prod"
else
 echo "Running in development mode"
fi

# run the docker image and mount at ./co-etech-training-web and remove container and volumes on container exit
echo "Running $command"
containerId=$($command)
echo "Started container with id:$containerId"

# store the container id locally to be able to stop it later
echo $containerId > .runningContainer
sleep 5
echo "App running on port $port"
