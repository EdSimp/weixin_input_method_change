Page({
  data: {
    focus: false,
    inputValue: '',
    inputData:''
  }, 
  help: function (e) {
    console.log(111);
    wx.navigateTo({
      url: "/pages/help/index"
    })
  },
  onShareAppMessage: function () {
    return {
      title: '注音输入法转换器',
      path: '/page/index/index'
    }
  },
  bindDataInput:function(e){
    this.setData({
      inputData: e.detail.value
    })
  },
  tapData:function(e){
    wx.request({
      url: 'http://127.0.0.1:5000/wxpay/pay',
      data: this.data.inputData,
      //header: {
      //  'content-type': 'application/json'
      //},
      header: { 'content-type':            'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        console.log(res.data.paySign)
      }
    })
  }
  ,
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  tapName: function(e) {
    var wholeString = this.data.inputValue  //总字符串
    var firstTwoString = wholeString.substring(0,2)//开头为两个字母
    
    if (wholeString==""){
      wx.showToast({
        title: '请输入拼音',
        icon:'success'//可改成warning
      })
    }
    else if (firstTwoString == "zh" || firstTwoString == "ch" || firstTwoString == "sh"){  //判断辅音
      //console.log(event)
      var lastString = wholeString.substring(2) //元音
      console.log(firstTwoString)

      if (lastString == "uang") {  //判断是否为uang
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/ang.jpg"
        })
      }
      else if (lastString == "iang") {  //判断是否为iang
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/y.jpg",
          imageUrlThird: "/asserts/ang.jpg"
        })
      }
      else if (lastString == "ong") {  //判断是否为ong
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/eng.jpg"
        })
      }
      else if (lastString == "uan" && lastString.length == 3) {  //判断是否为uan
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/an.jpg"
        })
      }
      else if (lastString == "uai") {  //判断是否为uai
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/ai.jpg"
        })
      }
      else if (lastString == "ui") { //判断是否为ui
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/ei.jpg"
        })
      }
      else if (lastString == "un" && lastString.length == 2) { //判断是否为un
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/en.jpg"
        })
      }
      else if (lastString.length == 2 && lastString == "ua") {//判断是否为ua
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/a.jpg"
        })
      }
      else if (lastString.length == 2 && lastString == "uo") {//判断是否为uo
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/u.jpg",
          imageUrlThird: "/asserts/o.jpg"
        })
      }
      else if (lastString.length == 1 && lastString == "i") {
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: null,
          imageUrlThird: null
        })
      }
      else if (lastString == "a" || lastString == "ai" || lastString == "an" || lastString == "ang" || lastString == "ao" || lastString == "e" || lastString == "ei" || lastString == "ee" || lastString == "en" || lastString == "eng" || lastString == "er" || lastString == "i" || lastString == "o" || lastString == "ou" || lastString == "u" || lastString == "v" ) {
        this.setData({
          imageUrlFirst: "/asserts/" + firstTwoString + ".jpg",
          imageUrlSecond: "/asserts/" + lastString + ".jpg",
          imageUrlThird: null
        })
      }
      else{
        wx.showToast({
          title: '请输入正确的单个字拼写',
        })
      }
    }  
    else{  //辅音不是zh ch sh 
      var firstString = wholeString.substring(0, 1)//辅音是一个字母
      if(firstString=="y"){  //如果以y开头
        //判断是否会有v
        if (lastString.length == 3 && lastString == "yve") {//判断是否为ve
          this.setData({
            imageUrlFirst: "/asserts/v.jpg",
            imageUrlSecond: "/asserts/ee.jpg",
            imageUrlThird: null
          })
        }
        else if (lastString.length == 4 && lastString == "yvan") {//判断是否为uan
          this.setData({
            imageUrlFirst: "/asserts/v.jpg",
            imageUrlSecond: "/asserts/an.jpg",
            imageUrlThird: null
          })
        }
        else if (lastString.length == 3 && lastString == "yvn") {//判断是否为un
          this.setData({
            imageUrlFirst: "/asserts/v.jpg",
            imageUrlSecond: "/asserts/en.jpg",
            imageUrlThird: null
          })
        }
        else if (lastString.length == 1 && lastString == "i"){
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: null,
            imageUrlThird: null
          }) 
        }
        else if(lastString.length==2&&lastString=="in"){
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond:  "/asserts/y.jpg",
            imageUrlThird:  "/asserts/en.jpg"
          }) 
        }
        else if (lastString.length == 3 && lastString == "ing") {
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/y.jpg",
            imageUrlThird: "/asserts/eng.jpg"
          }) 
        }
        else if (lastString == "iong") {//判断是否为iong
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/v.jpg",
            imageUrlThird: "/asserts/eng.jpg"
          }) 
        }
        else if (lastString == "uang") {  //判断是否为uang
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/ang.jpg"
          }) 
        }
        else if (lastString == "iang") {  //判断是否为iang
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/y.jpg",
            imageUrlThird: "/asserts/ang.jpg"
          }) 
        }
        else if (lastString == "ong") {  //判断是否为ong
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/eng.jpg"
          }) 
        }
        else if (lastString == "uan" && lastString.length == 3) {  //判断是否为uan
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/an.jpg"
          }) 
        }
        else if (lastString == "uai") {  //判断是否为uai
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/ai.jpg"
          }) 
        }
        else if (lastString == "ian" && lastString.length == 3) {  //判断是否为ian
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/an.jpg"
          }) 
        }
        else if (lastString == "iao") {  //判断是否为iao
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/ao.jpg"
          }) 
        }
        else if (lastString == "iu") { //判断是否为iu
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/ou.jpg"
          }) 
        }
        else if (lastString == "ui") { //判断是否为ui
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/ei.jpg"
          }) 
        }
        else if (lastString == "un" && lastString.length == 2) { //判断是否为un
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/en.jpg"
          }) 
        }
        else if (lastString.length == 2 && lastString == "vn") {//判断是否为vn
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/v.jpg",
            imageUrlThird: "/asserts/en.jpg"
          }) 
        }
        else if (lastString.length == 2 && lastString == "ia") {//判断是否为ia
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/a.jpg"
          }) 
        }
        else if (lastString.length == 2 && lastString == "ie") {//判断是否为ie
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/e.jpg"
          }) 
        }
        else if (lastString.length == 2 && lastString == "ua") {//判断是否为ua
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/a.jpg"
          }) 
        }
        else if (lastString.length == 2 && lastString == "uo") {//判断是否为uo
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/o.jpg"
          }) 
        }
        else if (lastString == "a" || lastString == "ai" || lastString == "an" || lastString == "ang" || lastString == "ao" || lastString == "e" || lastString == "ei" || lastString == "ee" || lastString == "en" || lastString == "eng" || lastString == "er" || lastString == "i" || lastString == "o" || lastString == "ou" || lastString == "u" || lastString == "v") {
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/" + lastString + ".jpg",
            imageUrlThird: null
          })
        }
        else {
          wx.showToast({
            title: '请输入正确的单个字拼写',
          })
        }
      }
      
      else{  //如果不以y开头
        var lastString = wholeString.substring(1) //元音
        if (lastString == "i" && (firstString == "r" || firstString == "z" || firstString == "c" || firstString == "s")){
          //空操作
        this.setData({
          imageUrlFirst: "/asserts/" + firstString + ".jpg",
          imageUrlSecond: null,
          imageUrlThird: null
        })
        }
        else if (lastString == "iong") {//判断是否为iong
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/v.jpg",
            imageUrlThird: "/asserts/eng.jpg"
          })
        }
        else if (lastString == "uang") {  //判断是否为uang
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/ang.jpg"
          })
        }
        else if (lastString == "iang") {  //判断是否为iang
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/y.jpg",
            imageUrlThird: "/asserts/ang.jpg"
          })
        }
        else if (lastString == "ong") {  //判断是否为ong
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/eng.jpg"
          })
        }
        else if (lastString == "uan" && lastString.length == 3) {  //判断是否为uan
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/an.jpg"
          })
        }
        else if (lastString == "uai") {  //判断是否为uai
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/ai.jpg"
          })
        }
        else if (lastString == "ian" && lastString.length == 3) {  //判断是否为ian
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/an.jpg"
          })
        }
        else if (lastString == "iao") {  //判断是否为iao
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/ao.jpg"
          })
        }
        else if (lastString == "iu") { //判断是否为iu
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/ou.jpg"
          })
        }
        else if (lastString == "ui") { //判断是否为ui
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/ei.jpg"
          })
        }
        else if (lastString == "un" && lastString.length == 2) { //判断是否为un
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/en.jpg"
          })
        }
        else if (lastString.length == 2 && lastString == "vn") {//判断是否为vn
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/v.jpg",
            imageUrlThird: "/asserts/en.jpg"
          })
        }
        else if (lastString.length == 2 && lastString == "ia") {//判断是否为ia
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/a.jpg"
          })
        }
        else if (lastString.length == 2 && lastString == "ie") {//判断是否为ie
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/i.jpg",
            imageUrlThird: "/asserts/e.jpg"
          })
        }
        else if (lastString.length == 2 && lastString == "ua") {//判断是否为ua
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/a.jpg"
          })
        }
        else if (lastString.length == 2 && lastString == "uo") {//判断是否为uo
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/u.jpg",
            imageUrlThird: "/asserts/o.jpg"
          })
        }
        else if (lastString == "a" || lastString == "ai" || lastString == "an" || lastString == "ang" || lastString == "ao" || lastString == "e" || lastString == "ei" || lastString == "ee" || lastString == "en" || lastString == "eng" || lastString == "er" || lastString == "i" || lastString == "o" || lastString == "ou" || lastString == "u" || lastString == "v") {
          this.setData({
            imageUrlFirst: "/asserts/" + firstString + ".jpg",
            imageUrlSecond: "/asserts/" + lastString + ".jpg",
            imageUrlThird: null
          })
        }
        else {
          wx.showToast({
            title: '请输入正确的单个字拼写',
          })
        }       
      }         
    }
  }
//1.如果辅音是zh ch sh 
//  判断后面是不是只有i，如果是的话则只显示辅音
//                   如果不是的话，则正常判断
//2.如果辅音不是zh ch sh
//判断后面是否只有i，如果是的话，且辅音为r、z、c、s，则只显示辅音
//                   如果不是的话，则正常判断
//判断辅音是否为y，如果是的话，后面元音为i时，只显示辅音;为in时，显示y和en;为ing时，显示y和eng
//3.元音正常判断
//4.非正常判断
//in---ien;ing---ieng
//iu—i+ou ; ui—u+ei ; un—u+en ; ong—u+eng ; ün—ü(v)+en
//iong—ü(v)+eng
//图片在下一次输入的时候消失
//字符分割
//特殊情况：yve
//多元音
//只有辅音setdata了


})