$(function () {
    var pageNum = 1
    var pageSize = 10
    function init() {
        $.ajax({
            type: "get",
            url: "/getPosts",
            data: {
                pageNum,
                pageSize
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
                var html = template('postsList', response)
                $('tbody').html(html)
                bootPage(Math.ceil(response.total / pageSize))
            }
        })
    }
    init()
    function bootPage(total) {
        $(".pagination").bootstrapPaginator({
            bootstrapMajorVersion: 3,    //版本
            currentPage: pageNum,    //当前页数
            // numberOfPages: ,    //最多显示Page页
            totalPages: total,
            onPageClicked: function (e, originalEvent, type, page) {
                // console.log("e")
                // console.log(e)
                // console.log("originalEvent")
                // console.log(originalEvent)
                // console.log("type")
                // console.log(type)
                // console.log("page")
                // console.log(page)
                pageNum = page
                init()
            }
        })
    }
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
    // 设置删除事件
    // 打包删除ajax
    function del(id) {
        $.ajax({
            type: "post",
            url: "/delPosts",
            data: { id },
            dataType: "json",
            success: function (response) {
                console.log(response)
                init()
            }
        })
    }
    // 删除单项
    $('tbody').on('click', '.btn-del', function () {
        // console.log($(this)[0].dataset.id)
        var id = $(this)[0].dataset.id
        del(id)
    })
    // 批量删除
    $('#delInBatches').on('click', function () {
        // 获取勾选项目
        var allChk = $('tbody .checkList:checked')
        console.log(allChk)
        // 遍历勾选项目
        for (var i = 0; i < allChk.length; i++) {
            // 将遍历获取的id输入del函数进行逐项删除的操作
            del(allChk[i].dataset.id)
        }
    })
})