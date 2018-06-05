----------
### Cell 单元格

#### 使用指南
``` javascript
import { Cell, CellGroup } from 'vui';

Vue.use(Cell);
Vue.use(CellGroup);
```

#### 代码演示

###### 基础用法

将`vu-cell-group`组件看成一个容器即可

```html
<vu-cell-group>
  <vu-cell title="单元格" value="内容" />
  <vu-cell title="单元格" value="内容" label="描述信息" />
</vu-cell-group>
```

###### 只设置value
只设置`value`时会向左对齐

```html
<vu-cell-group>
  <vu-cell value="内容" />
</vu-cell-group>
```

###### 展示图标
通过`icon`属性在标题左侧展示图标

```html
<vu-cell-group>
  <vu-cell title="单元格" icon="location" />
</vu-cell-group>
```


###### 展示箭头
传入`is-link`属性则会在右侧显示箭头

```html
<vu-cell-group>
  <vu-cell title="单元格" is-link />
  <vu-cell title="单元格" is-link value="内容" />
</vu-cell-group>
```

###### 高级用法
如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<vu-cell-group>
  <vu-cell value="内容" icon="shop" is-link>
    <template slot="title">
      <span class="vu-cell-text">单元格</span>
      <vu-tag type="danger">标签</vu-tag>
    </template>
  </vu-cell>
  <VuCell>
    <template slot="title">
      <span class="van-cell-text">{{ '标题' }}</span>
      <span class="van-cell-text">{{ '时间' }}</span>
    </template>
    <template slot="content">
      <span class="van-cell-text">{{ '内容:' }}</span><span class="van-cell-text" style="color: #FA1E8C;">{{ '国美币' }}</span>
    </template>
  </VuCell>

  <vu-cell title="单元格" icon="location" is-link />
  <vu-cell title="单元格">
    <vu-icon slot="right-icon" name="search" class="vu-cell__right-icon" />
  </vu-cell>
</vu-cell-group>
```

#### CellGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| border | 是否显示外边框 | `Boolean` | `true` | - |

#### Cell API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `String` | - | - |
| title | 左侧标题 | `String` | - | - |
| value | 右侧内容 | `String` | - | - |
| label | 标题下方的描述信息 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` | - |
| required | 是否显示表单必填符号 | `Boolean` | `false` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| content | 自定义`content` |
| right-icon | 自定义右侧按钮，默认是`arrow` |
