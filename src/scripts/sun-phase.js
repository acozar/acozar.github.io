var thehours = new Date().getHours();

	var themessage;
	var night = ('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-night.gif">');
	var morning = ('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-morning.gif">');
	var afternoon = ('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-afternoon.gif">');
	var evening = ('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-evening.gif">');

	if (thehours >= 0 && thehours < 6) {
		themessage = night; 
		$( "#theme-nox" ).prop('checked', true );

	} else if (thehours >= 6 && thehours < 12) {
		themessage = morning;
		$( "#theme-aurora" ).prop('checked', true );

	} else if (thehours >= 12 && thehours < 18) {
		themessage = afternoon;
		$( "#theme-meridianus" ).prop('checked', true );
		
	} else if (thehours >= 18 && thehours < 20) {
		themessage = evening;
		$( "#theme-vesperum" ).prop('checked', true );
		
	} else if (thehours >= 20 && thehours < 24) {
		themessage = night;
		$( "#theme-nox" ).prop('checked', true );
		
	}
	
$('#sun-phase').html(themessage);

$(function() {
   $('.th-aurora').click(function() {
   		$('#sun-phase').html('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-morning.gif">');
   });

   $('.th-meridianus').click(function() {
   		$('#sun-phase').html('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-afternoon.gif">');
   });

   $('.th-vesperum').click(function() {
   		$('#sun-phase').html('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-evening.gif">');
   });

   $('.th-nox').click(function() {
   		$('#sun-phase').html('<img id="sun-phase" src="https://acozar.github.io/src/img/sun-night.gif">');
   });
});

var themonths = new Date().getMonth();

	var theseason;

	if (themonths >= 0 && themonths < 3) {
		$('#tree-phase').html('<img id="tree-phase" src="https://acozar.github.io/src/img/ktr-season-winter.png">');

	} else if (themonths >= 3 && themonths < 6) {
		$('#tree-phase').html('<img id="tree-phase" src="https://acozar.github.io/src/img/ktr-season-spring.png">');

	} else if (themonths >= 6 && themonths < 9) {
		$('#tree-phase').html('<img id="tree-phase" src="https://acozar.github.io/src/img/ktr-season-summer.png">');
		
	} else if (themonths >= 9 && themonths < 12) {
		$('#tree-phase').html('<img id="tree-phase" src="https://acozar.github.io/src/img/ktr-season-autumn.png">');
	} 