const express = require('express');
const router = express.Router();
const admin = require('../model/admin');
const auth = require('./auth');

//添加管理员
router.post('/add', auth, async (req, res, next) => {
    try {
        let {username, password} = req.body;
        let dt = await admin.findOne({username: username});
        if(dt) {
            res.json({
                code: 400,
                msg: '该用户名已被注册'
            })
        } else {
            let data = await admin.create({username, password});
            res.json({
                data,
                code: 200,
                msg: 'success'
            })
        }
    }catch (e) {
        next(e)
    }
})

//登录接口
router.post('/login', async (req, res, next) => {
    try {
        let {username, password} = req.body;
        let data = await admin.findOne({username});
        if(data) {
            if(data.password == password) {
                req.session.user = data;
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

module.exports = router