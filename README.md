# Twavatar

https://twavatar.netlify.com


An API to grab Twitter avatars with just their twitter handle. Built as a [JAMstack](https://jamstack.org) site and served on [Netlify](https://netlify.com), with a sprinkling of serverless functions via [Netlify Functions](https://www.netlify.com/blog/2018/03/20/netlifys-aws-lambda-functions-bring-the-backend-to-your-frontend-workflow/)

## Usage

```
// get the URL for the avatar of any twitter user by requesting:
https://twavatar.netlify.com/{small|large}/{handle}

// for example
https://twavatar.netlify.com/large/philhawksworth

```



## One of your very own

Hopefully, this little utility is already useful, but you can also get your own version to deploy and experiment with. It is a useful example for getting started with [Netlify Functions](https://www.netlify.com/blog/2018/03/20/netlifys-aws-lambda-functions-bring-the-backend-to-your-frontend-workflow/)

## Instructions

To get your own instance of this example site up and running on Netlify very quickly, just click the button below and follow the instructions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/twavatar)


## Wait, what happens when I click that button?

Good question. Here's what it will do...

1. Netlify will clone the git repository of this project into your Github account. It will be asking for permission to add the repo for you.
2. We'll create a new site for you in Netlify, and configure it to use your shiny new repo. Right away you'll be able to deploy changes simply by pushing changes to your repo.
3. That's it really.
