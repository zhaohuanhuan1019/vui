/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Cell from '../packages/cell/index.js';
import CellGroup from '../packages/cell-group/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Dialog from '../packages/dialog/index.js';
import Field from '../packages/field/index.js';
import IconButton from '../packages/icon-button/index.js';
import ImagePreview from '../packages/image-preview/index.js';
import Lazyload from '../packages/lazyload/index.js';
import List from '../packages/list/index.js';
import Loading from '../packages/loading/index.js';
import Loadmore from '../packages/loadmore/index.js';
import NavBar from '../packages/nav-bar/index.js';
import Popup from '../packages/popup/index.js';
import Progress from '../packages/progress/index.js';
import Swipe from '../packages/swipe/index.js';
import SwipeItem from '../packages/swipe-item/index.js';
import Switch from '../packages/switch/index.js';
import Tab from '../packages/tab/index.js';
import Tabs from '../packages/tabs/index.js';
import Toast from '../packages/toast/index.js';
import Col from '../packages/col/index.js';
import Row from '../packages/row/index.js';
import Badge from '../packages/badge/index.js';
import BadgeGroup from '../packages/badge-group/index.js';
import NoticeBar from '../packages/notice-bar/index.js';
import Pagination from '../packages/pagination/index.js';
import Search from '../packages/search/index.js';
import Stepper from '../packages/stepper/index.js';
import Range from '../packages/range/index.js';
import InfiniteScroll from '../packages/infinite-scroll/index.js';
const components = [
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Field,
  IconButton,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  Loadmore,
  NavBar,
  Popup,
  Progress,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabs,
  Toast,
  Col,
  Row,
  Badge,
  BadgeGroup,
  NoticeBar,
  Pagination,
  Search,
  Stepper,
  Range,
  InfiniteScroll
];

const install = (Vue, opts = {}) => {
  components.map(component => {
    if (component.name === 'VuLazyload') {
      Vue.use(component, {lazyComponent: true});
    } else if (component.name && typeof component !== 'function') {
      Vue.use(component);
    }
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const vui = {
  version: '1.0.0',
  install,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Field,
  IconButton,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  Loadmore,
  NavBar,
  Popup,
  Progress,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabs,
  Toast,
  Col,
  Row,
  Badge,
  BadgeGroup,
  NoticeBar,
  Pagination,
  Search,
  Stepper,
  Range,
  InfiniteScroll
};

export default vui;