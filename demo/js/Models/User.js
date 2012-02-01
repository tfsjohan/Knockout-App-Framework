define(['../../src/Model.js'], function(Model) {
	var UserModel = Model.extend('User', {
		firstName: ko.observable(),
		lastName: ko.observable()
	});
	
	return UserModel;
});
