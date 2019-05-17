$(function () {
    var routername = common.getRouterName(location.href)
    /**Location 对象属性
        属性	        描述
        hash	    设置或返回从井号 (#) 开始的 URL（锚）。
        host	    设置或返回主机名和当前 URL 的端口号。
        hostname	设置或返回当前 URL 的主机名。
        href	    设置或返回完整的 URL。
        pathname	设置或返回当前 URL 的路径部分。
        port	    设置或返回当前 URL 的端口号。
        protocol	设置或返回当前 URL 的协议。
        search	    设置或返回从问号 (?) 开始的 URL（查询部分）。 
    */
    if (routername == 'admin') {
        $('#instrument-board').addClass('active');
    }
    // 文章
    if (routername == 'posts' || routername == 'post_add' || routername == 'categories') {
        $('#menu-posts').addClass('in')
        // $('#menu-posts').attr('aria-expanded', true)
        $('#article-nav').addClass('active')
        // $('#article-nav a').css('color', '#f6f6f6')
    }
    // 评论
    if (routername == 'comments') {
        $('#comments-nav').addClass('active');
    }
    // 用户
    if (routername == 'users') {
        $('#users-nav').addClass('active');
    }
    // 设置
    if (routername == 'nav_menus' || routername == 'slides' || routername == 'settings') {
        $('#menu-settings').addClass('in')
        // $('#menu-posts').attr('aria-expanded', true)
        $('#setting-nav').addClass('active')

    }
    // 给对应的二级栏目添加样式
    $('#' + routername).addClass('active')
})