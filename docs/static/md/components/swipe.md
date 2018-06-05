----------


### Swipe 轮播

#### 使用指南
``` javascript
import { Swipe, SwipeItem } from 'vui';

Vue.use(Swipe);
Vue.use(SwipeItem);
```

#### 代码演示

##### 基础用法
通过`autoplay`属性设置自动轮播间隔

```html
<vu-swipe :autoplay="3000">
  <vu-swipe-item>1</vu-swipe-item>
  <vu-swipe-item>2</vu-swipe-item>
  <vu-swipe-item>3</vu-swipe-item>
  <vu-swipe-item>4</vu-swipe-item>
</vu-swipe>
```

##### 图片懒加载
配合 [Lazyload](#/zh-CN/component/lazyload) 组件实现图片懒加载

```html
<vu-swipe :autoplay="3000">
  <vu-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </vu-swipe-item>
</vu-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

##### 滑动跳转
通过传入 `endFunction` 方法，滑动到最后一个图片后，会停止滑动并触发该方法

```html
<vu-swipe :endFunction="endFunction">
  <vu-swipeItem>1</vu-swipeItem>
  <vu-swipeItem>2</vu-swipeItem>
  <vu-swipeItem>3</vu-swipeItem>
  <vu-swipeItem>4</vu-swipeItem>
</vu-swipe>
```
可以通过 `endOffset` 参数控制触发方法的offset阈值

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - | - |
| duration | 动画时长，单位为 ms | `Number` | `500` | - |
| showIndicators | 是否显示指示器 | `Boolean` | `true` | - |
| initialSwipe | 初始位置，从 0 开始算 | `Number` | `0` | - |
| endFunction | 滑动到最后一个图片之后继续滑动触发方法 | `Function` | - | - |
| endOffset | 触发`endFunction`的阈值 | `Number` | `100` | - |

#### 事件

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |
