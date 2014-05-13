var meta = require("./meta-details.json");
var config = require("../src/config");
var template = {};
module.exports.metaTemplate = function(route) {
    var templateHtml = "";
    if(config.seoitems.is_fragment_enaled){
        templateHtml+='<meta name="fragment" content="!">';
    }
    templateHtml+='<meta name="robots" content="noodp,noydir"/><meta name="author" content="'+config.seoitems.author+'">';
    var title = config.seoitems.default_title;
    try {
        templateHtml += getHtmlTemplate(route);
        title = getTitle(route);
    } catch (e) {
        console.log(e, "I GUESS " + route + " IS NOT MENTIONED IN src/meta-details.json");
    }
    template.metaTags = templateHtml;
    template.title = title;
    exports.template = template;
    return template;
};
var getHtmlTemplate = function(key) {
    var templateHtml = "";
    try {
        templateHtml += '<meta name="description" content="' + meta[key]['description'] + '"/>';
        templateHtml += '<meta name="keywords" content="' + meta[key]['keywords'] + '"/>';
        templateHtml += '<meta property="og:locale" content="'+config.seoitems.og_locale+'" />';
        templateHtml += '<meta property="og:type" content="'+config.seoitems.og_type+'" />';
        templateHtml += '<meta property="og:title" content="' + meta[key]['fb_title'] + '"/>';
        templateHtml += '<meta property="og:description" content="' + meta[key]['description'] + '"/>';
        templateHtml += '<meta property="og:site_name" content="'+config.seoitems.sitename+'"/>';
        templateHtml += '<meta property="og:image" content="'+config.seoitems.default_image_url+'" />';
        templateHtml += '<meta itemprop="name" content="' + meta[key]['gplus_title'] + '">';
        templateHtml += '<meta itemprop="description" content="' + meta[key]['description'] + '">';
        templateHtml += '<meta itemprop="image" content="'+config.seoitems.default_image_url+'">';
        templateHtml += '<meta name="twitter:card" content="summary">';
        templateHtml += '<meta name="twitter:url" content="'+config.host+'">';
        templateHtml += '<meta name="twitter:title" content="' + meta[key]['twitter_title'] + '">';
        templateHtml += '<meta name="twitter:description" content="' + meta[key]['description'] + '">';
        templateHtml += '<meta name="twitter:image" content="'+config.seoitems.default_image_url+'">';
    } catch (e) {
        templateHtml = "";
    }
    return templateHtml;
};
var getTitle = function(key) {
    var title = "";
    try {
        title = meta[key]['title'];
    } catch (e) {
        title = "";
    }
    return title;
};
