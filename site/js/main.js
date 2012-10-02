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
		var isValid = true;
		
		/*
		=======================================================================================
		=======================================================================================

		Option 1 - Validate all in the same method
		Bad:
			> Code is full of dependencies, i.e. jQuery along with UI dependency
			> The single function handling all the validation makes it hard to troubleshoot, let alone unit test
			> Unit tests work best when they are targetting specific actions, i.e. handle validation for a single field as supposed to all
			
		=======================================================================================
		=======================================================================================
		*/
		
		this._elements.firstName = $("#first-name").val();
		if (this._elements.firstName.length==0){
			isValid = false;
		}
		this._elements.lastName = $("#last-name").val();
		if (this._elements.lastName.length==0){
			isValid = false;
		}
		this._elements.email = $("#email").val();
		if (this._elements.email.length==0){
			isValid = false;
		}
		this._elements.emailConfirm = $("#email-confirm").val();
		if (this._elements.emailConfirm.length==0){
			isValid = false;
		}
		
		if (this._elements.email != this._elements.emailConfirm){
			isValid = false;
		}
		
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