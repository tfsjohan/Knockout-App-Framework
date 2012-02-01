/**
 * @author Johan Nordberg
 */

define(function() {
	if( typeof ko === 'undefined')
		throw 'Knockout must be loaded first';
		
	if( typeof _ === 'undefined')
		throw 'Underscore.js must be loaded first';

	var Model = function() {
		this.id = ko.observable();
		this.isNew = ko.observable(true);
	};

	_.extend(Model, {
		modelname : "Model Name",

		extend : function(name, o) {
			this.modelname = name;
			_.extend(this.prototype, o);

			return this;
		},
		get : function(id) {
			console.dir(this.prototype);
		},
		save : function(model) {
		},
		destroy : function(model) {
		},
	});

	_.extend(Model.prototype, {
		get : function(id) {
			for(var member in this) {
				console.log(member);
			}
		},
		save : function() {
			Model.save(this);
		},
		destroy : function() {
			Model.destroy(this);
		}
	});
	
	return Model;
});
