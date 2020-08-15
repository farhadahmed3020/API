const normalPerson = {
    firstName : 'Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName : function(){
    console.log(this.firstName, this.lastName);
    },
    chargeBill :function name(amount ,tips ,tax) {
        console.log(this);
        
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
const heroPerson ={
    firstName :"Hero",
    lastName : "Balam",
    salary : 15000
}
const friendlyPerson ={
    firstName :"Hero",
    lastName : "Galam",
    salary : 25000
}
// const heroPerson ={
//     firstName :"Hero",
//     lastName : "balam",
//     salary : 25000
// }


// normalPerson.chargeBill(3000);
//  console.log(normalPerson.salary);
//normalPerson.chargeBill();

//  const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//  heroChargeBill(12000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900 ,100,10);
// console.log(heroPerson.salary);
normalPerson.chargeBill.call(friendlyPerson ,5000,200,100)
    console.log(friendlyPerson.salary);
    normalPerson.chargeBill.apply(heroPerson,[4000,20,200]);
    console.log(heroPerson.salary);
    
    


