$(document).ready(function () {
    $(".btn-success").on('click', function () {
        let username = $("#username").val();
        let pass = $("#pass").val();
        if (username.length > 3 && pass.length > 3) {
            if (username.length > 3) {
                $(".name1").css({ "background": "green", "color": "white" });
                $('.name1').html("Your name is  " + username);
            }
            if (pass.length > 5) {
                $(".passtext").css({ "background": "red", "color": "white" });
                $('.passtext').html("Your password is   " + pass);
            }

        }
        if (username == "" && pass == "") {
            error('pass');
            error('username');
        } else {
            success('pass');
            success('username');
        }
    });

});
function error(e) {
    $('#' + e).css('border', '1px solid red');
};
function success(e) {
    $('#' + e).css('border', '1px solid green');
};
