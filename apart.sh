#!/usr/bin/env bash
mkdir $2
cp -r $1 $2
ABSPATH=$(pwd)
PROJECT_NAME=$2 || $(echo $ABSPATH | awk -F/ '{print $NF}')
PROJECT_PATH=$(echo ${ABSPATH}/${PROJECT_NAME})
ENTRY_POINT=$(echo $1 | awk -F/ '{print $NF}')
GITHUB_USER=$3
GITHUB_PASSWORD=$4
export PROJECT_NAME
export PROJECT_PATH
export ENTRY_POINT
export GITHUB_USER
export GITHUB_PASSWORD
export ABSPATH
./exec-node.sh