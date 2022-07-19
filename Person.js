class Person{
    constructor(name,age,address,email,number){
       this.name=name
       this.address=address
       this.email=email
       this.number=number
       this.age=age

    }
    getAlldetail(){
        let per=`
        name: ${this.name}
        email: ${this.email}
        number: ${this.number}
        age: ${this.age}
        address: ${this.address}
        
        `
        return per
    }
}

const newPerson = new Person("xyz", 23, "Karnataka", "xyx@gmail.com",00000000);

console.log(newPerson.getAlldetail());

// output:
// name: xyz
// email: xyx@gmail.com
// number: 0
// age: 23
// address: Karnataka