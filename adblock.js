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

		//获取当前域名
		var domain = document.domain;

		//baidu
		var baiduad=document.getElementById('content_right');
		var su=document.getElementById("su");

	    //csdn
	    var csdnad=document.getElementById('asideProfile');
	    if(domain=="www.baidu.com"){
	    	if(baiduad!=null){
	    		baiduad.parentNode.removeChild(baiduad);
	    	}
	    	
	    	su.onclick=function(){
	    		setInterval(function(){
	    			if(baiduad!=null){
			    		baiduad.parentNode.removeChild(baiduad);
			    	}
	    		},500);
	    		
	    	}
	    }

		

		if(csdnad!=null){
			var aside=csdnad.parentNode;
			aside.parentNode.removeChild(aside);

		}


})();