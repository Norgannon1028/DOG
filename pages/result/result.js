// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cl:"#ffffff",
    src:'',
    button_text:"选择图片",
    flag:1,
    change_text:"品种识别",
    flag2:1,
    array: ['人', '鸟', '猫', '狗', '马', '羊', '牛', '象', '熊'],
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option){
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(src) {
      this.setData({ src: "src" })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})