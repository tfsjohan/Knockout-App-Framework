/**
 * @author Johan Nordberg
 */

if(typeof ko === 'undefined') throw 'Knockout must be loaded first';
if(typeof _ === 'undefined') throw 'Underscore.js must be loaded first';

var Model = function() {
	this.id = ko.observable();
	this.isNew = ko.observable(true);
};

_.extend(Model, {
	modelname: "Model Name",
	
	extend: function(name, o) {
		this.modelname = name;
		_.extend(this.prototype, o);

		return this;
	},
	
	get: function(id){
		console.log("Get item for model ", this.modelname);
	},
	
	save: function(model){},
	
	destroy: function(model){},
});

_.extend(Model.prototype, {
	save: function() {
		Model.save(this);
	},

	destroy: function() {
		Model.destroy(this);
	}
});
