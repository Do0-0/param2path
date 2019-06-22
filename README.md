# param2path
a tool translate requestparam to pathvalue

## Usage

```
import {param2path} from 'param2path'
let param = {
	lon: 123.1232123,
	lat: 23.2646,
	name: '广州市'
}

var path = param2path('http://localhost:8080/projectName/', param)
// http://localhost:8080/projectName/123.1232123/23.2646/广州市/
```

## Install

`npm install param2path --save`
