describe("Delta Data Model", function() {
	describe("Address Model", function() {
		var model;
		
		beforeEach(function(){
			model = new AddressModel();
		});
		
		afterEach(function(){
			model = null;
		});
		
		it('should exist', function() {
			expect(model.address1).toBeDefined();
		});
		
		describe("Address Line 1", function() {
			var model;
			
			beforeEach(function(){
				model = new AddressModel();
			});
			
			afterEach(function(){
				model = null;
			});

			it('should validate with less than 40 characters (39)', function() {
				model.address1('abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcd');
				expect(model.address1.error).toBeNull();
			});

			it('should validate with 40 characters (40)', function() {
				model.address1('abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde');
				expect(model.address1.error).toBeNull();
			});

			it('should not validate with more than 40 characters (41)', function() {
				model.address1('abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdea');
				expect(model.address1.error).not.toBeNull();
			});

			it('should not validate if all numeric', function() {
				model.address1('1234567890');
				expect(model.address1.error).not.toBeNull();
			});

			it('allows certain special characters (#)', function() {
				model.address1('some street 123 #');
				expect(model.address1.error).toBeNull();
			});

			it('allows certain special characters (*)', function() {
				model.address1('some street 123 *');
				expect(model.address1.error).toBeNull();
			});

			it('allows certain special characters (-)', function() {
				model.address1('some street 123 -');
				expect(model.address1.error).toBeNull();
			});

			it('allows certain special characters (_)', function() {
				model.address1('some street 123 _');
				expect(model.address1.error).toBeNull();
			});

			it('should not allow special characters at the beginning (#)', function() {
				model.address1('# some street 123 # * - _');
				expect(model.address1.error).not.toBeNull();
			});

			it('should not allow special characters at the beginning (*)', function() {
				model.address1('* some street 123 # * - _');
				expect(model.address1.error).not.toBeNull();
			});

			it('should not allow special characters at the beginning (-)', function() {
				model.address1('- some street 123 # * - _');
				expect(model.address1.error).not.toBeNull();
			});

			it('should not allow special characters at the beginning (_)', function() {
				model.address1('_ some street 123 # * - _');
				expect(model.address1.error).not.toBeNull();
			});

			it('should allow spaces', function() {
				model.address1('a b c d 1 3 4');
				expect(model.address1.error).toBeNull();
			});
		});
		
		describe("Address Line 2", function() {
			var model;
			
			beforeEach(function(){
				model = new AddressModel();
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should validate with less than 40 characters (39)', function() {
				model.address2('abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcd');
				expect(model.address2.error).toBeNull();
			});

			it('should validate with 40 characters (40)', function() {
				model.address2('abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde');
				expect(model.address2.error).toBeNull();
			});

			it('should not validate with more than 40 characters (41)', function() {
				model.address2('abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdea');
				expect(model.address2.error).not.toBeNull();
			});

			it('should validate if all numeric', function() {
				model.address2('1234567890');
				expect(model.address2.error).toBeNull();
			});

			it('allows all special characters except for ?', function() {
				model.address2('some street 123 # - 3 _ *');
				expect(model.address2.error).toBeNull();
			});

			it('does not allow ampersand special character (?)', function() {
				model.address2('some street 123 ?');
				expect(model.address2.error).not.toBeNull();
			});

			it('should allow special characters at the beginning (#)', function() {
				model.address2('# some street 123 # * - _');
				expect(model.address2.error).toBeNull();
			});

			it('should allow special characters at the beginning (*)', function() {
				model.address2('* some street 123 # * - _');
				expect(model.address2.error).toBeNull();
			});

			it('should allow special characters at the beginning (-)', function() {
				model.address2('- some street 123 # * - _');
				expect(model.address2.error).toBeNull();
			});

			it('should allow special characters at the beginning (_)', function() {
				model.address2('_ some street 123 # * - _');
				expect(model.address2.error).toBeNull();
			});

			it('should allow spaces', function() {
				model.address2('a b c d 1 3 4');
				expect(model.address2.error).toBeNull();
			});
		});
	});
	describe("Loyalty Program", function() {
		
		var model;
		
		beforeEach(function(){
			model = new LoyaltyProgramModel();
		});
		
		afterEach(function(){
			model = null;
		});
		
		it('should exist', function() {
			expect(model.code).toBeDefined();
		});
		
		it('should not validate', function() {
			model.code('');
			expect(model.code.error).not.toBeNull();
		});
		
		it('should validate', function() {
			model.code(4);
			expect(model.code.error).toBeNull();
		});
		
		it('should validate', function() {
			model.number('44444');
			expect(model.number.error).not.toEqual('Must be numeric');
		});
	
		it('should validate', function() {
			model.number('4d4444');
			expect(model.number.error).not.toEqual('Must be numeric');
		});
	
		describe("Delta", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.Delta);//Delta
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345678940');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('1234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("KLM", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.KLM);//KLM
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('123456789012');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('1234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('2234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('3234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
			
			it('should validate', function() {
				model.number('4234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("Air France", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.AirFrance);//Air France
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate 2', function() {
				model.number('1234567890123');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate 3', function() {
				model.number('12345678901');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate 4', function() {
				model.number('1234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate 5', function() {
				model.number('123456789012');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("Alaska", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.AlaskaAirlines);//Alaska
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345612345');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
	
			it('should not validate', function() {
				model.number('1234561234564');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
	
			it('should not validate', function() {
				model.number('1234567A');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('12345678');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("China Air", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.ChinaAirlines);//China Air
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('123456789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234567890787');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('aa12345673');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('2a1234567');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('aa1234567');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('zz1234567');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("China Southern", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.ChinaSouthern);//ChinaSouthern
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345612345');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234561234564');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('123456123456');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("Hawaiian", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.HawaiianAir);//Hawaiian
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345612345');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234561234564');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('12345A789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('123456789');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("Aeroflot", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.Aeroflot);//Aeroflot
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345678901');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234561234564');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('12345A789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('1');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('12');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('12345978');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('12345978');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("China Eastern", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.ChinaEastern);//China Eastern
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate 2', function() {
				model.number('1234567890');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate 3', function() {
				model.number('12345678');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate 4', function() {
				model.number('123456789');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate 5', function() {
				model.number('123456789012');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("GOL", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.GOLAirlines);//GOL
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345612345');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234561234564');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('12345A789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('123456789');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("Kingfisher", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.Kingfisher);//Kingfisher
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345612345');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234561234564');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('12345A789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('123456789');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
		
		describe("Malaysia Airlines", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.Malaysia);//Malaysia Airlines
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('123456789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234567890787');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('123456789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('HM123456789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('MH123456789');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('MH987654321');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("V Australia/Virgin Blue/Velocity", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.VirginAustralia);//V Australia/Virgin Blue/Velocity
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('12345678940');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('1234567890');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		describe("Vietnam Airlines", function() {
			var model;
			
			beforeEach(function(){
				model = new LoyaltyProgramModel();
				model.code(DeltaApp.MESSAGES.PROFILEINFO.PREFERENCES.AIR_LOYALTY_PROGRAM_CODES.VietnamAirlines);//Vietnam Airlines
			});
			
			afterEach(function(){
				model = null;
			});
		
			it('should not validate', function() {
				model.number('123456789');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('1234567');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should not validate', function() {
				model.number('912345678');
				expect(model.number.error).toEqual('Loyalty number is invalid!');
			});
		
			it('should validate', function() {
				model.number('92345678');
				expect(model.number.error).not.toEqual('Loyalty number is invalid!');
			});
		});
	
		
	});
});