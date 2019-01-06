//高德地图
export const MapKey = '5455c45c0f8edec64518052faa154c56'
//地图限定城市
export const MapCityName = '福州'
//订单假数据
export const dingdandata = [
  {
    name: '王天胜',
    tele: 1450000000000,
    ttype: '成人票',
    num: 2,
    money: 160
  },
  {
    name: '李三多',
    tele: '1380000000000',
    ttype: '老人票',
    num: 3,
    money: 180
  },
  {
    name: '王叔叔',
    tele: '1830000000000',
    ttype: '老人票',
    num: 1,
    money: 60
  }
]
//公告假数据
export const tellsdatas = [
  {
    name: 1,
    title: '2018-12-25圣诞公告',
    content:
      '圣诞节是每年的12月25日，是西方的传统节日，近几年也在中国开始盛行，本旅游景点圣诞节不休息，全面开放，并且为所有旅客提供圣诞帽，圣诞礼物，入园处领取，祝大家圣诞快乐，平安出行'
  },
  {
    name: 2,
    title: '2018-12-28元旦公告',
    content:
      '各位游客，元旦法定假期为2018年12月30号至2019年1月1号，在元旦假期内，本旅游景点正常迎客，2019年1月2号至2019年1月4号为本景点为员工调休时间，届时将闭园，祝大家在元旦玩得开心，新年新气象。'
  },
  {
    name: 3,
    title: '2019-1-15消防演练公告',
    content:
      '为提升我单位应急管理水平，将联合本市公安消防支队将于本月18号开展消防演练活动。期间将模拟火灾、举高车救援等行动，并有较多消防车辆于景点集结。请广大游客不必惊慌，不要围观和误报火警。过往车辆请尽量避开上述道路，同时服从现场工作人员的指挥疏导。造成不便，敬请谅解！'
  }
]

const path = require('path')
export const pathresolve = dir => {
  return path.join(__dirname, dir)
}
