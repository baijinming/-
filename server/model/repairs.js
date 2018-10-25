const mongoose = require("mongoose");

const repairs = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    address: {
      type: String,
      require: true
    },
    imgs: [
        {
            type: String,
            require: true
        }
    ],
    maintainer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'maintainer'
    },
    type: {
        type: String,
        default: '0'  //0为未维修状态，1为已维修状态
    }

},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("repairs", repairs);