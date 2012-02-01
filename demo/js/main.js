require(['Models/User'], function(UserModel) {
	var vm = {};
	
	var userModel = new UserModel();
	vm.user = userModel;
	
	ko.applyBindings(vm);
	window["viewModel"] = vm;
});
