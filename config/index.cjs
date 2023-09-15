/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc73ff0990989cc2e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a001725236891f5256ba483b23668c94',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ox3CN6Fpv0QZlamnjqLapOm8YI5s',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DVArJOKzPF1-WsAbm6yth_w2hXSJtgbXAAN5HdY0c2g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-13',
      festivals: [
        {
          type: '生日', name: '生日', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
      ],
    },
  ],
}

module.exports = USER_CONFIG

