document.addEventListener('submit', onFormSubmit);
document.addEventListener('click', function(e) {
    document.getElementById(e.target.id).removeAttribute('style');
});

function validateFormData (form) {
    var error = false;
    for (var i = 0; i < form.length; i ++) {
        var element = form.elements[i];
        if (element.value.length < 2 ) {
            markErrorField(element.id);
            error = true;  //or name,
        }
    }
    return error;
}

function onFormSubmit() {
    event.preventDefault();

    var form = document.getElementById('form');

    if (!validateFormData(form)) {
        sayThanks(form);
        form.reset();
    }
}

function markErrorField(field) {
    document.getElementById(field).style.borderColor = "red";
}

function sayThanks(form) {
    var name;
    var messageField = document.getElementById("thankyou");

    for (var i = 0; i < form.length; i ++) {
        if (form.elements[i].id == "first_name") {
            name = form.elements[i].value;
        }
        console.log(form.elements[i].value);
    }

    messageField.removeAttribute("hidden");
    messageField.innerHTML = "Thx " + name;
}

