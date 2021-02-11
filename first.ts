let age:number =50;
let club:string='Barselona';
let isFamous:boolean=false;

function add(num1:number,num2:number){
      return num1+num2;
}

add(3,74);

console.log(club);

function fullName(firstName:string,lastName:string):string{
      return firstName+ ' '+ lastName;
}

const user:string=fullName('Martin','Rock');


function doubleItAndConsole(num:number):void{
    const result=num*2;
    console.log(result);
    
}
doubleItAndConsole(10);


const myArrow =(x:number,y:number):number=>x*y;
console.log(myArrow(12,12));

let multiply2:(x:number,y:number)=>number;
multiply2=(x,y)=>x*y;
console.log(multiply2(10,10));



const numbers:number[]=[2,12,3,4,5,77];
for (let i = 0; i < numbers.length; i++) {
    const element:number = numbers[i];
}

const friends:string[]=['Hamidul','Shammi','Tafheem Islam','Rubel'];
let bigName:string='';
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if(friend.length>bigName.length){
        bigName=friend
    }
    
}
console.log('Friend with largest name :',bigName);


//Object
let friendStructure:{    //type declaration
   name:string,
   age:number         
}={
    name:'Hamidul',    //assaign value
    age:42,
}



//Interface  

interface Player{
    name:string,
    club:string,
    salary:number,
    wife?:string, //optional
    isPlaying:boolean
}

const messy:Player={
    name:'Messy',
    club:'Barcelon',
    salary:4500000,
    wife:'Some One',
    isPlaying:true
}

const ronaldo:Player={
    name:'Ronaldo',
    club:'Leverpool',
    salary:450000,   
    isPlaying:true
}

//Class

class Person{
    name:string;
    private _partner:string;   //private
    constructor(name:string){
        this.name=name;
        this._partner=name;
    }
    getName():string{
        return this.name;
    }
}

const sam = new Person('Samuel');
console.log(sam.getName())