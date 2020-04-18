(function ($) {	

	$.fn.HnSideMenu = function(param){
		if (param == undefined){
			param = defaults;
		}
		$("HnSideMenu").append('<input type="checkbox" id="hnside"/>')
		$("HnSideMenu").append('<div class="SideMenuContent"></div>')
		var sideMenuContent = $("HnSideMenu").children(".SideMenuContent")
		sideMenuContent.append('<aside> <h1>'+param.title+'</h1></aside>')
		var asides = sideMenuContent.children("aside")
		if(param.Content != undefined){
			asides.append(param.Content)
		}
		asides.css("width",param.width)
		//TODO:想办法将label和aside绑定
		sideMenuContent.append('<label for = "hnside">'+param.bartitle+'</label>')
		
	};
    /*插件默认参数 */
	var defaults ={
			"title"	:	"HnSideMenu",
			"bartitle"	:	"=",
			"Searchbtn" : false,	//是否生成搜索键
			"width":"200px",            //边框的宽度
			"CreateSearchTextId":"SearchText",
			"KeyDownAtcion":function(e,btnthis){},
			"Content"	:	''
	};

})(jQuery);