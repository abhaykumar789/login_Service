//   class employee{
//     eid=1001;
//     ename='RAJU';
//     esalary=500000;

//     employee(eid,ename,esalary){
//         this.eid=eid;
//         this.ename=ename;
//         this.esalary=esalary
//     }
//   }

//   function employee() {
//     function employee(eid:1000,ename:'rohan',esalary:500000) {
//       return eid+ename+esalary;
//     }
//     return employee();
//   }
//   employee();

// function employee(eid,ename,esalary){
//     console.log(eid);


// }

export class Employee {
    // eid:number=0;
    // ename:string="raj";
    // esalary:number=100000;

//properties
    eid:number;
    ename:string;
    esalary:number;


    //constructor
    constructor(eid:number,ename:string,esalary:number) {
        this.eid = eid;
        this.ename = ename;
        this.esalary = esalary;

    }
//method
    // display():void{
    //     console.log('Inside the dispaly function')
    // }
}
