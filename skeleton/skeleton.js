Component({
  properties: {
    bgcolor: {
      type: String,
      value: '#FFF'
    },
    // 渲染的根节点的类名
    root: {
      type: String,
      value: 'skeleton'
    },
    // 加载动画
    animation: {
      type: String,
      value: ''
    },
    show:{
      type: Boolean,
      value: false
    }
  },


  data: {
    loadingAni: ['shuttle', 'gradient'],
    systemInfo: {},
    skeletonRectLists: [],
    skeletonCircleLists: []
  },
  lifetimes: {
    attached() {
      //默认的首屏宽高，防止内容闪现
      const systemInfo = wx.getSystemInfoSync();
      // 获取系统的信息，作为skeleton的宽和高
      this.setData({
        systemInfo: {
          width: systemInfo.windowWidth,
          height: systemInfo.windowHeight
        },
        // 设置动画
        animation: this.data.loadingAni.includes(this.data.animation) ? this.data.animation : ''
      })
    },
    ready() {
      let that = this;

      //绘制背景
      // selectAll: 在当前页面下选择匹配选择器 selector 的所有节点。
      wx.createSelectorQuery().selectAll(`.${that.data.root}`).boundingClientRect().exec(function(res) {
        console.log(res);
        that.setData({
          'systemInfo.height': res[0][0].height + res[0][0].top
        })
      });

      //绘制矩形
      that.rectHandle();
      //绘制圆形
      that.circleHandle();
    },
  },
  methods: {
    rectHandle: function() {
      const that = this;
      //绘制不带样式的节点
      // 选择所有 .skeleton-rect的节点
      wx.createSelectorQuery().selectAll(`.${that.data.root}-rect`).boundingClientRect().exec(function(res) {
        // 保存数据，一维数组是节点，二维数组是节点的信息
        that.setData({
          skeletonRectLists: res[0]
        })

        console.log(that.data.skeletonRectLists);
      });
    },
    circleHandle: function() {
      const that = this;
      // 同样地选择所有的 .skeleton-circle节点
      wx.createSelectorQuery().selectAll(`.${that.data.root}-circle`).boundingClientRect().exec(function(res) {
        that.setData({
          skeletonCircleLists: res[0]
        })
        console.log(that.data.skeletonCircleLists);
      });
    },
  }
})