import { makeObservable } from 'mobx'
import { action, computed, observable, runInAction } from 'mobx'
// import { makeAutoObservable} from 'mobx'
// import { configure } from 'mobx'

// 配置
/* configure({
  // 可选值：observed，可观察状态必须通过action修改（默认）
  // 可选值：never，可观察状态可以在任何地方修改（不推荐）
  enforceActions: 'never',
}) */

export class Counter {
  constructor() {
    makeObservable(this)
    /* makeObservable(this, {
      count: observable,
      // bound可以绑定this，在App中可以直接调用而无需箭头函数
      increment: action.bound,
      decrement: action.bound,
      reset: action.bound,
      double: computed,
    }) */

    /* makeAutoObservable：加强版的makeObservable，默认推断所有属性
    所有属性都会成为 observable
    所有方法都会成为 action
    所有get都会成为 computed
    参数1：target，让哪个对象变成可观察
    参数2：overrides，排除不需要被观察的属性和方法
    参数3：autoBind，可以绑定this指向 */
    // makeAutoObservable(this, { demo: false }, { autoBind: true })
  }
  @observable public count = 0
  @action public increment() {
    this.count++
  }
  @action public decrement() {
    this.count--
  }
  // 异步处理：方法1
  @action public incrementAsync() {
    setTimeout(() => {
      // 可观察状态必须通过action修改，不能直接写this.count++
      this.increment()
    }, 2000)
  }
  // 异步处理：方法2
  @action public decrementAsync() {
    setTimeout(() => {
      // 使用runInAction 包裹 this.count--
      runInAction(() => {
        this.count--
      })
    }, 2000)
  }
  @action public reset() {
    this.count = 0
  }
  @action public demo() {
    console.log('只是用来测试，不参与运行')
  }
  // computed：计算属性，前面必须加get
  @computed public get double() {
    return this.count * 2
  }
}

// 监听属性：autorun，初始化时会执行一次，可监视所有属性
/* autorun(() => {
  console.log('counter上的count属性变化了：', counter.count)
  console.log('counter上的double属性变化了：', counter.double)
}) */

// 监听属性：reaction，初始化时不执行，可监视指定属性
// 参数1：data函数，返回值会作为第二个函数输入
// 参数2：回调函数
/* reaction(
  () => counter.count,
  (value, oldValue) => {
    console.log('count新值 vs 旧值：', value, oldValue)
  }
) */
