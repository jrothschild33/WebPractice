/* class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep
  }

  isDirectory(): this is Directory {
    return this instanceof Directory
  }

  isNetworked(): this is Networked & this {
    return this.networked
  }

  constructor (public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super (path, false)
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[]
  constructor() {
    super('', false)
    this.children = []
  }
}

interface Networked {
  host: string
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo')
if (fso.isFile()) {
  // const fso: FileRep
  fso.content
} else if (fso.isDirectory()) {
  // const fso: Directory
  fso.children
} else if (fso.isNetworked()) {
  // const fso: Networked & FileSystemObject
  fso.host
} */


/* class Box <T> {
  value?: T

  hasValue(): this is { value: T } {
    return this.value !== undefined
  }
}

const box = new Box()
box.value ='hello'

if (box.hasValue()) {
  console.log(box.value)
} */