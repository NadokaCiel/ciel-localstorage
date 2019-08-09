# ciel-localstorage
----------------------------
author: cielzhang | Email:727325409@qq.com <br>

> 用于简化浏览器LocalStorage的操作

## Installation
Inside your project folder do:

```shell
npm install --save ciel-localstorage
```

## Import

import `get`：<br>

通过解构的方式，仅仅引入`get`单个方法

```javascript
import { get } from 'ciel-localstorage';
```

or import all：

```javascript
import localData from 'ciel-localstorage';
```

## API

- set()
- get()
- remove()

### `set(key, value, expireTime)`
向LocalStorage存储数据，支持Object类型。<br>
expireTime是有效时间，以秒为单位。<br>

### `get(key)`
获取LocalStorage存储数据，若不存在或已过期则返回空字符串。<br>
手动调用该方法将导致过期数据直接被删除。<br>

### `remove(key)`
删除LocalStorage存储的数据。<br>

<br>