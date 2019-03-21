var thehours = new Date().getHours();

	var themessage;
	var night = ('<img src="https://acozar.github.io/src/img/sun-night.gif">');
	var morning = ('<img src="https://acozar.github.io/src/img/sun-morning.gif">');
	var afternoon = ('<img src="https://acozar.github.io/src/img/sun-afternoon.gif">');
	var evening = ('<img src="https://acozar.github.io/src/img/sun-evening.gif">');

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

$(document).ready(function() {
   $('.th-aurora').click(function() {
   		themessage = morning;
   		$('.sun-phase').replaceWith(themessage);
   });
   $('.th-meridianus').click(function() {
   		themessage = afternoon;
   		$('.sun-phase').replaceWith(themessage);
   });
   $('.th-vesperus').click(function() {
   		themessage = evening;
   		$('.sun-phase').replaceWith(themessage);
   });
   $('.th-nox').click(function() {
   		themessage = night;
   		$('.sun-phase').replaceWith(themessage);
   });
});