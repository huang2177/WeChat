// pages/home/home.js
//var Bmob = require('../../libs/Bmob-1.0.1.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

    sliderList: [
      { selected: true, img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2240487247,4102041481&fm=27&gp=0.jpg' },
      { selected: false, img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4225756929,1399880280&fm=27&gp=0.jpg' },
      { selected: false, img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2605260484,2971023638&fm=200&gp=0.jpg' },
    ],

    proList: [
      { img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4225756929,1399880280&fm=27&gp=0.jpg', name: '招牌牛肉', pirce: '￥39.0' },
      { img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2240487247,4102041481&fm=27&gp=0.jpg', name: '冷吃兔丁', pirce: '￥32.0' },
      { img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2605260484,2971023638&fm=200&gp=0.jpg', name: '鸭舌', pirce: '￥54.0' },
      { img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2240487247,4102041481&fm=27&gp=0.jpg', name: '冷吃兔丁', pirce: '￥32.0' },
      { img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4225756929,1399880280&fm=27&gp=0.jpg', name: '招牌牛肉', pirce: '￥39.0' },
      { img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2605260484,2971023638&fm=200&gp=0.jpg', name: '鸭舌', pirce: '￥54.0' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // Bmob.initialize("0871cf2eba249104f43c5e05ffdcdd5e", "9f46207aabe5dac5fd4356605322d721");
  },


  /**
 * 这里处理滚动事件处理
 */
  listenSwiper: function (e) {
    //打印信息
    // console.log(e)
  },
  /**
   * 跳转到购物车
   */
  shopCar: function () {
    wx.navigateTo({
      url: '../shop-car/shop-car',
    })
  },
  /**
 * 跳转到商品详情
 */
  goToDetail: function () {
    wx.navigateTo({
      url: '../pro-detail/pro-detail',
    })
  },
  /**
 * 跳转到确认订单
 */
  goToOrder: function (e) {
    var id = e.currentTarget.dataset;
    console.log(id);
    wx.navigateTo({
      url: '../order/order?index=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})