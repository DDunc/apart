# Apart

Apart is a command line utility designed to make it easier to create new packages out of existing code.

## Problem Statement

While working on a project, you create a nifty general utility. With a little bit of work, you've given it
a nice generic interface, some configuration options, maybe even tests. In your heart, you know this can
be a useful little module for your other projects, and probably useful for other developers as well.
It's not a huge amount of work, but it's definitely going to take you out of your flow. One of the goals of
Apart is to create a better reward loop associated with refactoring and cleaning up code so as to make it generic.

You need to:
1) Create a new project folder and move the file(s) over
2) Create a package.json file with mandatory fields filled out
3) Add your entry point (it's probably index.js, of course)
4) Add any dependencies to the package.json
5) git init
6) Push your repo up for easy use in future projects and to share with others

## Current Status
Under active development: currently works for node with an ugly api, will not work for most
 client-side projects without babelifying and running install-missing on the output file.

## Demo
If you want to see how quick and easy it can be to create (and push!) a new repo with dependencies
included, you can clone this project and run the following:

``npm start ./testfile.js My-Cool-Module $GITHUB_USER $GITHUB_PASSWORD``

__Note:__ This will actually create and push a new repo to Github!

## Other Scripts
Run ``npm run init-apart`` to set your own options, including:
* Persisting or deleting the new repo
* Pushing to github as a private repo
* Adding the newly created repo to your current project as a dependency
* Autogenerating a readme
