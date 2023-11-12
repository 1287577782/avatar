// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrcs: ["/images/1.jpg",'/images/2.jpg','/images/3.jpg'],
    tabList: [],
    channel: [],
    menu:   [{"name":"鹊桥", "icon":""}, {"name":"安居", "icon":""}, {"name":"招聘","icon":""}, {"name":"家政", "icon":""}],
    "persionList":[{"id":"test1", "img":"/images/1.jpg", "username":"test","disp":"", "hight":175}, 
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test2", "img":"/images/2.jpg", "username":"test2","disp":"", "hight":165},
    {"id":"test3", "img":"/images/3.jpg", "username":"test3", "disp":"", "hight":163}],
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots-bar' },
    swiperImageProps: { mode: 'scaleToFill' },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  navToActivityDetail({ detail }) {
    const { index: promotionID = 0 } = detail || {};
    wx.navigateTo({
      url: '/pages/logs/logs'
    });
  }
})