const http = require('http')
const fs = require('fs')
const axios = require('axios')
const url = require('url');
const { isRegExp } = require('util');
const { ReadStream, fstat } = require('fs');

const path = require('path')

const server = http.createServer().on('request', (req, res) => {

    //轮播图获取
    if (req.url.indexOf('/api/api.php') == 0) {
        let urlTarget = "https://api.ixiaowai.cn" + req.url
        axios.all([
            axios.get(urlTarget),
            axios.get(urlTarget),
            axios.get(urlTarget),
            axios.get(urlTarget)
        ]).then(resArr => {
            res.writeHead(200, {
                "Access-Control-Allow-Origin": "http://localhost:2999"
            },
                { "Content-Type": "application/json" })
            let rst = {}
            resArr.map(function (e, k) {
                rst[k] = e.data
            })
            res.write(JSON.stringify(rst))
            res.end()
        }).catch(err => console.log(err))
    }
}).listen(3000, function () {
    console.log('port 3000 is run');
})



//主菜单响应
server.on('request', (req, res) => {
    if (req.url.indexOf('/api/gridList') == 0) {
        res.writeHead(200,
            { "Access-Control-Allow-Origin": "http://localhost:2999" },
            { "Content-Type": "application/json" }
        )
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


server.on('request', (req, res) => {
    console.log(req.url);

    if (req.url.indexOf('/public/images') == 0) {
        let readstream = new fs.createReadStream('.' + req.url)
        let data
        readstream.on('data', chunk => {
            data += chunk
        })
        readstream.on('end', () => {
            res.writeHead(200, { "Content-Type": "image/jpeg" }, { "Access-Control-Allow-Origin": "http://localhost:2999" })
            res.end(data)
        })
        readstream.on('err', (err) => {
            console.log(err);

        })
    }
})

server.on('request', (req, res) => {
    if (req.url == '/getartlist') {
        let list = fs.readdir('./public/images', "utf-8", (err, files) => {
            if (err) throw err
            // console.log(files);
            res.writeHead(200, { "Access-Control-Allow-Origin": "http://localhost:2999" })
            res.end(files.toString())
        })
    }
})