var common = {
    getRouterName(url) {
        // 判断当前URL中是否含有'?'
        var index = url.indexOf('?')
        var routername
        // 获取路由方法
        if (index == -1) {
            routername = url.substring(url.lastIndexOf('/') + 1)
        } else {
            routername = url.substring(url.lastIndexOf('/') + 1, index)
        }
        return routername
    }
}