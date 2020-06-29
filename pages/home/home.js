Page({
  data: {
    cl:"#ffffff",
    src:'',
    button_text:"选择图片",
    flag:1,
    change_text:"品种识别",
    flag2:1,
    array: ['人', '鸟', '猫', '狗', '马', '羊', '牛', '象', '熊'],
    index:0
  },
  bindViewTap: function () {
    if(this.data.flag==1){
      if (this.data.flag2 == 1) {
        var u = 'http://175.24.53.216/up.php'
      }
      else {
        var u = 'http://175.24.53.216/up2.php'
      }
      var that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        success: function (res) {
          that.setData({ flag: 0, button_text: "已上传"})
          var tempFilePaths = res.tempFilePaths
          let src = res.tempFilePaths[0]
          that.setData({ src: src })
          var up = wx.uploadFile({
            url: u, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              method: 'POST',   //请求方式
              'item':that.data.index 
            },
            success: function (res) {
              that.setData({ flag: 1, button_text: "选择图片" })
              var data = res.data
              console.log(data)
              wx.showModal({
                title: '提示',
                content: data,
              })
            },
            fail: function (error) {
              that.setData({ flag: 1, button_text: "选择图片" })
              console.log(error)
              wx.showModal({
                title: '提示',
                content: error,
              })
            }
          })
        }
      })
    }
    else{
      wx.showModal({
        title: '提示',
        content: "图片已上传，请稍后",
      })
    }
  },
  preview_img: function () {
    wx.previewImage({
      current: this.data.src, // 当前显示图片的http链接
      urls: this.data.src // 需要预览的图片http链接列表
    })
  },
  change: function () {
    if(this.data.flag2==1)
    {
      this.setData({ flag2: 0, change_text: "物体检测" ,cl:"#000000"})
    }
    else{
      this.setData({ flag2: 1, change_text: "品种识别", cl: "#ffffff"})
    }
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  button_down() {
    /*wx.navigateTo({
      url: 'pages/result/result',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'src' })
      }
    })*/
    wx.request({
      url: 'http://175.24.53.216/yolo/test.php',
      data: {
        userName: 'shit',
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.showModal({
          title: '提示',
          content: res.data,
        })
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: res.data,
        })
      }
    })
  },
})