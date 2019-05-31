//FORM VALIDATION FOR CONTACT PAGE
$(document).ready(function () {

    //First Name
    $('#firstName').blur(function (e) {
        let firstName = $('#firstName').val();
        if (firstName == '') {
            $('#fnerr').removeClass('text-success').addClass('text-danger').text('**Enter First Name**');
        } else if (!(firstName.length >= 3)) {
            $('#fnerr').removeClass('text-success').addClass('text-danger').text('**First Name must contains more than two characters**');
        } else if (firstName.length > 20) {
            $('#fnerr').removeClass('text-success').addClass('text-danger').text('**First Name must not exceed 20 characters**');
        } else {
            $('#fnerr').removeClass('text-danger');
            $('#fnerr').addClass('text-success').text('Firstname Added');
        }
    });

    //Last Name
    $('#lastName').blur(function (e) {
        let lastName = $('#lastName').val();
        if (lastName == '') {
            $('#lnerr').removeClass('text-success').addClass('text-danger').text('**Enter Last Name**');
        } else if (!(lastName.length >= 3)) {
            $('#lnerr').removeClass('text-success').addClass('text-danger').text('**Last Name must contains more than two characters**');
        } else if (lastName.length > 20) {
            $('#lnerr').removeClass('text-success').addClass('text-danger').text('**Last Name must not exceed 20 characters**');
        } else {
            $('#lnerr').removeClass('text-danger');
            $('#lnerr').addClass('text-success').text('Lastname Added');
        }
    });

    //Email 
    $('#email').blur(function () {
        let emailId = $('#email').val();
        if (emailId == '') {
            $('#emailErr').removeClass('text-success').addClass('text-danger').text('**Enter Your Email Id**');
        } else if (validEmail(emailId) == false) {
            $('#emailErr').removeClass('text-success').addClass('text-danger').text('**Enter a valid Email Id**');
        } else {
            $('#emailErr').removeClass('text-danger').addClass('text-success').text('Email Id successfully added');
        }
    });

    //Contact Number
    $('#cntctNumber').blur(function (e) {
        let contactNumber = $('#cntctNumber').val();
        if (contactNumber == '') {
            $('#cntctErr').removeClass('text-success').addClass('text-danger').text('**Enter Your 10 digit Contact Number**');
        } else if (contactNumber.length !== 10) {
            $('#cntctErr').removeClass('text-success').addClass('text-danger').text('**Contact number should be 10 digit**');
        } else if (contactNumber.length == 10) {
            $('#cntctErr').removeClass('text-danger').addClass('text-success').text('Contact number Added');
        }
    });

    //Message
    $('#message').blur(function (e) {
        let message = $('#message').val();
        if (message == '') {
            $('#msgErr').removeClass('text-success').addClass('text-danger').text('**Type Your Message**');
        } else if (message.length < 10) {
            $('#msgErr').removeClass('text-success').addClass('text-danger').text('**Message should be more than 10 characters**');
        } else if (message.length > 100) {
            $('#msgErr').removeClass('text-success').addClass('text-danger').text('**Message should not be more than 100 characters**');
        } else {
            $('#msgErr').removeClass('text-danger').addClass('text-success').text('Message added');
        }
    });

    //Form submit event
    $('#myForm').submit(function (e) {
        e.preventDefault();

        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let emailId = $('#email').val();
        let contactNumber = $('#cntctNumber').val();
        let message = $('#message').val();

        if (firstName == '') {
            $('#fnerr').removeClass('text-success').addClass('text-danger').text('**Enter First Name**');
        }
        if (lastName == '') {
            $('#lnerr').removeClass('text-success').addClass('text-danger').text('**Enter Last Name**');
        }
        if (emailId == '') {
            $('#emailErr').removeClass('text-success').addClass('text-danger').text('**Enter Your Email Id**');
        }
        if (contactNumber == '') {
            $('#cntctErr').removeClass('text-success').addClass('text-danger').text('**Enter Your 10 digit Contact Number**');
        }
        if (message == '') {
            $('#msgErr').removeClass('text-success').addClass('text-danger').text('**Type Your Message**');
        }
    });
});

//User Can Only enter number
function onlyNumber(evt) {
    let charCode = evt.which || event.charCode || event.char;
    if ((charCode < 48 || charCode > 57))
        return false;

    return true;
}

//User can only enter letter
function onlyLetter(evt) {
    let charCode = evt.which || event.charCode || event.char;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122))
        return false;

    return true;
}
//regEx for Email
function validEmail(email) {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!regex.test(email)) {
        return false;
    }

    else {
        return true;
    }
}