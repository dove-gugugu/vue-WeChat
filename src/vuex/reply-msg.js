const replyMsgList = [
    {
        "mid": 5,
        "msg": [
            {
                "text": "长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单",
                "date": 1488117964495,
                "name": "阿荡",
                "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
            }, {
                "text": '点击空白处，操作菜单消失',
                "date": 1488117964495,
                "name": "阿荡",
                "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
            }, {
                "text": '来呀 快活啊',
                "date": 1488117964495,
                "name": "阿荡",
                "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
            }
        ]
    },
]


replyMsgList.getUserInfo = function (mid) {
    if (!mid) {
        return;
    } else {
        for (let index in replyMsgList) {
            if (replyMsgList[index].mid === mid) {
                return replyMsgList[index]
            }
        }
    }
}

export default replyMsgList
