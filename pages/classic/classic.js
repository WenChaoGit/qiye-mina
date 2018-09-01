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
    latest:true,
    first:false,
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
      let cacheKey = this._getClassicCacheKey(index+1);
      let cacheClassic = wx.getStorageSync(cacheKey);
      if(!cacheClassic){
        let {data:classic} = await bookModel.getNext(index);
        wx.setStorageSync(cacheKey,classic);
        this._setClassicData(classic);return;
      }
      this._setClassicData(cacheClassic)
      
  },
  async onPrev(){
    let {index} = this.data.classic
    let cacheKey = this._getClassicCacheKey(index-1);
    let cacheClassic = wx.getStorageSync(cacheKey);
    if(!cacheClassic){
      let {data:classic} = await bookModel.getPrevious(index)
      wx.setStorageSync(cacheKey,classic);
      this._setClassicData(classic);return;
    }
    this._setClassicData(cacheClassic)
  },
  _isFirst(index){
    return index == 1?true:false;
  },
  _isLatest(index){
    let {latestIndex} = app.globalData;
    return latestIndex == index?true:false;
  },
  _getClassicCacheKey(index){
    return  `classic-${index}`;
  },
  _setClassicData(classic){
    this.setData({
      classic,
      first:this._isFirst(classic.index),
      latest:this._isLatest(classic.index)
    })
  },

  async _getLikeStatus(id,category){
    let {data} = await likeModel.getClassicLikeStatus(id,category);
    console.log(data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getLatest();
  },
})