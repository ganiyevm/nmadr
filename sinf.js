const person = {
    firstName:"wodi",
    lastName:"bodi",
    fullName: function(age, gender) {
      return this.firstName + " " + this.lastName + "," + age + "," + gender;
    }
  }
  
const person1 = {
  firstName:"Azizbek",
  lastName: "Diyorov"
}
  
console.log(person.fullName.call(person1,22, "male"))