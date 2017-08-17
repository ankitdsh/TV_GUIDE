


# A Reactive + Responsive + PWA created in VueJS using Webpack 

> A full-featured [PWA](https://developers.google.com/web/progressive-web-apps/) with webpack, hot-reload, lint-on-save, unit testing & css extraction.



## Usage / Installation

 Prerequisite: npm 3+ or [yarn](https://yarnpkg.com).


**API Server Installation**

``` bash
$ cd server
$ npm install
$ npm run dev
```
copy the External IP of your network displayed in the console and SET it as the `PATH` variable into `./src/store/config.js`


**App Installation**

``` bash
$ npm install 
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.


## Features

*	TV Guide made into a Responsive Single Page App
*	Light Weight , Quick Rendering JS Framework
*	Uses State Machine for maintaining state.
*	App State Integration with Chrome Extension for state time traveling
*	State maintainence on Device (Channel Favourites)
*	Reactive UI
*	Caching of data for Future request
*	Simple Node/Express API Server
*	Hot Reload Dev server


## More about the App 

*	Displays All Astro Channel List
*	Sorting based on Channel Name / Number (i.e channelStbNumber)
*	Toggling Favourites	+ device persistence
*	Searching for a Channel
*	Fetch Programme details for only those Channels in the ViewPort 
 

## Whats Included
*	VueJS
*	Vuex
*	Vuex Persist
*	RxJS
*	Webpack + Babel
*	Production build minification
*	Service Workers
*	ES6 (Arrow,Objet Destructuring , template Literals)
*	ES8 (Async/Await)
*	NodeJS / Express Simple MiddleWare Server with CORS Enabled 
*	Ngrok for tunneling local server to external IP 
*	etc..

