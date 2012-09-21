describe("User Registration", function() {

	describe("First Name", function() {
		var validate = UserRegistration.validateFirstName;
		
		beforeEach(function() {
		});
		
		afterEach(function(){
		});

		it("should not pass validation on an empty string", function(){
			expect(validate('')).toBeFalsy();
		});

		it("should not pass validation on a null string", function(){
			expect(validate(null)).toBeFalsy();
		});

		it("should not pass validation on a single character", function(){
			expect(validate('a')).toBeTruthy();
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