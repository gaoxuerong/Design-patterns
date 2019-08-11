let express=require('express');
let bodyParser = require('body-parser')
let fs=require('fs');
let cache={};//缓存问题
let app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/user/:id',function (req,res) {
    let id=req.params.id;
    let user=cache.get(id);
    if (user) {
        res.json(user);
    } else {
        fs.readFile(`./users/${id}.json`,'utf8',function (err,data) {
            let user=JSON.parse(data);
            cache.put(id,user);
            res.json(user);
        });
    }
});

app.post('/user',function (req,res) {
    let user=req.body;
    fs.writeFile(`./users/${user.id}.json`,JSON.stringify(user),(err) => {
        console.log(err);
        res.json({code: 0,data: '写入成功'});
    });
});
app.listen(3000);