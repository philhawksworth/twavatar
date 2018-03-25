---
title: Twavatar
layout: layouts/base.njk
---

# Quick twitter avatars from twavatar

An API to grab Twitter avatars with just their twitter handle. Built as a [JAMstack](https://jamstack.org) site and served on [Netlify](https://netlify.com), with a sprinkling of serverless functions via [Netlify Functions](https://www.netlify.com/blog/2018/03/20/netlifys-aws-lambda-functions-bring-the-backend-to-your-frontend-workflow/)

## Usage

```
// get the URL for the avatar of any twitter user by requesting:
{{ site.rootURL }}/[small|mid|large]/{handle}

// for example
{{ site.rootURL }}/large/philhawksworth

```
