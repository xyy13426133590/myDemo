// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading();
      console.log(options.id);
      const {id} = options;
      this.setData({
        movieId: id
      });
      //https://douban.uieee.com/v2/movie/top250
      //https://douban.uieee.com/v2/movie/subject/电影id
      wx.request({
        url: 'https://douban.uieee.com/v2/movie/subject/' + id,
        header:{
          "content-type": "json"
        },
        success:res =>{
          console.log("请求成功", res)
          if(res.statusCode == 200){
            this.setData({
              movieData: res.data
            })
            wx.setNavigationBarTitle({
              title: res.data.title
            })
          }
          wx.hideNavigationBarLoading();
        },
        fail: err =>{
          console.error(err)
        }
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
        return {
          title: "电影推荐" + this.data.movieData.title
        }
  }
})