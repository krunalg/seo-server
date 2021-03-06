var metaModule = require('../lib/meta.js'),
$ = require('jquery'),
page = require('webpage').create(),
fs = require('fs'),
funcs = require('../lib/functions.js'),
defaultConfig = require('../lib/config');

page.viewportSize = { width: 1280, height: 1000};

var system = require('system');
var lastReceived = new Date().getTime();
var requestCount = 0;
var responseCount = 0;
var requestIds = [];

var initialRequest = null;
var initialResponse = null;
var url = system.args[1];

page.onResourceRequested = function (request) {
  initialRequest = initialRequest || request;
  if(requestIds.indexOf(request.id) === -1) {
    requestIds.push(request.id);
    requestCount++;
  }
};

page.onResourceReceived = function (response) {
  initialResponse = initialResponse || response;
  if(requestIds.indexOf(response.id) !== -1) {
    lastReceived = new Date().getTime();
    responseCount++;
    requestIds[requestIds.indexOf(response.id)] = null;
  }
};

page.open(url,function(){
	var fname = funcs.getNameOfModule(url);
	var metaTemplates = metaModule.metaTemplate(fname);
	page.evaluate(function(metaTemplates) {
		document.body.bgColor = 'white';
		try{
			if($!=='undefined'){
				$("head").append(metaTemplates.metaTags);
				$("title").text(metaTemplates.title);
			}
		}catch(e){
			console.log("error:::",e);
		}
	},metaTemplates);
});

var checkComplete = function () {
  if(new Date().getTime() - lastReceived > 1000 && requestCount === responseCount)  {
    clearInterval(checkCompleteInterval);
    console.log(JSON.stringify(initialResponse) + "\n\n");
    if(initialResponse["contentType"] === "text/plain") {
      console.log(page.plainText);
    } else {
      console.log(page.content);
      try {
			if(defaultConfig.debugMode){
				var fname = funcs.getNameOfModule(url);
				fs.write(defaultConfig.snapshotPath+"/"+funcs.getFullDate()+'/'+funcs.getNameOfModule(url)+'.html', page.content, 'w');
				page.render(defaultConfig.snapshotPath+"/"+funcs.getFullDate()+'/'+funcs.getNameOfModule(url)+'.png');
			}
		} catch(e) {
			console.log(e);
		}
    }
    phantom.exit();
  }
};
var checkCompleteInterval = setInterval(checkComplete, 1000);
