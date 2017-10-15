$(document).ready(function(){

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function floor() {
		$("#floor").animate( {
			width: '100%'
		});
	}

	$(".click_turtle").on("click", function(e){
		e.preventDefault();
		$("#turtle").fadeOut();
		$("#name").fadeIn();
	});

	$("#name_form").submit( function(e){
		e.preventDefault();
		setCookie("name", $("#name").val(), 999);
		$("#name").fadeOut();
		floor();
	});



	setTimeout(function() { $("#text").fadeIn("slow"); }, 1000);

	var name = getCookie("name");
	if (name){
		floor();
		setTimeout(function() { $("#text").fadeIn("slow"); }, 1000);
	} else {
		setTimeout(function() { $("#turtle").fadeIn(); }, 1500);
	}
});