function Tester(name){
  this.name = name;
  this.type = "tester";
}

function Developer(name){
  this.name = name;
  this.type = "developer";
}

function EmployeeFactory(){
  this.create = (name, type)=>{
    switch(type){
      case "tester":
        return new Tester(name);
      case "developer":
        return new Developer(name);
    }
  }
}

function employeeToString(employee){
  return employee.type + "," + employee.name;
}

const factory = new EmployeeFactory();
const employeeList = [];

employeeList.push(factory.create("a", "tester"));
employeeList.push(factory.create("b", "tester"));
employeeList.push(factory.create("c", "developer"));
employeeList.push(factory.create("d", "developer"));

employeeList.forEach((employee)=>{
  console.log(employeeToString(employee));
});