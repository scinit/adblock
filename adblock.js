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

   //百度
	var baiduad=document.getElementById('content_right');

    //csdn
    var csdnad=document.getElementById('asideProfile');

	if(baiduad!=null){
		baiduad.parentNode.removeChild(baiduad);
	}

	if(csdnad!=null){
		var aside=csdnad.parentNode;
		aside.parentNode.removeChild(aside);

	}


})();