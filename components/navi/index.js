// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:{
      type:Boolean,
      value:false
    },
    latest:{
      type:Boolean,
      value:false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc:'triangle.dis@left.png',
    leftSrc:'triangle@left.png',
    disRightSrc:'triangle.dis@right.png',
    rightSrc:'triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(){
      if(!this.properties.latest){
        this.triggerEvent('left')
      }
    },
    onRight(){
      if(!this.properties.first){
        this.triggerEvent('right')
      }

    }
  }
})
