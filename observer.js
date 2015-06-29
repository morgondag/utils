import guid from 'guid'

var targets = {}
var events = {}

exports.observe = function(target,event,callback){
	var id = guid.generate();
	events[id] = event;
	targets[id] = target;
	if (Object.prototype.toString.call(target) === "[object Array]") {
		Array.observe(target, event);
	} else {
		Object.observe(target, event);
	}
	if (typeof callback === 'undefined') {
		return id;
	} else {
		callback(id);
	}
}


exports.unobserve = function(guid){
	if(typeof guid !== 'undefined'){
		Object.unobserve(targets[guid], events[guid]);
		return;
	}
	for (e in events) {
		if (Object.prototype.toString.call(events[e]) === "[object Array]") {
			Array.unobserve(targets[e], events[e]);
		} else {
			Object.unobserve(targets[e], events[e]);
		}
	}
	events = {};
	targets = {};
}
