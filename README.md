# Free Portfolio 
## An Portfolio template for developers :rocket:

This is an portfolio template for users who need to create or bulid their portfolio in minutes. 

## Features :fire:
 - Fully Responsive
 - Free to use (Open Source)
 - Easy to Setup
 - Single Page Portfolio
 
 ## How to install :hammer::wrench:
After cloning the project, in your terminal:
- first run `npm i`, it will install all the dependencies or devDependencies required for this project from package.json file.
- then run `npm run dev`, which will start your local development server `https://localhost:3000`. It is used to run the dev script defined in the project's package. json file
 
 ## How to contribute :heart:
 
 ### 1. Fork the project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>
Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

<br />

### 2. Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

`$ git clone https://github.com/kunal838/FreePortfolio.git` <br/>
Now you have the project on your local machine.

<br />

### 3. Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

`$ cd <your-forked-project-folder>`
`$ git remote add upstream https://github.com/kunal838/FreePortfolio.git` <br/>
You will see the benefits of adding remote later.

<br />

### 4. Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

`$ git checkout main`
`$ git fetch upstream`
`$ git merge upstream/main`
`$ git push origin main` <br/>
The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

<br />

### 5. Create a new branch

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

`$ git checkout -b <feature-branch>`
This will create a new branch out of master branch. Now start working on the problem and commit your changes.

`$ git add --all`
`$ git commit -m "<commit message>"`
The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

<br />

### 6. Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

`$ git push origin main`
Now you are ready to help the project by opening a pull request means you now tell the project maintainers to add the feature or bug fix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be main and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.


# THANKS FOR VISITING !!!!!
# Thanks Again!!!!!!
