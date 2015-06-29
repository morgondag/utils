import easing from './easing';


exports.anim = function(prop, val, duration,delay,callback,ease) {
	if(typeof ease === 'undefined'){
		ease = 'easeInOutBack';
	}
	var start,end,current,distance,progress=0;
	
	var step = function() {
		var timestamp = new Date().getTime();
		progress = Math.min((duration - (end - timestamp)) / duration, 1);
		current + (distance * easing[ease](progress));
		if (progress < 1){
			requestAnimationFrame(step);
		} else {
			if(typeof callback === 'function'){
				callback(current);
			}
		}
	}.bind(this)
	setTimeout(function() {
		start = new Date().getTime();
		end = start + duration;
		current = prop;
		distance = val - current;
		step();
	}.bind(this), delay);
}
