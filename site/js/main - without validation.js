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
		this.submitRegistration();
		
		return false;
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