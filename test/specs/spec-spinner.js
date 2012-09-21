describe("Delta Spinner JS", function() {
    var dataSetOne = {
            'message' : 'WAIT FOR ME'
        },
        dataSetTwo = {
            'message' : 'I am the new, updated message'
        };
    
    beforeEach(function(){
        DeltaApp.spinner = DeltaApp.Spinner();
        DeltaApp.spinner.showSpinner(dataSetOne);
    });
    
    afterEach(function(){
        DeltaApp.spinner.destroy();
    });
    
    it('should use the modal overlay', function() {
        expect($('.modal-overlay')).toExist();
    });
    
    it('should have the correct message', function() {
        expect($('.spinner-message').text()).toEqual(dataSetOne.message);
    });
    
    it('should be hideable', function() {
        expect($('.spinner-container')).toBeVisible();
        expect($('.modal-overlay')).toBeVisible();
        
        DeltaApp.spinner.hideSpinner();
        
        expect($('.spinner-container')).toBeHidden();
        expect($('.modal-overlay')).toBeHidden();
    });
    
    it('should be updatable', function() {
        expect($('.spinner-message').text()).toEqual(dataSetOne.message);
        
        DeltaApp.spinner.showSpinner(dataSetTwo);
        
        expect($('.spinner-message').text()).toEqual(dataSetTwo.message);        
    });
    
    it('should be visible after the message is updated', function() {
        expect($('.spinner-container')).toBeVisible();
        expect($('.modal-overlay')).toBeVisible();
        
        DeltaApp.spinner.hideSpinner();
        
        expect($('.spinner-container')).toBeHidden();
        expect($('.modal-overlay')).toBeHidden();
        
        DeltaApp.spinner.showSpinner(dataSetTwo);
        
        expect($('.spinner-container')).toBeVisible();
        expect($('.modal-overlay')).toBeVisible();      
    });
});