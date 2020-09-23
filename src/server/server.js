
//基础模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url');
const { isRegExp } = require('util');
const { ReadStream, fstat } = require('fs');
const querystring = require('querystring')



//异步通信
const axios = require('axios')

//挂在数据库模块
const mongo = require('./mongo-init');
const { parse } = require('path');
const { default: Axios } = require('axios');


//服务器初始化
const server = http.createServer().on('request', (req, res) => {
    //处理/favivon请求
    if (req.url == '/favicon.ico') {
        res.end('')
    }

}).listen(3000, function () {
    console.log('port 3000 is run');
})

//跨域访问
server.on('request', (req, response) => {
    // res.writeHead(200,
    //     { "Access-Control-Allow-Origin": "*" }
    // )

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token"); //解决问题
    response.setHeader("Access-Control-Expose-Headers", "*")

})

//轮播图获取
server.on('request', (req, res) => {
    if (req.url.indexOf('/api/ACG') == 0) {
        let urlTarget = "https://api.muxiaoguo.cn" + req.url
        axios.all([
            axios.get(urlTarget),
            axios.get(urlTarget),
            axios.get(urlTarget),
            axios.get(urlTarget)
        ]).then(resArr => {
            let rst = {}
            resArr.map(function (e, k) {
                rst[k] = e.data
            })
            res.write(JSON.stringify(rst))
            res.end()
        }).catch(err => console.log(err.data))
    }
})

//主菜单响应
server.on('request', (req, res) => {
    if (req.url.indexOf('/api/gridList') == 0) {

        let girdList = {
            "0": {
                name: '热血',
                iconImgUrl: 'http://mhfm1tel.cdndm5.com/11/10684/20180912193016_480x369_63.jpg'
            },
            "1": {
                name: '恋爱',
                iconImgUrl: 'http://mhfm8tel.cdndm5.com/54/53003/20190822231852_480x369_43.jpg'
            },
            "2": {
                name: '校园',
                iconImgUrl: 'http://mhfm6tel.cdndm5.com/60/59983/20200520204959_480x369_37.jpg'
            },
            "3": {
                name: '冒险',
                iconImgUrl: 'http://mhfm8tel.cdndm5.com/61/60308/20200603140802_480x369_40.jpg'
            },
            "4": {
                name: '科幻',
                iconImgUrl: 'http://mhfm1tel.cdndm5.com/61/60420/20200618103408_480x369.jpg'
            },
            "5": {
                name: '推理',
                iconImgUrl: 'http://mhfm2tel.cdndm5.com/23/22369/20160329165542_480x369_46.jpg'
            },
            "6": {
                name: '恐怖',
                iconImgUrl: 'http://mhfm7tel.cdndm5.com/52/51435/20190701101036_480x369.jpg'
            }
        }
        res.write(JSON.stringify(girdList))
        res.end()

    }
})


//返回二进制数据流
server.on('request', (req, res) => {

    if (req.url.indexOf('/public/images') == 0) {
        let readstream = new fs.createReadStream('.' + req.url)
        let data
        readstream.on('data', chunk => {
            data += chunk
        })
        readstream.on('end', () => {
            res.writeHead(200, { "Content-Type": "image/jpeg" })
            res.end(data)
        })
        readstream.on('err', (err) => {
            console.log(err);

        })
    }
})


//解析图片根目录
server.on('request', (req, res) => {

    if (req.url == '/getartlist') {
        let list = fs.readdir('../public/images', "utf-8", (err, files) => {
            if (err) throw err
            // console.log(files);
            res.end(files.toString())
        })
    }
})


// 获取评论
server.on('request', (req, res) => {
    if (req.url.indexOf('/comments') == 0) {
        let num = parseInt(url.parse(req.url, true).query.limit)
        mongo.commentsDBT.find().limit(num)
            .then(rst => {
                rstObj = {}
                rst.forEach((element, key) => {
                    rstObj[key] = element

                });
                res.end(JSON.stringify(rstObj))
            })
            .catch(err => console.log(err))
    }
})


//更新评论
server.on('request', (req, res) => {
    if (req.url == '/submitNewComment') {


        let str = ''
        req.on('data', (chunk) => {
            str += chunk
        })
        req.on('end', () => {
            str = str.slice(1, -1)
            if (req.method == 'POST') {
                console.log(JSON.parse(`{${str}}`))
                mongo.commentsDBT.create(JSON.parse(`{${str}}`), (err, docs) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // console.log(docs);
                        console.log('已入库');
                    }
                })
            }
            res.end(str)

        })
    }
})



//必应图片
server.on('request', (req, res) => {
    if (req.url.indexOf('/getBiyingImage') == 0) {
        let imagnum = url.parse(req.url, true).query.n
        Axios.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=' + imagnum)
            .then(rst => {
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify(rst.data))
            })
            .catch(err => {
                console.log(err.data);
            })

    }
})


