### Welcome!
Seo Server is a command line tool a nodejs server that allows Crawlers or Bots to crawl your heavily Javascript built websites. 

### Getting started
* Edit configuration file `src/config.coffee.sample` and save it as
`src/config.coffee`
* Install npm dependencies <br/>
<code>npm install</code>
* Install PhantomJS <br/>
<code>npm install -g phantomjs</code>
* Start the main process on port 10300 and with default memcached conf:<br/>
<code>bin/seoserver start -p 10300</code>

#Guide
You can start it locally with:

<code>node lib/seoserver.js start</code>

And test its output with:

<code>curl -v http://localhost:10300</code>

**bin/seoserver** Forever-monitor script, for launching and monitoring the node main process.

<code>bin/seoserver start -p 10300</code>


### Credits

This code is based on a [tutorial by Thomas Davis](http://backbonetutorials.com/seo-for-single-page-apps/) and on https://github.com/apiengine/seoserver


