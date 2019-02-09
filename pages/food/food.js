// pages/food/food.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [],
    host: app.globalData.host
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getFoodList();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 获取菜品列表数据
  getFoodList() {
    let _this = this;
    wx.request({
      url: 'http://a.itying.com/api/productlist',
      data: {

      },
      method: 'GET',
      header: {
        "content-type": "application/json"
      },
      success(res) {
        let result = res.data.result || [];
        result.forEach(item => {
          item.list.forEach(subItem => {
            subItem.img_url = subItem.img_url.replace(/\\/g, '/');
          })
        });
        result = result.filter(item => item.list.length > 0);
        _this.setData({
          menuList: result
        })
      }
    });
  }
})