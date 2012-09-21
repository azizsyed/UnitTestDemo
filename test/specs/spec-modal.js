describe("Delta Modal JS", function() {
    // Set up test data
    var testModal,
        dataSetOne = {
            headline : 'Test Modal Headline',
            bodyText : 'Test Modal bodyText.',
            buttons  : [{
                            title   : 'Test Modal Button Title',
                            'class' : 'test-modal-class',
                            callback: function(e){
								//Empty
                            }
                        },
                        {
                            title   : 'Test Modal Button Title Two',
                            'class' : 'test-modal-class-two',
                            callback: function(e){
                                console.log('test button clicked');
                            }
                        }]
        },
        dataSetTwo = {
            headline : 'Test Modal Headline 2',
            bodyText : 'Test Modal bodyText 2.',
            buttons  : [{
                            title   : 'Test Modal Button Title 2',
                            'class' : 'test-modal-class 2',
                            callback: function(e){
								//Empty
                            }
                        }]
        };
        
    beforeEach(function(){
        DeltaApp.modal = DeltaApp.Modal();
        DeltaApp.modal.showModal(dataSetOne);
    });
    
    afterEach(function(){
        DeltaApp.modal.destroy();
    });
    
    it('should exist', function() {
        expect($('.modal')).toExist();
    });
    
    it('should have the correct headline', function() {
        expect(DeltaApp.modal.getModal().find('h1:eq(0)').text()).toMatch(dataSetOne.headline);
    });
    
    it('should have the correct bodyText', function() {
        expect(DeltaApp.modal.getModal().find('.modal-body-text:eq(0)').html()).toMatch(dataSetOne.bodyText);
    });
    
    it('should have the correct number of buttons', function() {
        expect(DeltaApp.modal.getModal().find('button').length).toMatch(dataSetOne.buttons.length);
    });
    
    it('should have the correct button titles', function() {
        var buttons = DeltaApp.modal.getModal().find('button');
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i]).text()).toMatch(dataSetOne.buttons[i].title);
        }
    });
    
    it('should have the correct button classes', function() {
        var buttons = DeltaApp.modal.getModal().find('button');
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i])).toHaveClass(dataSetOne.buttons[i]['class']);
        }
    });
    
    it('should have buttons that call the correct callbacks', function() {
        var buttons = DeltaApp.modal.getModal().find('button');
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i])).toHandleWith('click', dataSetOne.buttons[i].callback);
        }
    });
    
    it('modal should be showable', function(){
        expect(DeltaApp.modal.getModal()).toBeVisible();
    });
    
    it('modal should be hidable', function() {
        expect(DeltaApp.modal.getModal()).toBeVisible();
        
        DeltaApp.modal.hideModal();
        expect(DeltaApp.modal.getModal()).toBeHidden();        
    });
    
    it('overlay should be showable', function(){
        expect(DeltaApp.modal.getOverlay()).toBeVisible();
    });
    
    it('overlay should be hidable', function() {
        expect(DeltaApp.modal.getOverlay()).toBeVisible();
        
        DeltaApp.modal.hideModal();
        expect(DeltaApp.modal.getOverlay()).toBeHidden();        
    });   
    
    it('should be updated on additional calls to showModal', function(){
        var buttons = DeltaApp.modal.getModal().find('button');
        
        expect(DeltaApp.modal.getModal().find('h1:eq(0)').text()).toMatch(dataSetOne.headline);
        expect(DeltaApp.modal.getModal().find('.modal-body-text:eq(0)').html()).toMatch(dataSetOne.bodyText);
        expect(DeltaApp.modal.getModal().find('button').length).toMatch(dataSetOne.buttons.length);
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i]).text()).toMatch(dataSetOne.buttons[i].title);
        }
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i])).toHaveClass(dataSetOne.buttons[i]['class']);
        }
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i])).toHandleWith('click', dataSetOne.buttons[i].callback);
        }
        
        // the above are copies of previously run tests, verifying that the data present is the data from dataSetOne
        // the below updates the modal (using showModal), and runs similar tests, verifying the data against dataSetTwo
        DeltaApp.modal.showModal(dataSetTwo);
        
        buttons = DeltaApp.modal.getModal().find('button');
        
        expect(DeltaApp.modal.getModal().find('h1:eq(0)').text()).toMatch(dataSetTwo.headline);
        expect(DeltaApp.modal.getModal().find('.modal-body-text:eq(0)').html()).toMatch(dataSetTwo.bodyText);
        expect(DeltaApp.modal.getModal().find('button').length).toMatch(dataSetTwo.buttons.length);
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i]).text()).toMatch(dataSetTwo.buttons[i].title);
        }
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i])).toHaveClass(dataSetTwo.buttons[i]['class']);
        }
        
        for (var i = 0; i < buttons.length; i++){
            expect($(buttons[i])).toHandleWith('click', dataSetTwo.buttons[i].callback);
        }
    });
});