// pages/food-details/food-details.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodDetails: null,
    host: app.globalData.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getFoodDetail(options.id);
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

  },

  getFoodDetail(id) {
    let _this = this;
    wx.request({
      url: 'http://a.itying.com/api/productcontent?id=' + id,
      success(res) {
        let foodDetails = res.data.result[0];
        foodDetails.img_url = foodDetails.img_url.replace(/\\/g, '/');
        _this.setData({ foodDetails });
      }
    })
  }
})