describe("Delta UI", function() {
    // Set up test data
    var checkbox = null;
    var checkboxWrapper = null;
    
    var build = function(setChecked){
    	checkbox = $('<input type="checkbox" id="test" />');
    	checkboxWrapper = $('<span class="checkbox" />');
    	checkboxWrapper.append(checkbox);
    	
    	$('body').append(checkboxWrapper);
    	
		$(checkbox).prop("checked",setChecked || false);
    };
    
    var destroy = function(){
    	$(checkbox).remove();
    	$(checkboxWrapper).remove();
    };
    
    beforeEach(function(){
		//build();
    });
    
    afterEach(function(){
    	destroy();
    });
    
    it('should exist', function() {
    	build();
    	expect($(checkbox)).toExist();
    	expect($(checkboxWrapper)).toExist();
    });
    
    it('should not be checked by default',function(){
    	build();
    	expect($(checkbox).prop("checked")).toBe(false);
    });
    
    it('should be checked if programmatically checked',function(){
    	build(true);
    	expect($(checkbox).prop("checked")).toBe(true);
    });
    
    it('should not have the checked class if the checkbox is un checked on load', function() {
    	build();
    	expect($(checkboxWrapper).hasClass("checked")).toBe(false);
    });
    
    it('should have the checked class if the checkbox is checked on load', function() {
		runs(function(){
	    	build(true);
		});
		
		//Give the ui enough time to catch up
		waits(DeltaApp.UI.getIntervalAmount()*2);
		
		//By now the interval runner should add the checked class to 
		runs(function(){
	    	expect($(checkboxWrapper).hasClass("checked")).toBe(true);
		});    
    });
    
    it('should have the checked class if the checkbox is checked programmatically with a change trigger event manually triggered', function() {
		runs(function(){
	    	build();
	    	$(checkbox).prop("checked",true);
	    	$(checkbox).trigger("change");
		});
		
		//Give the ui enough time to catch up
		waits(DeltaApp.UI.getIntervalAmount()*2);
		
		//By now the interval runner should add the checked class to 
		runs(function(){
	    	expect($(checkboxWrapper).hasClass("checked")).toBe(true);
		});
    });
    
    it('should have the checked class via the continuous interval updater, if the checkbox is checked programmatically', function() {
		runs(function(){
	    	build();
	    	$(checkbox).prop("checked",true);
		});
		
		//Give the ui enough time to catch up
		waits(DeltaApp.UI.getIntervalAmount()*2);
		
		//By now the interval runner should add the checked class to 
		runs(function(){
	    	expect($(checkboxWrapper).hasClass("checked")).toBe(true);
		});
    });
});