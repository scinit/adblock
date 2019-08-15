// ==UserScript==
// @name         adblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       scinit
// @include      *
// @grant        none
// ==/UserScript==

(function() {

	    //baiduiiiiiiiiiiiiiiiiiiiii
	    if(document.domain=="www.baidu.com"){
	    	var baiduad=document.getElementById('content_right');
	    	baiduad.parentNode.removeChild(baiduad);
	    }

	    //csdn
	    if(document.domain="www.csdn.net"){
	    	var csdnad=document.getElementById('asideProfile');
	    	csdnad.parentNode.removeChild(csdnad);
	    }


})();
