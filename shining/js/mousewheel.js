// $.fn.extend({});
// $ ===jQuery

// 调用$(元素).mouseWheelFn()

$.fn.extend({
	mousewheelFn:function(upFn,downFn){
		// jq里面的this:$(this)
		var element = $(this).get(0);

		element.onmousewheel = fn;
		//判断浏览器是否支持addEventListener方法
		if(window.addEventListener){
			element.addEventListener("DOMMouseScroll", fn, false);
		}
		function fn(e){
			var e = e || window.event;
			// 判断滚轮方向(向上)
			if(e.wheelDelta > 0 || e.detail < 0){
				upFn();
			}else{
				downFn();
			}
			// 阻止冒泡
			e.cancelBubble = true;
			e.stopPropagation();
		}
	}
})