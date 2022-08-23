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
	if (username == ""){
    				alert("Please enter your name");
  			}
	else{
		return true;
	}
});
$(document).on("blur","#email",function(){
	var email = $("#email").val();
	if (email == ""){
    				alert("Please enter your name");
  			}
	else{
		return true;
	}
});
$(document).on("blur","#password",function(){
	var password = $("#password").val();
	if (password == ""){
    				alert("Please enter your password");
  			}
	else{
		return true;
	}
});
$(document).on("blur","#address",function(){
	var address = $("#address").val();
	if (address == ""){
    				alert("Please enter your address");
  			}
	else{
		return true;
	}
});