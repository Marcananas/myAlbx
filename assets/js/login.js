$('.btn-primary').on('click', function () {
    var email = $('#email').val()
    var password = $('#password').val()
    $.ajax({
        type: "post",
        url: "/login",
        data: {
            email,
            password
        },
        dataType: "json",
        success: function (response) {
            if (response.code == 201) {
                $('.alert-danger').css('display', 'block')
                $('.alert-danger span').text(response.msg);
            } else {
                location.href = '/admin'
            }
        }
    })
})