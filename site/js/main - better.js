var UserRegistration = {
	_elements : {
		form : null,
		firstName : null,
		lastName : null,
		email : null,
		emailConfirm : null
	},
	initialize : function(){
		this._elements.form = $("#registration-form");
		this.initializeFormSubmission();
		this.initializeAjaxEvents();
	},
	initializeFormSubmission : function(){
		var fn = $.proxy(this.handleFormSubmission, this);
		this._elements.form.on("submit",fn);
	},
	initializeAjaxEvents : function(){
		var self = this;
		$(document).ajaxStart(function(){
			self.disableFormButtons();
		});
		$(document).ajaxComplete(function(){
			self.enableFormButtons();
		});
	},
	handleFormSubmission : function(){
		var isValid = this.validate();
		
		if (isValid){
			this.submitRegistration();
		}
		else{
			alert("You have issues");
			//handle error UI logic here if applicable
		}
		
		return false;
	},
	validate : function(){
		var isValid = false;
		
		/*
		=======================================================================================
		=======================================================================================

		Option 2 - Use separate methods for validating each field
		Better:
			> UI dependency is removed, as we can test each method individually
			> The file itself still cannot be unit tested:
				> There is still the dependency on jQuery, particularly the dom ready event
				> The page will call the 'initialize' method and then fail
			> Need to isolate/decouple the code more
			> The validation functions are dependent on this._elements being prepopulated

		=======================================================================================
		=======================================================================================
		*/
		
		this.getDataValuesFromForm();
		
		isValid = isValid && validateFirstName();
		isValid = isValid && validateLastName();
		isValid = isValid && validateEmail();
		
		return isValid;
	},
	getDataValuesFromForm : function(){
		this._elements.firstName = $("#first-name").val();
		this._elements.lastName = $("#last-name").val();
		this._elements.email = $("#email").val();
		this._elements.emailConfirm = $("#email-confirm").val();
	},
	validateFirstName : function(){
		var isValid = false;
		
		if (this._elements.firstName.length>0){
			isValid = true;
		}
		//...continue validation...
		
		return isValid;
	},
	validateLastName : function(){
		var isValid = false;
		return isValid;
	},
	validateEmail : function(){
		var isValid = false;
		return isValid;
	},
	submitRegistration : function(){
		var xhrData = {
			firstName : this._elements.firstName,
			lastName : this._elements.lastName,
			email : this._elements.email
		};
		
		var xhrProperties = {
			async : true,
			dataType : 'json',
			data : xhrData,
			url : this._elements.form.attr("action"),
			beforeSend : this.submissionPreparation,
			complete : this.submissionComplete,
			success : this.handleRegistrationSuccess,
			error : this.handleRegistrationFailure
		};
		
		$.ajax(xhrProperties);
	},
	submissionPreparation : function(a,b,c){
	},
	submissionComplete : function(a,b,c){
	},
	handleRegistrationSuccess : function(){
		alert('you have successfully created your account');
	},
	handleRegistrationFailure : function(){
		alert('there was a problem creating your account. please try again.');
	},
	enableFormButtons : function(){
		this.toggleFormButtons(true);
	},
	disableFormButtons : function(){
		this.toggleFormButtons(false);
	},
	toggleFormButtons : function(enable){
		if (enable){
			$("button",this._elements.form).removeAttr("disabled");
		}
		else{
			$("button",this._elements.form).attr("disabled","disabled");
		}
	}
};

$(document).ready(function(){
	UserRegistration.initialize();
});