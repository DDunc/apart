#!/usr/bin/env bash

read -p "Project name: " name;
read -p "Version: " version;
read -p "Project description: " description;
read -p "Entry point: " entryPoint;
read -p "Test command: " testCommand;
read -p "Git repository: " gitRepo;
read -p "Keywords: " keywords;
read -p "Author: " author;
read -p "License: " license;
read -p "Is this okay?: " isOkay;

/usr/bin/expect <<!

spawn npm init
expect "Project name:"
send "woo\n"
expect "version:"
send "$version\n"
expect "description:"
send "$description\n"
expect "entry point:"
send "$entryPoint\n"
expect "test command:"
send "$testCommand\n"
expect "git repository"
send "$gitRepo\n"
expect "keywords:"
send "$keywords\n"
expect "author:"
send "$author\n"
expect "license:"
send "$license\n"
expect "Is this ok?"
send "$isOkay\n"
expect eof!
echo "DONE!"