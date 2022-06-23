组件的状态-state



在react中更新一个组件的办法就是更新state，state更新之后组件重新渲染



1. 创建一个组件

   ```tsx
   import React, {Component} from "react";
   
   export default class State extends Component<any, any> {
   
       render() {
           return (
               <>
               </>
           )
       }
   }
   
   ```

   

2. 创建一个接口，用来定义state

```typescript

interface IState {
    counter: number
}
```



3. 给组件添加状态

   ```tsx
   import React, {Component} from "react";
   
   interface IState {
       counter: number
   }
   
   export default class State extends Component<any, IState> {
   
       render() {
           return (
               <>
               </>
           )
       }
   }
   
   ```

   

4. 初始化state

> 官方文档的建议是在构造函数里面初始化状态，并且明文规定，this.state赋值只能在这里初始化一次

```tsx
import React, {Component} from "react";

interface IState {
    counter: number
}

export default class State extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        // 只能在这里  给state赋值
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <>
                {this.state.counter}
            </>
        )
    }
}

```

5. 更新state

```tsx
import React, {Component} from "react";

interface IState {
    counter: number
}

export default class State extends Component<any, IState> {
 
    constructor(props: any, context: any) {
        super(props, context);
        // 只能在这里  给state赋值
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        // 这样写是错的
        // state 的更新是异步的
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 100)

    }

    render() {
        return (
            <>
                {this.state.counter}
            </>
        )
    }
}

```

官方文档明确指出，state的更是异步的，我们上面写，虽然是可以执行，也不出问题，会得到我们想要的结果，但是在并发修改state的时候就会出问题。因为state的更新会把多个更改合并为一个操作。

6. 错误示例

```tsx
import React, {Component} from "react";

interface IState {
    counter: number
}

export default class State extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        // 只能在这里  给state赋值
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        // state 的更新是异步的
        // state的改变会合并
        // 错误写法
        for (let i = 0; i < 100; i++) {
            this.setState({
                counter: this.state.counter + 1
            })
        }

    }

    render() {
        return (
            <>
                {this.state.counter}
            </>
        )
    }
}

```



大家猜一下这个的显示结果，不用猜了，结果是：“1”。为什么呢？因为state的更新是异步的，react把多个更新合并为一个操作。

7. 正确更新state

> state的更新是异步的，官方给的方式是传入一个函数，返回一个新的state

```tsx
import React, {Component} from "react";

interface IState {
    counter: number
}

export default class State extends Component<any, IState> {
    constructor(props: any, context: any) {
        super(props, context);
        // 只能在这里  给state赋值
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        //state 的更新是异步的  这样写是正确的
        for (let i = 0; i < 100; i++) {
            this.setState((state, props) => ({
                counter: state.counter + 1
            }))
        }
    }

    render() {
        return (
            <>
                {this.state.counter}
            </>
        )
    }
}

```



