#!/usr/bin/env bash
mkdir $2
cp -r $1 $2
ABSPATH=$(pwd)
PROJECT_NAME=$2 || $(echo $ABSPATH | awk -F/ '{print $NF}')
PROJECT_PATH=$(echo ${ABSPATH}/${PROJECT_NAME})
ENTRY_POINT=$(echo $1 | awk -F/ '{print $NF}')
export ABSPATH
export PROJECT_NAME
export PROJECT_PATH
export ENTRY_POINT
./expector.exp