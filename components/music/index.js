// components/music/index.js
const musicContext = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img:String,
    content:String,
    src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    play:false,
    pauseImgSrc:'images/pause.png',
    playImgSrc:'images/playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(){
      if(!this.data.play){
        musicContext.src = this.properties.src;
        this.setData({play:true});return;
      }
      // 播放中点击的话，暂停
      this.setData({play:false})
      musicContext.pause();
     
    }
  }
})
