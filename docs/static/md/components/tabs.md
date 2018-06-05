----------


### Tabs 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
```

### 代码演示

#### 基础用法

默认情况下启用第一个 tab，可以通过`active`属性激活对应特定索引的 tab

```html
<vu-tabs :active="active">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

#### 横向滚动

默认情况下多于4个tab时，可以横向滚动tab。可以通过设置`swipe-threshold`这个阙值，多于这个阙值时，tab就会支持横向滚动。

```html
<vu-tabs>
  <vu-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

#### 禁用标签

在对应的`vu-tab`上设置`disabled`属性即可。如果需要监听禁用事件，可以在`vu-tabs`上监听`disabled`事件。

```html
<vu-tabs @disabled="onClickDisabled">
  <vu-tab v-for="index in 4" :title="'选项 ' + index" :disabled="index === 2">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled() {
      Toast('Disabled!')
    }
  }
};
```

#### 样式风格

`Tabs`目前有两种样式：`line`和`card`，默认为`line`样式，也就上面基础用法中的样式，你可以在`vu-tabs`上设置`type`为`card`改为card样式。

```html
<vu-tabs type="card">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

#### 点击事件

可以在`vu-tabs`上绑定一个`click`事件，事件处理函数有一个参数，参数为对应`tab`在`tabs`中的索引。

```html
<vu-tabs @click="handleTabClick">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      Toast(index);
    }
  }
};
```

#### 粘性布局
通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<vu-tabs :active="active" sticky>
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| type | Tab 样式类型 | `String` | `line` | `card` |
| active | 默认激活的 tab | `String` `Number` | `0` | - |
| duration | 切换 tab 的动画时间 | `Number` | `0.2` | - |
| swipe-threshold | 滚动阀值，设置 Tab 超过多少个可滚动 | `Number` | `4` | - |
| sticky | 是否使用粘性定位布局 | `Boolean` | `false` | - |
| color | 设置active下的文字和下划线颜色 | `String` | - | - |
| height | 设置tab的高度，需要自带参数 | `String` | - | - |

### Tab API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | `String``html String` | - | - |
| disabled | 是否禁用这个tab | `Boolean` | `false` | - |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 某个tab点击事件 | index：点击的`tab`的索引 |
| disabled | 某个tab禁用时点击事件 | index：点击的`tab`的索引 |


