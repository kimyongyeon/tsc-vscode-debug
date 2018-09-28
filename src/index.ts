import { Parent } from "./parent"
import { Animal } from "./animal"

class Startup extends Parent {
  public test(): string {
    var nn = "nameByPhone => " + this.nameByPhone
    console.log(nn)
    return nn
  }

  public test2(): string {
    console.log("test2() called")
    return ""
  }
  public static main(): number {
    var su = new Startup()
    su.test()

    var p = new Parent()
    console.log(`nameByPhone -> ${p.nameByPhone}`)
    console.log(`memberByAge -> ${p.memberByAge}`)
    console.log(`memberByAddr -> ${p.memberByAddr}`)

    var a = new Animal()
    a.print()

    var name = "hello tsc"
    console.log("h1")
    console.log("h2")

    return 0
  }
}

Startup.main()
