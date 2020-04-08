# SkeletonScreen
mini program SkeletonScreen
小程序骨架屏 提高用户体验度

## 快速上手
## step 1
将本组件download到小程序目录下component目录下
## step 2
在需要骨架屏加载的页面引入该组件

```json
//index.json
{
"usingComponents": {
    "skeleton":"../component/skeleton/skeleton"
  },
}
```

```html
<!-- 骨架屏 -->
<skeleton selector="skeleton" animation="shuttle" bgcolor="#fff" wx:if="{{showSkeleton}}"></skeleton>
```


