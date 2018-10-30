const express = require('express');
const router = express.Router();
const repairs = require('../model/repairs');
const maintainerModel = require('../model/maintainer');
const auth = require('./auth')


router.post('/add', async (req, res, next) => {
    try {
        let {title, content, address, imgs} = req.body;
        let data = await repairs.create({title, content, address, imgs});
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})

router.get('/', async (req, res ,next) => {
    try {
        let {page = 1, size = 10} = req.body;
        let data = await repairs.find().skip((page-1)*size).limit(size).sort({_id: -1})
            .populate({path: 'maintainer', select: '-password'})
        res.json({
            data,
            code: 200,
            msg: 'success'
        })
    }catch (e) {
        next(e)
    }
})


router.post('/:id', auth, async (req, res, next) =>{
    try {
        let {id} = req.params;
        let {maintainer, type} = req.body;
        if(maintainer) { //指派维修师傅
            let data = await repairs.update({_id: id}, {maintainer: maintainer});
            await maintainerModel.update({_id: maintainer}, {$push: {task: id}});
            res.json({
                data,
                code: 200,
                msg: '指派成功'
            })
        }
        if(type) { //修改维修状态
            let data = await repairs.update({_id: id}, {type: type});
            res.json({
                data,
                code: 200,
                msg: '修改成功'
            })
        }

    }catch (e) {
        next(e)
    }
})

module.exports = router