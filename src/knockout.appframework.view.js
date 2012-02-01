/**
 * @author Johan Nordberg
 */

if(typeof ko === 'undefined') throw 'Knockout must be loaded first';
if(typeof _ === 'undefined') throw 'Underscorejs must be loaded first';

var View = function() {
	this.visible = ko.observable(false);
	this.model = ko.observable();
};

View.extend = function(o) {
	_.extend(this.prototype, o);
	return this;
};

View.prototype.showView = function() {
	this.visible(true);
};

View.prototype.hideView = function() {
	this.visible(false);
};
