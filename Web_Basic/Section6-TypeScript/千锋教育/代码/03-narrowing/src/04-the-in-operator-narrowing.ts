/* type Fish = { swim: () => void }
type Bird = { fly: () => void }
type Human = { swim?: () => void; fly?: () => void }

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    // animal: Fish | Human
    return (animal as Fish).swim()
  }

  // animal: Bird | Human
  return (animal as Bird).fly()
} */