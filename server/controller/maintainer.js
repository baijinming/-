const express = require('express');
const router = express.Router();
const auth = require('./auth');
const maintainer = require('../model/maintainer');

router.post('/add', auth, async (req, res, next) => {
    try {
        let {username, password, phone} = req.body;
        let data = await maintainer.create({username, password, phone});
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

router.get('/', async (req, res, next) => {
    try {
        let {page = 1, size = 10} = req.body;
        let data = await maintainer.find().skip((page-1)*size).limit(size).sort({_id: -1})
            .populate({path: 'task'})
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

//获取某个维修人员的信息
router.get('/:id', async (req, res, next) => {
    try {
        let {id} = req.params;
        let data = await maintainer.findOne({_id: id}).populate({path: 'task'})
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

//维修人员登录
router.post('/login', async (req, res, next) => {
    try {
        let {username, password} = req.body;
        let data = await maintainer.findOne({username}).populate({path: 'task'});
        if(data) {
            if(data.password == password) {
                req.session.maintainer = data;
                res.json({
                    data,
                    code: 200,
                    msg: 'success'
                })
            }else {
                res.json({
                    code: 400,
                    msg: '密码错误'
                })
            }
        }else {
            res.json({
                code: 400,
                msg: '用户名不存在'
            })
        }
    }catch (e) {
        next(e)
    }
})

module.exports = router;