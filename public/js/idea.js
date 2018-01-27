
$(function() {
    
    
        // Take inputs when user completes registration form	
        $(".idea-form").on("submit", function(event) {
            event.preventDefault();
            var newIdea = {
                user_name: $("#username").val(),
                title: $("#title").val().trim(),
                subject: $("#subject").val().trim()
            };
    
            $.ajax("/api/newIdea", {
                type: "POST",
                data: newIdea
            }).then(
                function(result) {
                    // This console log happens in chrome console
                    console.log(result)
                    location.reload()
                }
            );
        });
    
        
    
    
    });