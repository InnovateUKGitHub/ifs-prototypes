# ifs-prototypes

You can view the IFS library and prototypes here:

[Heroku Demo](https://ifs-prototypes.herokuapp.com/)

## Up and running

### Prerequisite
**node** (works with v10.15.2) [nodeJS](https://nodejs.org/en/)

**npm** Node Package Manager (should be bundled with node)

**nvm** Node Version Manager [nvm repo](https://github.com/creationix/nvm)

**heroku**  Heroku "toolbelt" or [CLI](https://devcenter.heroku.com/articles/heroku-cli) (only required if you will be building on Heroku)

### Installation
1. clone repo: ``` git clone git@github.com:InnovateUKGitHub/ifs-prototypes.git ```
2. install dependencies: ``` npm install ```
3. run the app: ``` npm start ```
4. view locally: [http://localhost:3000](http://localhost:3000)
5. you will need the username and password supplied from another member of the team 

### Git and Heroku

This is only a very brief overview of the process

1. work in a sensibly-named branch off master
2. add/commit/push to Git as normal
3. create a pull request and have it reviewed
4. merge working branch to master branch
5. rebuild on master, ```git push heroku master```