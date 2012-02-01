/**
 * @author Johan Nordberg
 */

module('Model');

test('Creating models', function() {
	// Setup
	
	var firstName = 'johan';
	
	var UserModel = Model.extend('User', {
		firstName: ko.observable(firstName),
		lastName: ko.observable('Nordberg')
	});

	var model = new UserModel();

	// Tests
	expect(3);
	
	ok(model, 'Could not create model');
	ok('firstName' in model && typeof model['firstName'] === "function", 'firstName property not created');
	equal(model.firstName(), firstName, 'FirstName doesnt match');

});

test('ID tests', function() {
	var UserModel = Model.extend('User', {});
	var model = new UserModel();
	
	equal(model.isNew(), true, 'isNew should be true.');
	equal(model.id(), undefined, 'id should be undefined')
});

test('Model property tests', function() {
	var UserModel = Model.extend('User', {
		firstName: ko.observable(),
		lastName: ko.observable()
	});
	var userModel = new UserModel();
	
	equal(UserModel.modelname, 'User', 'Name of the model should be User.');
});



