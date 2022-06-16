/* class Foo {
  static #count = 0

  get count() {
    return Foo.#count
  }

  static {
    try {
      const lastInstance = {
        length: 100
      }
      Foo.#count += lastInstance.length
    }
    catch {}
  }
}

Foo.#count */