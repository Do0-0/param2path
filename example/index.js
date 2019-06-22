let a = require('../src/param2path')
let param = {
	lon: 123.1232123,
	lat: 23.2646,
	name: '广州市'
}

var path = a.param2path('http://localhost:8080/mfs-wx/', param)
console.info(path)
// http://localhost:8080/mfs-wx/123.1232123/23.2646/广州市/
