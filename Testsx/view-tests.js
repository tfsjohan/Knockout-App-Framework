/**
 * @author Johan Nordberg
 */

var View1 = View.extend({
	myprop: ko.observable('Test')
});

var view1 = new View1();

console.dir(view1);

