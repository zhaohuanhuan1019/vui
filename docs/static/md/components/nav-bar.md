----------
### NavBar 导航栏

#### 使用指南
``` javascript
import { NavBar } from 'vui';

Vue.use(NavBar);
```

#### 代码演示

##### 基础用法

```html
<vu-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
```

##### 高级用法
通过 slot 定制内容

```html
<vu-nav-bar title="标题" left-text="返回" left-arrow>
  <vu-icon name="search" slot="right" />
</vu-nav-bar>
```


#### API
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | `''` | - |
| left-text | 左侧文案 | `String` | `''` | - |
| right-text | 右侧文案 | `String` | `''` | - |
| left-arrow | 是否显示左侧箭头 | `Boolean` | `false` | - |
| left-arrow-size | 左侧箭头图标字体大小 | `String` | `14px, 14rem` | - |
| fixed | 是否固定在顶部 | `Boolean` | `false` | - |
| z-index | 元素 z-index | `Number` | `1` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

#### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |
