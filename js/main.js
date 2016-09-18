var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    //initialize: function() {
    //    var self = this;
    //    this.store = new MemoryStore(function() {
    //        $('body').html(new HomeView(self.store).render().el);
    //    });
    //}

};

//app.initialize();
$.mobile.changePage('index.html', { 
  dataUrl : "login.html", data : { 
    'page' : 'events' 
  }, reloadPage : false, changeHash : true 
});

$("#login").click(function(){
	var email=$("#email").val();
	var password=$("#password").val();
	var dataString="email="+email+"&password="+password+"&login=true";
	//alert(dataString);
	if($.trim(email).length>0 & $.trim(password).length>0) {
		$.ajax({
			type: "POST",
			url: "http://testing.hoenigwebdesign.com/dev/login.php",
			data: dataString,
			crossDomain: true,
			cache: false,
			beforeSend: function(){ $("#login").html('Connecting...');},
			success: function(data){
				if(data=="success")
				{
					localStorage.login="true";
					localStorage.email=email;
					window.location.href = "index.php?signedin=true";
				} else if(data="failed") {
					alert("Login error");
					$("#login").html('Login');
				}
			}
		});
	}
	return false;
});

$("#signup").click(function(){
	var fullname=$("#fullname").val();
	var email=$("#email").val();
	var password=$("#password").val();
	var dataString="fullname="+fullname+"&email="+email+"&password="+password+"&signup=";
	if($.trim(fullname).length>0 & $.trim(email).length>0 & $.trim(password).length>0) {
	$.ajax({
		type: "POST",
		url: "/dev/signup.php",
		data: dataString,
		crossDomain: true,
		cache: false,
		beforeSend: function(){ $("#signup").val('Connecting...');},
		success: function(data){
			if(data=="success")
			{
				alert("Thank you for Registering with us! you can login now");
			} else if(data="exist") {
				alert("Hey! You alreay has account! you can login with us");
			} else if(data="failed") {
				alert("Something Went wrong");
			}
		}
	});
	}return false;
});
