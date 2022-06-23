# react中的css

1.  引入外部的css

 创建home.css

```css
.title {
    border: 4px solid black;
}

#title {
    border: 4px solid black;
}
```

 引入css文件

```tsx
import React, {Component} from "react";
import '../home.css'

export default class Home extends Component<any, any> {

    render() {
        return (
            <>
                <div
                    id='title'
                    className='title'
                >
                    home page
                </div>
            </>
        )
    }
}

```

引入外部的css文件，可以采用类名  `className`  的方式使用css，也可以用`id`的方式使用css



1. 行内css样式

   > tsx中css的属性名采用小驼峰的命名方式

   ```tsx
   import React, {Component} from "react";
   
   export default class Home extends Component<any, any> {
   
       render() {
           return (
               <>
                   <div
                       style={{
                           backgroundColor: 'red'
                       }}
                   >
                       home page
                   </div>
               </>
           )
       }
   }
   
   ```

   

3. 计算css样式

> react中想要更新UI，需要改变state

定义state

```tsx
interface IState {
    width: number
}
```

state与css结合

```tsx

                <div
                    className={this.state.width > 550 ? 'title' : ''}
                    style={{
                        width: `${this.state.width}px`,
                        backgroundColor: 'red'
                    }}
                >
                    home page
                </div>
```

更新state

```tsx
    change = () => {
        this.setState((state, props) => ({
            width: state.width + 10
        }))
    }
```

最终结果

```tsx
import React, {Component} from "react";
import '../home.css'
import {Button} from "antd";

interface IState {
    width: number
}

export default class Home extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            width: 500
        }
    }

    change = () => {
        this.setState((state, props) => ({
            width: state.width + 10
        }))
    }

    render() {
        return (
            <>
                <div
                    className={this.state.width > 550 ? 'title' : ''}
                    style={{
                        width: `${this.state.width}px`,
                        backgroundColor: 'red'
                    }}
                >
                    home page
                </div>
                <Button type='primary' onClick={this.change}>change</Button>
            </>
        )
    }
}

```

我们更新了state，对应的css样式随之改变
