### NoticeBar 通告栏

#### 使用指南
``` javascript
import { NoticeBar } from 'vui';

Vue.use(NoticeBar);
```

#### 代码演示

##### 基础用法

```html
<vu-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="https://img.yzcdn.cn/1.png"
/>
```

##### 禁用滚动
文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<vu-notice-bar :scrollable="false">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</vu-notice-bar>
```

##### 通告栏模式
默认模式为空，支持`closeable`和`link`。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<vu-notice-bar mode="closeable">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</vu-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<vu-notice-bar mode="link">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</vu-notice-bar>
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| mode | 通告栏模式 | String | `''` | `closeable` `link` |
| delay | 动画延迟时间，单位秒 | Number | `1` | - |
| speed | 滚动速率，单位px | Number | `50` | - |
| scrollable | 是否滚动 | Boolean | `true` | - |
| left-icon | 左侧图标图片链接 | String | - | - |
| color | 文本颜色 | String | `#f60` | - |
| background | 滚动条背景 | String | `#fff7cc` | - |

#### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击事件回调 | - |
