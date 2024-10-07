

$(document).ready(function(){
    // Initialize Materialize modal
    $('.modal').modal();
  
    // Form submit button functionality
    $('#formSubmit').click(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form data
      let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val()
      };
  
      // Get current time
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      
      // Format time to be more readable
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
      // Display personalized greeting message with the current time
      const greetingMessage = `Good day, ${formData.first_name} ${formData.last_name}! The current time is ${formattedTime}.`;
      M.toast({html: greetingMessage});
    });
  
    // Enlarge image on click
    $('#testImage').click(function() {
      $('#imageModal').modal('open');
    });
  });
  