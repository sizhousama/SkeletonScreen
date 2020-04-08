# SkeletonScreen
mini program SkeletonScreen
骨架屏组件 提升用户体验 skr~

## 快速上手
## step 1
将本组件放到小程序目录的component目录
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
<!-- index.wxml -->

<!-- 骨架屏 -->
<skeleton root="skeleton" animation="shuttle" bgcolor="#fff" show="{{showSkeleton}}"></skeleton>
```
## step 3
  为需要骨架屏加载的页面的根节点添加特殊类名以便获取节点  
  本组件约定  根节点-rect为矩形节点  根节点-circle为圆形节点  
  请在需要骨架加载的节点上添加类名 如：  

```html
<!-- index.wxml -->

<!-- 骨架屏 -->
<skeleton root="skeleton" animation="shuttle" bgcolor="#fff" show="{{showSkeleton}}"></skeleton>

<!-- skeleton为根节点 -->
<view class="body skeleton">
    <view class="rect skeleton-rect " ></view>
    <view class="circle skeleton-circle " ></view>
</view>
```
