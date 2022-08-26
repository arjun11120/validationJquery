$(document).ready( function() {
  $("#myForm").on('submit', function(e){
     e.preventDefault();
});
})
  
$(document).on("click","#submit",function(){
	var username = $("#username").val();
	var password = $("#password").val();
	var address = $("#address").val();
	var phonenumber = $("#phonenumber").val();
	if (username == "" || email == "" || password == "" || phonenumber == "" ){
    				alert("All field must be filled out");
  			}
	else{
		return true;
	}
	
});
$(document).on("blur","#username",function(){
	var username = $("#username").val();
	if((username.trim()).length == 0){
		$("#errorMessageUser").show(100);
		$(".un1").addClass("pass");
		return false;
		
	}
	else{
		$("#errorMessageUser").hide()
		$(".un1").removeClass("pass");
		return true;
	}
});

$(document).on("blur","#username",function(){
	var username = $("#username").val();
	if((username.trim()).length == 0){
		$("#errorMessageUser").show(100);
		$(".un1").addClass("pass");
		
	}
	else{
		$("#errorMessageUser").hide()
		$(".un1").removeClass("pass");
		return true;
	}
});

$(document).on("blur","#email",function(){
	var email = $("#email").val();
	var emailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if((email.trim()).length == 0){
		$("#errorMessageEmail1").show(100);
		$(".un2").addClass("pass");
		$("#errorMessageEmail2").hide()
		return false;
		
	}
	else if (!email.match(emailformat))
  			{
				$("#errorMessageEmail2").show(100);
				$(".un2").addClass("pass");
				$("#errorMessageEmail1").hide()
				return false;
  			}
	else{
		$("#errorMessageEmail1").hide()
		$("#errorMessageEmail2").hide()
		$(".un2").removeClass("pass");
		return true;
	}
});
$(document).on("blur","#password",function(){
	var password = $("#password").val();
        var passwordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if((password.trim()).length == 0){
		$("#errorMessagePassword1").show(100);
		$("#errorMessagePassword2").hide();
		$(".un3").addClass("pass");
		return false;
		
	}
	else if (!password.match(passwordformat))
  			{
				$("#errorMessagePassword2").show(100);
				$(".un3").addClass("pass");
				$("#errorMessagePassword1").hide();
				return false;
  			}
	else{
		$("#errorMessagePassword1").hide();
		$("#errorMessagePassword2").hide();
		$(".un3").removeClass("pass");
		return true;
	}
});
$(document).on("blur","#phonenumber",function(){
	var phonenumber = $("#phonenumber").val();
        var numberformat=/^\d{10}$/;
	if((phonenumber.trim()).length == 0){
		$("#errorMessagePhonenumber1").show(100);
		$("#errorMessagePhonenumber2").hide();
		$(".un4").addClass("pass");
		return false;
		
	}
	else if (!phonenumber.match(numberformat))
  			{
				$("#errorMessagePhonenumber2").show(100);
				$(".un4").addClass("pass");
				$("#errorMessagePhonenumber1").hide();
				return false;
  			}
	else{
		$("#errorMessagePhonenumber1").hide();
		$("#errorMessagePhonenumber2").hide();
		$(".un4").removeClass("pass");
		return true;
	}
});
$(document).on("blur","#address",function(){
	var address = $("#address").val();
	if((address.trim()).length == 0){
		$("#errorMessageAddress").show(100);
		$(".un5").addClass("pass");
		return false;
		
	}
	else{
		$("#errorMessageAddress").hide();
		$(".un5").removeClass("pass");
		return true;
	}
});
$(document).on("click","#show",function(){
	if($('#show').is(':checked'))	{
 		$("#password").attr('type','text'); 
	} else {
		$("#password").attr('type','password'); 
	}
});

