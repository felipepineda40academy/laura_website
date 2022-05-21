var Form = document.getElementById("forms");
var mailTo = document.getElementById("hide");

Form.addEventListener('submit',function (event) {
    event.preventDefault();

    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
    
})
