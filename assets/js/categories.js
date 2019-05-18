$(function () {
    // 发起ajax获取分类目录数据，动态生成分类目录
    function init() {
        $.ajax({
            type: "get",
            url: "/getCategories",
            // data: "data",
            dataType: "json",
            success: function (response) {
                // console.log(response)
                var html = template('cateList', { list: response })
                $('tbody').html(html)
            }
        })
    }
    init()
    // 设置全选框点击事件
    $('#checkAll').on('click', function () {
        // console.log(this)
        // 判断全选框是否勾选
        var allchk = $(this).prop('checked')
        // allchk这里输出true和false，让列表的多选框根据全选框状态改变
        $('tbody .checkList').prop('checked', allchk)
        // 通过全选框是否勾选控制“批量删除”按钮的显示
        if (allchk) {
            $('.btn-sm').css('display', 'block')
        } else {
            $('.btn-sm').css('display', 'none')
        }
    })
    // 设置点击列表多选框事件
    $('tbody').on('click', '.checkList', function () {
        // console.log($('tbody .checkList'))
        // console.log($('tbody .checkList:checked'))
        // 获取已勾选项目数量
        var selected = $('tbody .checkList:checked').length
        // 如果勾选数大于1则显示“批量删除”按钮
        if (selected > 1) {
            $('.btn-sm').css('display', 'block')
        } else {
            $('.btn-sm').css('display', 'none')
        }
        // 获取多选框总数
        var listLength = $('tbody .checkList').length
        // 如果勾选数等于多选框总数，设置全选框勾选状态
        if (listLength == selected) {
            $('#checkAll').prop('checked', true)
        } else {
            $('#checkAll').prop('checked', false)

        }
    })
    // 设置编辑事件
    // 提取数据填入编辑框
    $('tbody').on('click', '.btn-edit', function () {
        // console.log($(this)[0].dataset.id)
        $('#name').val($(this)[0].dataset.name)
        $('#slug').val($(this)[0].dataset.slug)
        $('#id').val($(this)[0].dataset.id)
        $('#add').css('display', 'none')
        $('#edit').css('display', 'block')
    })
    // 点击添加发起ajax请求
    $('#edit').on('click', function () {
        var data = $('form').serialize()
        $.ajax({
            type: "post",
            url: "/editCategories",
            data: data,
            dataType: "json",
            success: function (response) {
                if (response.code == 200) {
                    $('#succeed strong').text(response.msg + '！')
                    $('#succeed').fadeIn(1000).delay(2000).fadeOut(1000)
                    init()
                    $('#name').val('')
                    $('#slug').val('')
                    $('#id').val('')
                    $('#add').css('display', 'block')
                    $('#edit').css('display', 'none')
                } else {
                    $('#err span').text(response.msg)
                    $('#err').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })
    // 设置添加事件
    $('#add').on('click', function () {
        var data = $('form').serialize()
        $.ajax({
            type: "post",
            url: "/addCategories",
            data: data,
            dataType: "json",
            success: function (response) {
                if (response.code == 200) {
                    $('#succeed strong').text(response.msg + '！')
                    $('#succeed').fadeIn(1000).delay(2000).fadeOut(1000)
                    init()
                    $('#name').val('')
                    $('#slug').val('')
                    $('#id').val('')
                } else {
                    $('#err span').text(response.msg);
                    $('#err').fadeIn(1000).delay(2000).fadeOut(1000)
                }
            }
        })
    })
    // 设置删除事件
    $('tbody').on('click', '#del', function () {

    })
})