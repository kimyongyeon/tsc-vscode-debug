export class Animal {
    name: string = "";
    constructor() {
        this.name = "tiger";
    }
    public print(): void {
        console.log(`name => ${this.name}`);
    }
}