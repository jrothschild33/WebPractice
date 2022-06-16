/* interface Lengthwise {
  length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  arg.length
  return arg
}

loggingIdentity(['hello', 'world']) */