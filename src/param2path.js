module.exports = {
    /**
     * 返回请求路径
     * @param url
     * @param param
     * @return
     */
    param2path: function(url, param){
        let _url = url;
        for (let key in param) {
            _url += param[key] + '/'
        }
        return _url
    }
}