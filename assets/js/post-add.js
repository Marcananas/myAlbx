$(function () {
    $('#feature').on('change', function () {
        // console.log($('#feature')[0].files[0])
        var formdata = new FormData()
        formdata.append('img', $('#feature')[0].files[0])
        $.ajax({
            type: "post",
            url: "/uploadFile",
            data: formdata,
            processData: false,  // 不处理数据
            contentType: false,   // 不设置内容类型
            dataType: "json",
            success: function (response) {
                // console.log(response)
                if (response.code == 200) {
                    $('#succeed strong').text(response.msg + '！')
                    $('#succeed').fadeIn(1000).delay(2000).fadeOut(1000)
                    $('.thumbnail').fadeIn(200).attr('src', '/uploads/' + response.img)
                    $('#imgName').val('/uploads/' + response.img)
                } else {
                    $('#succeed strong').text(response.msg + '！')
                    $('#succeed').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        });
    })
})