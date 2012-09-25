describe("User Registration", function() {

	describe("Spies", function() {
		beforeEach(function() {
		});
		
		afterEach(function(){
		});

		it("should call first name validation upon form validation", function(){
			spyOn(UserRegistration,'validateFirstName');
			UserRegistration.validate();
			expect(UserRegistration.validateFirstName).toHaveBeenCalled();
		});

		it("should call last name validation upon form validation", function(){
			spyOn(UserRegistration,'validateLastName');
			UserRegistration.validate();
			expect(UserRegistration.validateLastName).toHaveBeenCalled();
		});

		it("should call email validation upon form validation", function(){
			spyOn(UserRegistration,'validateEmail');
			UserRegistration.validate();
			expect(UserRegistration.validateEmail).toHaveBeenCalled();
		});
	});

	describe("First Name", function() {
		beforeEach(function() {
		});
		
		afterEach(function(){
		});
	});

	describe("Last Name", function() {
		beforeEach(function() {
		});
		
		afterEach(function(){
		});
	});

	describe("Last Name", function() {
		beforeEach(function() {
		});
		
		afterEach(function(){
		});
	});

});