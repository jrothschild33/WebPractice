react+ts企业级中台系统实战

2020年6月份来到武汉就职于一家小公司，公司原来的系统采用原来的mvc模式。前端用的layui框架，后台用的laravel框架。刚进入公司没多久，
公司决定重写用户后台和管理后台。前台那哥们采用vue技术栈，我还是用laravel。刚开始写就一脚踩在了坑里。由于采用前后端分离的方式开发，
我写接口用postman做接口测试，用法md写接口文档，我们忽略了一点，浏览器为了网络的安全，默认是禁止js跨域请求；我们的认证方式采用了jwt，
结果再次掉在坑里，header里面加的参数接收不到；前端那哥们，由于刚入前端的坑不到两三年，做事情的时候总是纠结于代码，很少关注业务逻辑。
而前后端分离的开发方式将很大一份的业务逻辑转移到前端处理，再加上他第一次用vue，语法都不熟练，造成矛盾激化，打了不少嘴炮。总之一句话，一言难尽。

啰嗦了这么多，是时候展示真正的技术了。下面给大家介绍一下本小册的主要内容。

1. 介绍ts入门基础知识。这部分的知识，虽然很基础，但是很重要。后面我们用到的redux和react-dom-router也是采用ts的语法进行编程，学好这部分才可以更加游刃有余的处理后面的问题
2. 抽离react组件。react的哲学是组合，像堆积木一样拼接业务逻辑。我会带领大家，抽离公共模块，精简业务逻辑，提升自身的工作效率
3. 掌握RBAC权限管理。公司的后台管理系统会有各种限制，比如：同样的一个页面，有的人进来可以看到按钮，有的人进来看不到按钮；有的人能看到某些数据，有些人又看不到，
   这个时候我们怎么处理呢？这个时候你就需要详细的设置RBAC权限了。我会带领大家快速了解RBAC，最后抽离组件来管理权限。

展示一下最终效果

![pic](https://gitee.com/hanyun_admin/picgo/raw/master/img/chrome-capture1.jpg)
![pic](https://gitee.com/hanyun_admin/picgo/raw/master/img/chrome-capture2.jpg)
![pic](https://gitee.com/hanyun_admin/picgo/raw/master/img/chrome-capture3.jpg)
![pic](https://gitee.com/hanyun_admin/picgo/raw/master/img/chrome-capture4.jpg)
![pic](https://gitee.com/hanyun_admin/picgo/raw/master/img/chrome-capture5.jpg)

1. TS姿势入门
    1. [基础数据类型](./md/1/基础数据类型.md)
    3. [接口](./md/1/接口.md)
    4. [类](./md/1/类.md)
    5. [泛型](./md/1/泛型.md)
2. 用TS的姿势了解react
    1. [初始化react项目](./md/2/项目初始化.md)
    2. [组件](./md/2/组件.md)
    3. [组件的属性-props](./md/2/组件的属性-props.md)
    4. [组件的状态-state](./md/2/组件的状态-state.md)
    5. [tsx语法](./md/2/tsx语法.md)
    6. [react中的css](./md/2/react中的css.md)
    7. [事件绑定](./md/2/事件绑定.md)
    8. [组件状态提升](./md/2/组件状态提升.md)
    9. [生命周期](./md/2/生命周期.md)
    11. [高阶组件](./md/2/高阶组件.md)
3. 用TS的姿势打开redux的大门
    1. [redux介绍](./md/3/redux介绍.md)
    2. [redux的基本原则](./md/3/redux基本原则.md)
    3. redux的核心概念
        1. [redux核心概念-state](./md/3/redux核心概念-state.md)
        2. [redux核心概念-action](./md/3/redux核心概念-action.md)
        3. [redux核心概念-reducer](./md/3/redux核心概念-reducer.md)
        4. [redux核心概念-store](./md/3/redux核心概念-store.md)
    4. [在react中优雅的使用redux](./md/3/在react中优雅的使用redux.md)

4. react-router-dom入门
    1. [初识react-router-dom](./md/4/初识react-router-dom.md)
    2. [路由模式](./md/4/路由模式.md)
    3. [路由匹配规则](./md/4/路由匹配规则.md)
    4. [路由嵌套](./md/4/路由嵌套.md)
    4. [高阶组件](./md/4/高阶组件.md)
    5. [路由参数获取](./md/4/路由参数获取.md)
    6. [综合案例](./md/4/综合案例.md)

5. RBAC权限管理
    1. [RBAC介绍](./md/5/rbac介绍.md)
    2. [权限设计](md/5/权限设计.md)

6. 核心实现
    1. [整体布局介绍](./md/6/整体布局介绍.md)
    3. [redux存储权限](./md/6/redux存储权限.md)
    2. 自定义组件
        1. [顶部布局](./md/6/顶部布局.md)
        2. [面包屑导航](./md/6/面包屑导航.md)
        3. [左侧菜单](./md/6/左侧菜单.md)
        4. [定义公共布局](./md/6/定义公共布局.md)
        5. [页面渲染](./md/6/页面渲染.md)
        6. [页面内部权限判断](./md/6/页面内部权限判断.md)
        7. [角色管理](./md/6/角色管理.md)
            1. [角色列表](./md/6/角色列表.md)
            2. [添加角色](./md/6/添加角色.md)
            3. [编辑角色](./md/6/编辑角色.md)
            4. [删除角色](./md/6/删除角色.md)
7. [最后](./md/最后.md)
