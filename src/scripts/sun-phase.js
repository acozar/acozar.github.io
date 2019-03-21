var thehours = new Date().getHours();
	var themessage;
	var night = ('<img src="http://acozar.github.io/src/img/sun-night.gif">');
	var morning = ('<img src="http://acozar.github.io/src/img/sun-morning.gif">');
	var afternoon = ('<img src="http://acozar.github.io/src/img/sun-afternoon.gif">');
	var evening = ('<img src="http://acozar.github.io/src/img/sun-evening.gif">');

	if (thehours >= 0 && thehours < 6) {
		themessage = night; 

	} else if (thehours >= 6 && thehours < 12) {
		themessage = morning;

	} else if (thehours >= 12 && thehours < 18) {
		themessage = afternoon;
		
	} else if (thehours >= 18 && thehours < 20) {
		themessage = evening;
		
	} else if (thehours >= 20 && thehours < 24) {
		themessage = night;
		
	}

$('.sun-phase').append(themessage);
	
$(document).ready(function(){  
        if($("#theme-aurora").is(':checked')) {  
            themessage = morning;
            $('.sun-phase').append(themessage);
        } else {  
          
        }     
        if($("#theme-meridianus").is(':checked')) {  
            themessage = afternoon;
            $('.sun-phase').append(themessage);
        } else {  
          
        }     
        if($("#theme-vesperus").is(':checked')) {  
            themessage = evening;
            $('.sun-phase').append(themessage);
        } else {  
          
        }    
        if($("#theme-nox").is(':checked')) {  
            themessage = night;
            $('.sun-phase').append(themessage);
        } else {  
          
        }    
});  