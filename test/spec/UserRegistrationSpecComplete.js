describe("User Registration", function() {

	describe("Track Validation Methods", function() {
		var validate = UserRegistration.validateFirstName;
		
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
			expect(validate('a')).toBeFalsy();
		});

		it("should pass validation on 2 alpha characters", function(){
			expect(validate('aa')).toBeTruthy();
		});

		it("should pass validation on 20 alpha characters", function(){
			expect(validate('abcdeabcdeabcdeabcde')).toBeTruthy();
		});
		it("should not pass validation on 21 alpha characters", function(){
			expect(validate('abcdeabcdeabcdeabcdea')).toBeFalsy();
		});

		it("should pass with spaces", function(){
			expect(validate('hello world')).toBeTruthy();
		});

		it("should pass with apostrophy", function(){
			expect(validate("O'Neal")).toBeTruthy();
		});

		it("should not pass with numbers", function(){
			expect(validate("1234")).toBeFalsy();
		});

		it("should not pass with alpha numberic characters", function(){
			expect(validate("hello123")).toBeFalsy();
		});

		it("should not pass with special characters", function(){
			expect(validate("hello#$%^.")).toBeFalsy();
		});
	});

	describe("Last Name", function() {
		var validate = UserRegistration.validateLastName;
		
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
			expect(validate('a')).toBeFalsy();
		});

		it("should not pass validation on 2 alpha characters", function(){
			expect(validate('aa')).toBeFalsy();
		});

		it("should pass validation on 3 alpha characters", function(){
			expect(validate('aaa')).toBeTruthy();
		});

		it("should pass validation on 25 alpha characters", function(){
			expect(validate('abcdeabcdeabcdeabcdeabcde')).toBeTruthy();
		});

		it("should not pass validation on 26 alpha characters", function(){
			expect(validate('abcdeabcdeabcdeabcdea')).toBeFalsy();
		});

		it("should pass with spaces", function(){
			expect(validate('hello world')).toBeTruthy();
		});

		it("should pass with apostrophy", function(){
			expect(validate("O'Neal")).toBeTruthy();
		});

		it("should not pass with numbers", function(){
			expect(validate("1234")).toBeFalsy();
		});

		it("should not pass with alpha numberic characters", function(){
			expect(validate("hello123")).toBeFalsy();
		});

		it("should not pass with special characters", function(){
			expect(validate("hello#$%^.")).toBeFalsy();
		});
	});

	describe("Email Format Validation", function() {
		var validate = UserRegistration.validateProperEmailFormat;
		
		beforeEach(function() {
		});
		
		afterEach(function(){
		});

		it("should not pass validation on a null strings", function(){
			expect(validate(null)).toBeFalsy();
		});

		it("should not pass validation on empty strings", function(){
			expect(validate('')).toBeFalsy();
		});

		it("should validate for a proper formatted email", function(){
			expect(validate('email@email.com')).toBeTruthy();
		});

		it("should validate for a proper formatted email", function(){
			expect(validate('email@email.net')).toBeTruthy();
		});

		it("should validate for a proper formatted email", function(){
			expect(validate('email@email.co.uk')).toBeTruthy();
		});

		it("should not validate for a improper formatted email (multiple @)", function(){
			expect(validate('email@@email.co.uk')).toBeFalsy();
		});

		it("should not validate for a improper formatted email (multiple @)", function(){
			expect(validate('email@email@email.co.uk')).toBeFalsy();
		});

		it("should not validate for a improper formatted email (multiple ..)", function(){
			expect(validate('email@email..com')).toBeFalsy();
		});

		it("should not validate for a improper formatted email (missing extension)", function(){
			expect(validate('email@email.')).toBeFalsy();
		});

		it("should not validate for a improper formatted email (missing . for extension)", function(){
			expect(validate('email@emailcom')).toBeFalsy();
		});

		it("should not validate for a improper formatted email (missing . for extension)", function(){
			expect(validate('email@emailcom')).toBeFalsy();
		});

		it("should not validate for spaces contained in the email", function(){
			expect(validate('email@em ail.com')).toBeFalsy();
		});

		it("should not validate for spaces contained in the email", function(){
			expect(validate('em ail@email.com')).toBeFalsy();
		});

		it("should allow numbers in the email", function(){
			expect(validate('email123@email.com')).toBeTruthy();
		});

		it("should allow periods in the email", function(){
			expect(validate('first.last@email.com')).toBeTruthy();
		});

		it("should allow hyphens in the email", function(){
			expect(validate('first-last@email.com')).toBeTruthy();
		});

		it("should allow alpha character to begin the email", function(){
			expect(validate('email@email.com')).toBeTruthy();
		});

		it("should allow alpha character to begin the email", function(){
			expect(validate('Email@email.com')).toBeTruthy();
		});

		it("should not allow a number to begin the email", function(){
			expect(validate('1first-last@email.com')).toBeFalsy();
		});

		it("should not validate when other special characters are present", function(){
			expect(validate('first#last@email.com')).toBeFalsy();
		});
	});

	describe("Email Validation", function() {
		var validate = UserRegistration.validateEmail;
		
		beforeEach(function() {
		});
		
		afterEach(function(){
		});

		it("should not pass validation on a null strings", function(){
			expect(validate(null, null)).toBeFalsy();
		});

		it("should not pass validation on empty strings", function(){
			expect(validate('', '')).toBeFalsy();
		});

		it("should not pass validation on a null email and valid email confirm", function(){
			expect(validate(null, 'email@email.com')).toBeFalsy();
		});

		it("should not pass validation on a empty email and valid email confirm", function(){
			expect(validate('', 'email@email.com')).toBeFalsy();
		});

		it("should not pass validation on a valid email and null email confirm", function(){
			expect(validate('email@email.com', null)).toBeFalsy();
		});

		it("should not pass validation on a valid email and empty email confirm", function(){
			expect(validate('email@email.com', '')).toBeFalsy();
		});

		it("should not pass validation on a valid email and invalid email confirm", function(){
			expect(validate('email@email.com', 'email&@email.com')).toBeFalsy();
		});

		it("should not pass validation on an invalid email and a valid email confirm", function(){
			expect(validate('email&@email.com', 'email@email.com')).toBeFalsy();
		});

		it("should not pass validation on an mismatched email and emailConfirm", function(){
			expect(validate('email1@email.com', 'email2@email.com')).toBeFalsy();
		});

		it("should not pass validation on an mismatched email and emailConfirm", function(){
			expect(validate('email2@email.com', 'email!@email.com')).toBeFalsy();
		});

		it("should pass validation on an mismatch email and emailConfirm", function(){
			expect(validate('email@email.com', 'email@email.com')).toBeTruthy();
		});

		it("should pass validation on an mismatch email and emailConfirm (different character cases)", function(){
			expect(validate('email@email.COM', 'email@email.com')).toBeTruthy();
		});

		it("should pass validation on an mismatch email and emailConfirm (different character cases)", function(){
			expect(validate('email@email.com', 'emAil@email.cOm')).toBeTruthy();
		});
	});

});