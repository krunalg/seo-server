var getNameOfModule = function(url){
	var urlParts = url.split("/");
	var fname = urlParts[urlParts.length - 1]||'home';
	if(fname.indexOf('?')){
		fnameParts = fname.split("?");
		fname = fnameParts[0];
	}
	return fname;
}
module.exports.getNameOfModule = getNameOfModule;
module.exports.getFullDate = function(){
	var today = new Date();
	var dateStr = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
	return dateStr;
}
