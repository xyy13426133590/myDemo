// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textContent :{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHidden: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClose(){
      this.setData({
          isHidden : true
      })
      //子组件关闭时，向父组件触发事件
      this.triggerEvent("closeevent",{name: "我是组件中的事件",data: [1,3,4,45]});
    },
    openDialog(){
      this.setData({
        isHidden : false
    })
    }
  }
})
