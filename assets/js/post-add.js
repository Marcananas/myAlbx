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
        })
    })
    // 将文本框替换成CKEDITOR
    CKEDITOR.replace('content');
    (function () {
        $.ajax({
            type: "get",
            url: "/getCategories",
            // data: "data",
            dataType: "json",
            success: function (response) {
                // console.log(response)
                var html
                response.forEach(element => {
                    html += `<option value="${element.id}">${element.name}</option>`
                })
                $('#category').html(html)
            }
        })
    })()
    // 设置点击保存按钮提交文章事件
    $('.btn-save').on('click', function () {
        // 这步可以将富文本内容同步到textaera中
        CKEDITOR.instances.content.updateElement()
        var data = $('form').serialize()
        // console.log(CKEDITOR.instances.content.updateElement())
        // console.log(CKEDITOR.instances.content.getData())
        $.ajax({
            type: "post",
            url: "/addPost",
            data: data,
            dataType: "json",
            success: function (response) {
                // console.log(response)
                // 当文章保存成功时，跳转到所有文章页
                if (response.code == 200) {
                    location.href = '/admin/posts'
                }
            }
        })
    })
    // 设置文章编辑事件
    var id = common.getIdByUrl(location.search).id
    // console.log(id)
    if (id) {
        $.ajax({
            type: "get",
            url: "getPost",
            data: { id },
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        })
    }
})