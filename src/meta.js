  var meta = require("./meta-details.json");
  var template = {};
  module.exports.metaTemplate = function(route){
	  var templateHtml = '<meta name="fragment" content="!">'+
						 '<meta name="robots" content="noodp,noydir"/><meta name="author" content="AUTHOR_NAME">';
	  var title = 'MAIN SITE TITLE/DEFAULT TITLE';
	  try{
		templateHtml += getHtmlTemplate(route);
		title = getTitle(route);
	  }catch(e){
		console.log(e,"I GUESS "+route+" IS NOT MENTIONED IN src/meta-details.json");
	  }
	  template.metaTags = templateHtml;
	  template.title = title;
	  exports.template = template;
	  return template;
  }
  var getHtmlTemplate = function(key){
		var templateHtml = "";
		try{
	  		templateHtml += '<meta name="description" content="'+meta[key]['description']+'"/>';
			templateHtml += '<meta name="keywords" content="'+meta[key]['keywords']+'"/>';
			templateHtml += '<meta property="og:locale" content="en_US" />';
			templateHtml += '<meta property="og:type" content="website" />';
			templateHtml += '<meta property="og:title" content="'+meta[key]['fb_title']+'"/>';
			templateHtml += '<meta property="og:description" content="'+meta[key]['description']+'"/>';
			templateHtml += '<meta property="og:site_name" content="NAME"/>';
			templateHtml += '<meta property="og:image" content="http://DEFAULT_IMAGE_LOGO_PATH" />';
			templateHtml += '<meta itemprop="name" content="'+meta[key]['gplus_title']+'">';
			templateHtml += '<meta itemprop="description" content="'+meta[key]['description']+'">';
			templateHtml += '<meta itemprop="image" content="http://DEFAULT_IMAGE_LOGO_PATH">';
			templateHtml += '<meta name="twitter:card" content="summary">';
			templateHtml += '<meta name="twitter:url" content="URL">';
			templateHtml += '<meta name="twitter:title" content="'+meta[key]['twitter_title']+'">';
			templateHtml += '<meta name="twitter:description" content="'+meta[key]['description']+'">';
			templateHtml += '<meta name="twitter:image" content="http://DEFAULT_IMAGE_LOGO_PATH">';
		}catch(e){
			templateHtml = "";
		}
	return templateHtml;
  }
  var getTitle = function(key){
	  var title = "";
	  try{
		  title = meta[key]['title'];
	  }catch(e){
		  title="";
	  }
	  return title;
  }
