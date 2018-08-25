// components/gender/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {
    like:{
      type:Boolean,
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc:'images/like.png',
    dissLikeSrc:'images/like@diss.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
      let like = !this.properties.like;
      let count = this.properties.count;
      like?count+=1:count-=1;
      this.setData({like,count})
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{behavior},{})
    },
  }
})
