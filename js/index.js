function findTheOldest (people){
    let result = [];
    let max=0 ;

    for(let i = 0; i < people.length; i ++){
        if (people[i].age > max){
            //The Code To be Excuted
            result =[];
            max = people[i].age;
            result.push(people[i]); 
            
            
        }
        
    }
   return result;
}

const exampleData = [
    {name: 'stiv', age:11, city: 'kiev'}, 
    {name: 'andrew', age:19, city: 'kiev'},
    {name: 'Kate', age:16, city:  'kiev'},
    {name: 'Jane', age:24, city: 'kiev'},
   
  
];

console.log(findTheOldest(exampleData));