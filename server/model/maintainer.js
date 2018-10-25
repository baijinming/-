const mongoose = require("mongoose");

const maintainer = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
      type: String,
      require: true
    },
    task: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'repairs'
        }
    ]
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("maintainer", maintainer);