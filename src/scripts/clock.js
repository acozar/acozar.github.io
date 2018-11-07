jQuery( document ).ready(function() {
  currentDate = new Date();
  currentSeconds = currentDate.getSeconds();
  currentMinutes = currentSeconds + ( currentDate.getMinutes() * 60 );
  currentAnalogHours = ( currentDate.getHours() > 11 ) ? currentDate.getHours() - 12 : currentDate.getHours();
  currentHours = currentMinutes + ( currentAnalogHours * 3600 );
  currentZenitHours = currentMinutes + ( currentDate.getHours() * 3600 );
  jQuery( '.clock-second-hand' ).css( 'animation-delay', '-' + currentSeconds + 's' );
  jQuery( '.clock-minute-hand' ).css( 'animation-delay', '-' + currentMinutes + 's' );
  jQuery( '.clock-hour-hand' ).css( 'animation-delay', '-' + currentHours + 's' );
  jQuery( '.clock-zenit-hand' ).css( 'animation-delay', '-' + currentZenitHours + 's' );
});