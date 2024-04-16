$(document).ready(function() {
    // Initially the light bulb is off
    let isLightOn = false;

    // Function to toggle light on and off
    function toggleLight() {
        if (isLightOn) {
            // Turn light off
            $('#lightBulb').attr('src', 'bulb1.png');
            isLightOn = false;
        } else {
            // Turn light on
            $('#lightBulb').attr('src', 'bulb2.png');
            isLightOn = true;
        }
    }

    // Toggle light bulb when clicked
    $('.light-bulb-container').click(function() {
        toggleLight();
    });
});