 $("#submitButton").on("click", function(event) {
      event.preventDefault();

      var newReservation = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        id: $("#uniqueId").val().trim()
      };

      // Question: What does this code do??
      $.post("/api/reservation", newReservation)
      .done(function(data) {
        console.log(data);
        alert("Adding character...");
      });

    });