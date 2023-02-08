export const MODIFY_SERVER = 'http://127.0.0.1:3000';

// !!! 最好不要改动 太多耦合不可预测
export const HASH_ROUTER = true;

// 每次上拉下拉 增加的 msg 数量
export const STEP_LENGTH = 20;
// 同时渲染最多的 msg 数量
export const STEP_MAX = 200;

// Loading 显示文本 随机抽
export const loadingTexts = [
    '我们家果果好萌的 ^з^',
    '我们家多乐不知道过得好不好 (,,•́ . •̀,,)',
    '我们家千金好傲娇的 <(ˉ^ˉ)>',
    '我们家菜菜不知道现在去哪了 T.T',
    '我们家矿矿好粘的 =≡Σ(((つ´•ω•`)つ',
    '猪好蠢的 づ￣ 3￣)づ',
];

// 进入 query 页面时的默认时间 (默认显示哪个时间的消息)
export const DEFAULT_URL_DAY = '1991-11-01_00-00-00';

// 评论标签 可便于搜索
export const COMMENT_TAGS = ['#礼物', '#大事件', '//TODO'];

// 左上角显示信息
export const HEAD_INFOS = {
    // 头像图标 留空将默认使用 /static/avatar/default/$direction.png
    AVATAR_IMG: {
        GO: '',
        COME: '',
    },
    HER_NAME: `I Am Groot`,
    LAST_TEXT: '',
    LAST_TIME: '2019/09/13 23:42:34',
};

// 消息的头像函数 返回值需为图片路径
// 默认值为 /static/avatar/default/$direction.png
export function AVATAR_IMG(msg) {
    /* eslint-disable no-unused-vars */
    const {
        source,
        device,
        type,

        direction,

        sender,
        senderName,

        receiver,
        receiverName,

        ms,
    } = msg;
    const avatarRoot = `/static/avatar`;
    const qqRoot = `${avatarRoot}/QQ/${direction}/`;
    const wechatRoot = `${avatarRoot}/Wechat/${direction}/`;
    const smsCallRoot = `${avatarRoot}/CallLog/`;
    const emailCallRoot = `${avatarRoot}/Email/`;
    const defaultRoot = `${avatarRoot}/default/`;
    /* eslint-enable no-unused-vars */

    switch (source) {
        default:
            // console.warn(`该类型没有设置头像 ${source}`);
            return defaultRoot + (direction === 'go' ? 'go.png' : 'come.png');
    }
}
