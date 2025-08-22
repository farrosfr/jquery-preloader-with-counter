jQuery(document).ready(function($) {
    let counter = 0;
    const counterElement = $('.percentage-counter');

    // Start an interval to increment the counter (simulates progress)
    const interval = setInterval(() => {
        if (counter >= 99) {
            clearInterval(interval); // Stop at 99%
            return;
        }
        counter++;
        counterElement.text(counter + '%');
    }, 30); // The interval speed in ms. Smaller is faster.

    // The 'load' event fires when the entire page (including images, scripts, etc.) is fully loaded
    $(window).on('load', function() {
        // Clear the interval just in case it's still running
        clearInterval(interval);
        
        // Force the counter to 100%
        counterElement.text('100%');
        
        // Add a short delay for the user to see 100%, then fade out the preloader
        $('.preloader').delay(300).fadeOut(500);
    });
});
