$(document).ready(function() {
    // bydefault the light bulb is off
    let isLightOn = false;

    // Function to toggle light on and off
    function toggleLight() {
        if (isLightOn) {
            // Turn light off
            $('#lightBulb').attr('src', 'bulb-off (1).png');
            isLightOn = false;
        } else {
            // Turn light on
            $('#lightBulb').attr('src', 'bulb-on (1).png');
            isLightOn = true;
        }
    }

    // Toggle light bulb when clicked
    $('.light-bulb-container').click(function() {
        toggleLight();
    });

});


function toggle() {
    var button = document.getElementById("toggleButton");

    if (button.innerHTML == "On") {
      button.innerHTML = "Bijli ka bill tera baap bhare ga....";
    } else {
      button.innerHTML = "On";
    }
  }






