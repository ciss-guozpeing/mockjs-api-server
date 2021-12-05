var Mock = require('mockjs')

var data = Mock.mock({
    'list|1-10':[{
        'id|+1': 1,
        'name': '@cname',
        'description|3-5': '@csentence',
        'area': '@province',
    }]
})

console.log(JSON.stringify(data))