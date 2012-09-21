describe("Delta Page Error JS", function() {
    // Set up test data
    var localEnvironment = DeltaApp.Configuration.DeployEnvironments.LOCAL,
        returnedErrors = [{"description" : "redirect"}];
		
	var delay = -1;
	var testDelay = 250;
	var testDelayPadding = 250;	
	
	DeltaApp.Configuration.setDeployEnvironment(localEnvironment);
        
    beforeEach(function(){ 
		DeltaApp.pageError = DeltaApp.PageError(returnedErrors);
    });
    
    afterEach(function(){
        DeltaApp.pageError.destroy();
    });
    
    it('should populate the DeltaApp.pageError variable', function() {
		expect(DeltaApp.pageError).toBeDefined();
    });
    
    it('should have the correct number of errors', function() {
		expect($('.error-modal-list li').length).toEqual(returnedErrors.length)
    });
    
    it('should have translated error message to correct human readable format', function(){
		for (var i = 0; i < returnedErrors.length; i++){
			expect($($('.error-modal-list li')[i]).text()).toEqual(DeltaApp.MESSAGES.ERRORS.en[returnedErrors[i].description]);
		}
    });
    
    it('should add an error when pushed', function(){
		DeltaApp.pageError.push('only_error');
		expect($('.error-modal-list li').length).toEqual(returnedErrors.length + 1);
    });
    
    it('should remove the last error when popped', function(){
		var errorType = 'only_error';
		DeltaApp.pageError.push(errorType);
		var lastError = DeltaApp.pageError.pop(),
			errorList = $('.error-modal-list li');

		expect(errorList.length).toEqual(returnedErrors.length);
		expect($(errorList[0]).text()).toEqual(DeltaApp.MESSAGES.ERRORS.en[returnedErrors[0].description]);
		expect(lastError).toEqual(DeltaApp.MESSAGES.ERRORS.en[errorType])
    });  
});