const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/cartoon', { useNewUrlParser: true, useUnifiedTopology: true }).then(msg => console.log('mongodb linke success')).catch(err => console.log('mongo link false'))

//创建Schema 建立与数据库中集合建立映射关系
const commentsSchema = new mongoose.Schema({
    author: String,
    message: String,
    date: { type: Date, default: Date.now() }
})

//创建可操作Schema的实例对象model
const commentsDBT = mongoose.model('commentsDB', commentsSchema)




// commentsDBT.insertMany([
//     {
//         author: '土拨鼠',
//         message: '你好呀,我就露个脸'
//     },
//     {
//         author: '龙猫',
//         message: '我偷偷藏起来,不让你看到'
//     },
//     {
//         author: '第二只土拨鼠',
//         message: '你好呀,我再露个脸'
//     },
//     {
//         author: '第二只龙猫',
//         message: '我偷偷藏起来,还是不让你看到'
//     }
// ])


module.exports = {
    commentsDBT
}



