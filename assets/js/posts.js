$(function () {
    // 初始页数为第一页
    var pageNum = 1
    // 每页显示的数据数
    var pageSize = 2
    // 封装成函数用于刷新页面，传入筛选参数
    function init(query = {}) {
        // 发起ajax获取数据动态生成所有文章列表
        $.ajax({
            type: "get",
            url: "/getPosts",
            data: {
                pageNum,
                pageSize,
                ...query
            },
            dataType: "json",
            success: function (response) {
                // console.log(response)
                var html = template('postsList', response)
                $('tbody').html(html)
                // 调用分页器模版，传入总页数动态生成分页器
                bootPage(Math.ceil(response.total / pageSize))
            }
        })
    }
    // 第一时间调用函数生成页面
    init()
    // 分页器模版
    function bootPage(total) {
        $(".pagination").bootstrapPaginator({
            bootstrapMajorVersion: 3,    //版本
            currentPage: pageNum,    //当前页数
            // numberOfPages: ,    //最多显示Page页
            totalPages: total,    //总页数
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
                // 分页器生成后必须刷新页面
                // init()
                // 考虑到换页也要保持筛选条件，故在此调用筛选器函数，筛选器函数也包含刷新功能
                filter()
            }
        })
    }
    // 获取分类目录数据动态生成筛选下拉菜单
    (function () {
        $.ajax({
            type: "get",
            url: "/getCategories",
            // data: "data",
            dataType: "json",
            success: function (response) {
                // console.log(response)
                var html = '<option value="all">所有分类</option>'
                response.forEach(element => {
                    html += `<option value="${element.id}">${element.name}</option>`
                })
                $('.cateSelect').html(html)
            }
        })
    })()
    // 封装筛选器函数
    function filter() {
        var query = {}
        var cate = $('.cateSelect').val()
        var status = $('.statuSelect').val()
        // 判断筛选值是否为'all'，如果都为'all'的话只需要传空对象
        if (cate != 'all') {
            query.category_id = cate
        }
        if (status != 'all') {
            query.status = status
        }
        // console.log(query)
        // 传入参数刷新列表
        init(query)
    }
    // 设置筛选按钮点击事件
    $('#filter').on('click', function () {
        // 让页面跳转回第一页
        pageNum = 1
        // 调用筛选器
        filter()
    })
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
                // console.log(response)
                // init()
                // 删除也要保持筛选条件
                filter()
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
        // console.log(allChk)
        // 遍历勾选项目
        for (var i = 0; i < allChk.length; i++) {
            // 将遍历获取的id输入del函数进行逐项删除的操作
            del(allChk[i].dataset.id)
        }
    })
})