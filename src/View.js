/**
 * @author Johan Nordberg
 */
define(function() {
	if( typeof ko === 'undefined')
		throw 'Knockout must be loaded first';
		
	if( typeof _ === 'undefined')
		throw 'Underscorejs must be loaded first';

	var View = function() {
		this.visible = ko.observable(false);
		this.model = ko.observable();
	};
	var p = View.prototype;

	View.extend = function(o) {
		_.extend(this.prototype, o);
		return this;
	};

	p.showView = function() {
		this.visible(true);
	};

	p.hideView = function() {
		this.visible(false);
	};
	
	return View;
});
