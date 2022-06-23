# 组件的属性-props

1. 创建一个组件

> 文件的后缀名为tsx，因为我们用ts开发，jsx的后缀名改为tsx，后面我们会详细讲解tsx语法

​	在src目录下创建Lee.tsx文件,我们定义了Lee这个类，并且继承了Component。这里解释一下Component<属性 ,状态>。

```typescript
import React, {Component} from "react";
export default class Lee extends Component<any, any> {
    render() {
        return (
            <>
            </>
        )
    }
}
```

2. 创建一个接口，用于定义属性

> 接口的成员变量后面带有?的说明是可选属性，所谓可选就是说可有可无

```typescript

interface IProps {
    name: string
    age?: number
    auth?: boolean
}
```

3. 给组件添加属性

> PS 有疑惑的可以看一下我写的泛型那一节

```tsx
// src/Lee.tsx
// 导入依赖
import React, {Component} from "react";


interface IProps {
    name: string
    age?: number
    auth?: boolean
}

export default class Lee extends Component<IProps, any> {
    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
            </>
        )
    }
}

```

4. 使用组件

```tsx
import React, {Component} from 'react';
//引入我们自定义的组件
import Lee from './Lee';

class App extends Component<any, any> {
    render() {
        return (
            <>
                <Lee name='hanyun'/>
                <Lee name='hanyun' age={1}/>
            </>
        )
    }
}

export default App;

```

在使用组件的时候，可选参数是可以不用赋值的