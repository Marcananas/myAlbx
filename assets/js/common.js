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
    },
    getIdByUrl(str) {
        var obj = {}
        if (str.indexOf('&') != -1) {
            str = str.substring(1, str.indexOf('&'))
        } else {
            str = str.substring(1)
        }
        // console.log(str)
        var arr = str.split('=')
        obj[arr[0]] = arr[1]
        return obj
    }
}