import regeneratorRuntime from '../../utils/runtime'
import { BookModel } from "../../model/book";
import {random} from "../../utils/util"
const bookModel = new BookModel();
// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[],
    searchPanel:false,
    more:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotList()
  },

  async getHotList(){
    let {data} = await bookModel.getHotList()
    this.setData({bookList:data})
  },

  onReachBottom(){
    this.setData({
      more:random(10) 
    })
  },
  onActivateSearch(){
    this.setData({
      searchPanel:true
    })
  },
  onCancel(){
    this.setData({
      searchPanel:false
    })
  },
})