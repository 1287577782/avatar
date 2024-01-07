// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "persionList":[{"id":"test0", "img":"/icon/man.png",  "gender":"man",  "username":"子非鱼乐",  "introduce":"【黄桥征婚】89年勤丰村小哥哥，身高175，体重140斤，大专学历，国企非编，年收入10W，工作稳定，希望找一位89-95年之间，身高160以上的女孩。", "hight":175, "picture":[
      {"url":"/images/t1.jpg"}, {"url":"/images/t2.jpg"},{"url":"/images/t3.jpg"}
    ]}, 
                  {"id":"test1",  "img":"/icon/women.png", "gender":"women", "username":"云上之约", "introduce":"【黄桥征婚】96年刘家堡村小姐姐，身高165，体重96斤，本科学历，小学老师，年收入10W，性格温和，喜欢瑜伽，希望找一位情绪稳定，热爱生活的男孩。", "hight":165, "picture":[
                    {"url":"/images/TangYan1.jpeg"}, {"url":"/images/TangYan2.jpeg"},{"url":"/images/TangYan3.jpeg"}
                  ]},
                  {"id":"test2",  "img":"/icon/women.png","gender":"women",  "username":"简单", "introduce":"【黄桥征婚】98合兴村小姐姐，身高163，体重106斤，黄桥镇有房，本科学历，初中在编老师，容貌清秀，无恋爱史。希望找一位身体健康，真诚善良，做事靠谱的男孩。", "hight":163, "picture":[
                    {"url":"/images/LiuYiFei1.jpg"}, {"url":"/images/LiuYiFei2.jpg"},{"url":"/images/LiuYiFei3.jpg"}
                  ]},
                  {"id":"test3",   "img":"/icon/man.png", "gender":"man",  "username":"流年", "introduce":"【黄桥征婚】95年泰兴小哥哥，身高168，有房有车，本科学历，事业单位工作，年收入17W，阳光开朗，有上进心。希望找一位工作稳定，真诚靠谱的女孩。", "hight":168, "picture":[
                    {"url":"/images/LiXian1.jpeg"}, {"url":"/images/LiXian2.jpeg"},{"url":"/images/LiXian3.jpeg"}
                  ]}]
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
      let index = 0
      let arr = []
      let item = event.currentTarget.dataset.index;
      for (var i=0;i<item.picture.length;i++)
      {
        arr.push(item.picture[i].url)
      }
      let currentUrl="/images/t1.jpg" 
      console.log(index)
      console.log(item)
      // 微信预览图片的方法
      wx.previewImage({
          current: currentUrl, // 图片的地址url
          urls: arr // 预览的地址url
      })
  }
})