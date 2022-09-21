// const person = {
//     firstName:'Deepika',
//     lastName :'khedkar',
//     age: 29,
//     hobbies:['music','movie','sports'],
//     address:{
//         street:  'chira devi mandir',
//         city:'mumbai',
//         state:'ma'
//     }

// }
// console.log(person.hobbies[1]);
// console.log(person.address.state);

//Destructuring the object

// const {age,address:{state}}=person;
// console.log(age);
// console.log(state);
//************************************************* */


const todos=[

    {
        id:1,
        text:'Deepika',
        isCompleted:true
    },
    {
        id:2,
        text:'Shailesh',
        isCompleted:true
    },

    {
        id:3,
        text:'Krushiv',
        isCompleted:false

    },
];

//for loop

// for(let i=0; i<=10; i++){
//     console.log(`For loop number: ${i}`);
// }
// //while loop

let i=0;
while(i<10){
    console.log(`while loop number: ${i}`);
i++;
}