let a = require('../src/param2path')
let param = {
	lon: 123.1232123,
	lat: 23.2646,
	name: '广州市'
}
a.param2path('http://localhost:8080/mfs-wx/', param)