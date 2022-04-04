
jsonData =[
    {
        id:2431,
        firstname:"maira",
        lastname:"yaseen",
        salary:150000

    },
    {
        id:1234,
        firstname:"maria",
        lastname:"yaseen",
        salary:170000

    },
    {
        id:2469,
        firstname:"mahnoor",
        lastname:"yaseen",
        salary:150000
    }
]
temp="  ";
class Employee{
    constructor(id,firstname,lastname,salary)
    {
        this.id=id
        this.firstname=firstname
        this.lastname=lastname
        this.salary=salary
    }
             
    getid(){
        temp=filter.Data(element=>{if (element.firstname==this.firstname) {return element;
        }
    });
    

    if (temp.length >0)
        {
        console.log(temp[0].id);            
        }
        else{console.log("NotFound");}
    }
            
    getfirstname(){
        temp=filter.Data(element=>{if (element.id==this.id) {return element;
         }
        });
         
        if(temp.length >0)
         {
        console.log(temp[0].firstname);
         }
        else{console.log("Notfound");
    }
    getlastname(){
        temp=filter.Data(element=>{
            if (element.salary==this.salary) {
            return element;
        }
    
    });
    if(temp.length >0)
    {
        console.log(temp[0].lastname);
    }
   else{
       console.log("NotFound");
    }
}

        
    
     getsalary(){
        temp=filter.Data(element=>{if (element.id==this.id) {return element;
        }
       });
        if(temp.length >0)
        {
            console.log(temp[0].salary);
        }
         else{console.log("notfound")
        }
    }
}
Employee=new Employee()
