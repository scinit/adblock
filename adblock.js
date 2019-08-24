// ==UserScript==
// @name         adblock
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       scinit
// @include      *
// @grant        none
// ==/UserScript==

(function() {

	    //baidu
	    if(document.domain=="www.baidu.com"){
	    	var baiduad=document.getElementById('content_right');
	    	baiduad.parentNode.removeChild(baiduad);
	    }

	    //csdn
	    var re=/csdn.net/;
	    if(re.test(document.domain)){
	    	//www.csdn.net
	    	var csdnad=document.getElementById('asideProfile');
	    	csdnad.parentNode.removeChild(csdnad);

	    	//blog.csdn.net
	    	var blogad=document.getElementById("asideFooter").parentNode;
	    	blogad.parentNode.removeChild(blogad);

	    	//blog.csdn.net...
	    	var cstoobar=document.getElementsByClassName("csdn-side-toolbar")[0];
	    	cstoobar.parentNode.removeChild(cstoobar);

	    	//dmp_ad_58
	    	var middlead=document.getElementById("dmp_ad_58");
	    	middlead.parentNode.removeChild(middlead);

	    	//tool-box vertical
	    	var tooboxad=document.getElementsByClassName("tool-box")[0];
	    	tooboxad.parentNode.removeChild(tooboxad);
	    }


		

})();
