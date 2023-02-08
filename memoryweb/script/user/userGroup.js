const 分组1 = ['110', '13000000000'];

const 分组2 = ['119', '19999999999'];

const EXCLUDE = ['120'];

const GROUP_SEND = [
    {
        label: '分组1',
        icon: '/static/avatar/default/come.png',
        children: [],
        groupBy: 分组1,
    },
    {
        label: '分组2',
        icon: '/static/avatar/default/go.png',
        children: [],
        groupBy: 分组2,
    },
];

const GROUP_RECEIVE = [
    {
        label: '分组2',
        icon: '/static/avatar/default/come.png',
        children: [],
        groupBy: 分组2,
    },
    {
        label: '分组1',
        icon: '/static/avatar/default/go.png',
        children: [],
        groupBy: 分组2,
    },
];

module.exports = {
    GROUP_SEND,
    GROUP_RECEIVE,
    // 不想参与统计的 sender 或 receiver
    STATISTICS_EXCLUDE_SENDER_AND_RECEIVER: EXCLUDE,
};
