// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    channel: [],
    "persionList":[{"id":"test1", "img":"/icon/man.png",  "gender":"man",  "username":"test",  "disp":"", "hight":175}, 
                  {"id":"test2",  "img":"/icon/women.png", "gender":"women", "username":"test2", "disp":"", "hight":165},
                  {"id":"test2",  "img":"/icon/women.png","gender":"women",  "username":"test2", "disp":"", "hight":165},
                  {"id":"test2",   "img":"/icon/man.png", "gender":"man",  "username":"test2", "disp":"", "hight":165}]
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
  },
  previewSqs(event) {
      // 拿到图片的地址url
      let currentUrl = event.currentTarget.dataset.src;
      // 微信预览图片的方法
      wx.previewImage({
          current: currentUrl, // 图片的地址url
          urls: [currentUrl] // 预览的地址url
      })
  }
})