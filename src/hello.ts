import * as ani from "./animal";
class Parent {
  public nameByPhone: string = "parent hello"
}
class Startup extends Parent {
  public test(): string {
    var nn = "phone ===> " + this.nameByPhone
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
  
    var a = new ani.Animal();
    a.print();

    var name = "hello tsc"
    console.log("h1")
    console.log("h2")

    return 0
  }
}

Startup.main()
