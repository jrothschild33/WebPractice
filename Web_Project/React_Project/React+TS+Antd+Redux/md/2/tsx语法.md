# tsx语法

> 用ts的语法写react，文件的后缀名为tsx，所以我称他为“tsx”

JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能（引用react网站的）。

## tsx表达式（示例）

> 我习惯class，因为class有完整的作用域

```tsx
import React, {Component} from "react";

export default class Tsx extends Component<any, any> {
    age = 31

    render() {
        return (
            <>
                {this.age}
            </>
        );
    }
}

```

## tsx表达式-map

> map一般用于循环输出。但是map返回的数据，每条要有一个唯一的key，key 只是在兄弟节点之间必须唯一

```tsx
import React, {Component} from "react";

export default class Tsx extends Component<any, any> {
	numberList = [1, 2, 3, 4]	

    render() {
        return (
            <>
                <ul>
                    {
                        this.numberList.map((num, index) => (<li key={index}>{num}</li>))
                    }

                </ul>
            
                <hr/>
                <ul>
                    {
                        this.numberList.map((num, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <li className={'blue'} key={index}>{num}</li>
                                )
                            }
                            return (
                                <li className={'red'} key={index}>{num}</li>
                            )
                        })
                    }
                </ul>
		     <hr/>

                <ul>
                    {
                        this.numberList.map((num, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <li key={index}>{num}</li>
                                )
                            }
                            return null
                        })
                    }

                </ul>    
            		     <hr/>

                <ul>
                    {
                        this.numberList.filter(n => n > 1).map((num, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <li className={'blue'} key={index}>{num}</li>
                                )
                            }
                            return (
                                <li className={'red'} key={index}>{num}</li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}


```



上面的例子中，我给出了map常用的四种情况，给大家作为参考，第一种，是简单的循环输出；第二种，隔行换色；第三种，只输出偶数行；第四种，结合filter过滤数据



## 三目运算符



```tsx
import React, {Component} from "react";

export default class Tsx extends Component<any, any> {
    auth = true

    render() {
        return (
            <>
     			{
                    this.auth ?
                        <span>auth</span>
                        :
                        null
                }
            </>
        );
    }
}


```

显示：auth



## 与运算



```tsx
import React, {Component} from "react";

export default class Tsx extends Component<any, any> {
    auth = true
    age = 31

    render() {
        return (
            <>
     			{
                    this.auth && this.age > 30 ?
                        <span>auth</span>
                        :
                        null
                }
            </>
        );
    }
}



```

显示：auth