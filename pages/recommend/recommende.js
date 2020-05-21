// pages/recommend/recommende.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData:{
      image: "/images/video.jpg",
      title: "那些港台明星的事儿",
      desc: "80,90年代影坛风华正茂的帅哥美女们",
      isHighScore: true
    },
    movieList:[{
      image: "/images/video.jpg",
      title: "那些港台明星的事儿111",
      desc: "80,90年代影坛风华正茂",
      isHighScore: true,
      id: 1292052
    },{
      image: "/images/video.jpg",
      title: "那些港台明星的事儿222",
      desc: "80,90年代影坛风华正茂",
      isHighScore: false,
      id: 1291546
    },
    {
      image: "/images/video.jpg",
      title: "那些港台明星的事儿333",
      desc: "80,90年代影坛风华正茂",
      isHighScore: true,
      id: 1292720
    }],
    currentIndex: 0,
    dialogContent: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      //轮播翻页控制，刚开始显示最后一页
      currentIndex: this.data.movieList.length -1
    })
  },

  handleClick (event){
    // console.log(event);
    this.setData({
      //轮播翻页控制，点击返回
      currentIndex: this.data.movieList.length -1,
      "movieList[2].title": "更新后的标题",
      dialogContent: "我是动态设置的内容"
    })
    //父组件向子组件传值，
    console.log(this.selectComponent("#dialog"));
    this.selectComponent("#dialog").openDialog();
  },

  //父组件监听子组件
  closeCallback(e){
    console.log("我是父组件，我监听到了子组件" , e.detail);
  },

  handleNavitatorClick(e){
    const movieId = e.currentTarget.dataset.movieId
    console.log(e);
    wx.navigateTo({
      url: "/pages/detail/detail?id=" +movieId
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
        title: "电影推荐"
      }
  }
})