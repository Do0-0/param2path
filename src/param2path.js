module.exports = {
    /**
     * 获取Defer对象
     * @return {[type]} [description]
     */
    param2path: function(url, param){
        let _url = url;
        for (let key in param) {
            _url += param[key] + '/'
        }
        console.log(_url);
    }
}