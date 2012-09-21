describe("Delta JS", function() {
	describe("Configuration", function() {
		describe("Deploy Environment", function() {
			var defaultDelay = DeltaApp.Configuration.getStubApiDelay();
			var testDelay = 999;
			
			beforeEach(function() {
			});
			
			afterEach(function() {
				//reset the delay
				DeltaApp.Configuration.setStubApiDelay(defaultDelay);
			});
			
			it("should be numeric", function() {
				expect(typeof DeltaApp.Configuration.getStubApiDelay() == 'number').toBeTruthy();
			});
			
			it("should be set to "+testDelay, function() {
				DeltaApp.Configuration.setStubApiDelay(testDelay);
				expect(DeltaApp.Configuration.getStubApiDelay()).toEqual(testDelay);
			});
		});	
		
		describe("Deploy Environment", function() {
			var localEnvironment = DeltaApp.Configuration.DeployEnvironments.LOCAL;
			
			beforeEach(function() {
				DeltaApp.Configuration.setDeployEnvironment(localEnvironment);
			});
			
			afterEach(function() {
				DeltaApp.Configuration.setDeployEnvironment(localEnvironment);
			});
			
			it("should be local", function() {
				expect(DeltaApp.Configuration.getDeployEnvironment()).toEqual(localEnvironment);
			});
			
			it("should be set to DEV", function() {
				var testEnvironment = DeltaApp.Configuration.DeployEnvironments.DEV;
				DeltaApp.Configuration.setDeployEnvironment(testEnvironment);
				expect(DeltaApp.Configuration.getDeployEnvironment()).toEqual(testEnvironment);
			});
			
			it("should trigger an exception with an empty specified environment", function() {
				expect(function(){
					DeltaApp.Configuration.setDeployEnvironment('');
				}).toThrow();
			});
			
			it("should trigger an exception with an invalid environment", function() {
				expect(function(){
					DeltaApp.Configuration.setDeployEnvironment(9);
				}).toThrow();
			});
		});	
		
		describe("API Environment", function() {
			var localEnvironment = DeltaApp.Configuration.ApiEnvironments.PHP;
			
			beforeEach(function() {
				DeltaApp.Configuration.setApiEnvironment(localEnvironment);
			});
			
			afterEach(function() {
				DeltaApp.Configuration.setApiEnvironment(localEnvironment);
			});
			
			it("should be local", function() {
				expect(DeltaApp.Configuration.getApiEnvironment()).toEqual(localEnvironment);
			});
			
			it("should be set to ST", function() {
				var testEnvironment = DeltaApp.Configuration.ApiEnvironments.ST;
				DeltaApp.Configuration.setApiEnvironment(testEnvironment);
				expect(DeltaApp.Configuration.getApiEnvironment()).toEqual(testEnvironment);
			});
			
			it("should trigger an exception with an empty specified environment", function() {
				expect(function(){
					DeltaApp.Configuration.setApiEnvironment('');
				}).toThrow();
			});
			
			it("should trigger an exception with an invalid environment", function() {
				expect(function(){
					DeltaApp.Configuration.setApiEnvironment(9);
				}).toThrow();
			});
		});	
		
		
	});	
	
	describe("Data Storage", function() {
		var testKey = "testKey";
		
		beforeEach(function() {
		});
		
		afterEach(function() {
			DeltaApp.Data.clear();
		});
		
		it("should return null for a key that does not exist", function() {
			expect(DeltaApp.Data.get(testKey)).toEqual(null);
		});
		
		it("should return the specified value after setting the key / value information", function() {
			var value = "hello!";
			DeltaApp.Data.set(testKey, value);
			expect(DeltaApp.Data.get(testKey)).toEqual(value);
		});
		
		it("should be null when after setting the value it is then cleared", function() {
			var value = "hello!";
			DeltaApp.Data.set(testKey, value);
			DeltaApp.Data.remove(testKey);
			expect(DeltaApp.Data.get(testKey)).toEqual(null);
		});
		
		it("should be null clearing all storage data", function() {
			var value = "hello!";
			DeltaApp.Data.set(testKey, value);
			DeltaApp.Data.clear();
			expect(DeltaApp.Data.get(testKey)).toEqual(null);
		});
	});	
	
	describe("Device Platform", function() {
		var URL = "http://DOMAIN.com/somepage.html?platform=";
		
		beforeEach(function() {
		});
		
		afterEach(function() {
			DeltaApp.Data.clear();
		});
		
	});	
	
	describe("AJAX Handler", function() {
		var delay = -1;
		var testDelay = 250;
		var testDelayPadding = 250;
		
		beforeEach(function() {
			//get the default delay so we can reset it later
			delay = DeltaApp.Configuration.getStubApiDelay();
			DeltaApp.Configuration.setStubApiDelay(testDelay);
		});
		
		afterEach(function() {
			//reset the delay
			DeltaApp.Configuration.setStubApiDelay(delay);
		});
		
		it("should fail without a valid service via an exception", function() {
			expect(function(){
				DeltaApp.API('',{},{});	
			}).toThrow();
		});
		
		it("should trigger the error callback upon a failure returned from the response", function() {
			runs(function(){
				this.failed = null;
				this.executed = false;
				var self = this;
				
				var callbackError = function(response){
					self.executed = true;
					self.failed = !response.success;
				}
				
				var callbackSuccess = function(response){
					self.executed = true;
					self.failed = false;
				}
				
				DeltaApp.API.Execute(DeltaApp.API.SERVICE.LOGIN.GET_SQA,'',{
					callbackSuccess : callbackSuccess,
					callbackError : callbackError
				});
			});
			
			waitsFor(function(){
				return this.executed===true;
			});
			
			runs(function(){
				expect(this.failed).toEqual(true);
			});			
		});
		
		it("should return an error description upon a failure returned from the response", function() {
			runs(function(){
				this.error = null;
				this.executed = false;
				var self = this;
				
				var callbackError = function(response){
					self.executed = true;
					self.error = response.errors;
				}
				
				var callbackSuccess = function(response){
					self.executed = true;
					self.error = false;
				}
				
				DeltaApp.API.Execute(DeltaApp.API.SERVICE.LOGIN.GET_SQA,'',{
					callbackSuccess : callbackSuccess,
					callbackError : callbackError,
					type : 'GET'
				});
			});
			
			waitsFor(function(){
				return this.executed===true;
			});
			
			runs(function(){
				expect(this.error).toBeDefined();
			});			
		});
		
		it("should trigger the success callback upon success", function() {
			runs(function(){
				this.succeeded = false;
				this.executed = false;
				var self = this;
				
				var callbackError = function(response){
					self.executed = true;
					self.succeeded = false;
				}
				
				var callbackSuccess = function(response){
					self.executed = true;
					self.succeeded = true;
				}
				
				waitsFor(function(){
					return this.executed===true;
				});
				
				DeltaApp.API.Execute(DeltaApp.API.SERVICE.LOGIN.GET_SQA,'',{
					callbackSuccess : callbackSuccess,
					callbackError : callbackError,
					type : 'GET'
				});
			});
			
			waitsFor(function(){
				return this.executed===true;
			});
			
			runs(function(){
				expect(this.succeeded).toEqual(true);
			});			
		});
		
	});	
	
});