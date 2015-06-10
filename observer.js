import guid from 'guid'

var targets = {}
var events = {}


exports.observe = function(target,event,callback){

}


exports.unobserve = function(guid){

}



/* todo: es6ify it
var Obs = {
	targets: {},
	events: {},
	observe: function(target, event, callback) {
		var id = guid();
		this.events[id] = event;
		this.targets[id] = target;
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
	},
	unobserve: function(guid) {
		if(typeof guid !== 'undefined'){
			Object.unobserve(this.targets[guid], this.events[guid]);
			return;
		}
		for (e in this.events) {
			if (Object.prototype.toString.call(this.events[e]) === "[object Array]") {
				Array.unobserve(this.targets[e], this.events[e]);
			} else {
				Object.unobserve(this.targets[e], this.events[e]);
			}
		}
		this.events = {};
		this.targets = {};
	}
}
*/