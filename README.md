### Welcome
Seo Server is a command line tool a nodejs server that allows Crawlers or Bots to crawl your heavily Javascript built websites. 

### Getting started
* Edit configuration file `lib/config.js` file with required parameters.

* Install npm dependencies <br/>
<code>npm install</code>

* Install PhantomJS <br/>
<code>npm install -g phantomjs</code>

* Install Forever <br/>
<code>npm install -g forever</code><br/>
Forever [Help](https://www.npmjs.org/package/forever)

* Start Server <br/>
<code>forever start src/run-seoserver</code>

* It will start server on default port configured on configurations <code>lib/config.js</code>

* Test output with
<code>curl -v http://localhost:3000</code>

### Credits
This code is based on a [tutorial by Thomas Davis](http://backbonetutorials.com/seo-for-single-page-apps/) and on https://github.com/moviepilot/seoserver


