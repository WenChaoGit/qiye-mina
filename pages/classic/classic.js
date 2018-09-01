import regeneratorRuntime from '../../utils/runtime'
import { LikeModel } from '../../model/like';
import { BookModel } from '../../model/book';
const bookModel = new BookModel();
const likeModel = new LikeModel();
const app = getApp();
// pages/classic/classis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:{},
    latest:false,
    first:true,
  },

  async _getLatest(){
    let {data:classic} = await bookModel.getBookList();
    app.globalData.latestIndex = classic.index;
    this.setData({classic})
  },

  async onLike({detail}){
    let { behavior } = detail;
    let {id:artID,type:category} = this.data.classic
    let {data,status} = await likeModel.like({behavior,artID,category})
    if( String(status).startsWith('2')){
      wx.showToast({title:data.msg});return;
    }
  },
  async onNext(){
      let {index} = this.data.classic;
      let data = await bookModel.getNext(index);
      console.log(data)
  },
  async onPrev(){
    let {index} = this.data.classic
    let {data:classic} = await bookModel.getPrevious(index)
    console.log(classic)
    this.setData({
      classic,
      first:this._isFirst(classic.index),
      latest:this._isLatest(classic.index)
    })
  },
  _isFirst(index){
    console.log(index)
    return index == 1?true:false;
  },
  _isLatest(index){
    let {latestIndex} = app.globalData;
    return latestIndex == index?true:false;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getLatest();
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