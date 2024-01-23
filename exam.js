//[id , brand , model , type , pricePerDay, available]
let carBooking =[
        [1,`Toyota`, `Corolla` , `Sedan` ,50 ,10],
        [2,`Honda`, `Civic` , `Sedan` ,55 ,8],
        [3,`Ford`, `Mustang` , `Sports Car` ,80 ,5],
        [4,`Jeep`, `Wrangler` , `SUV` ,70 ,7],
        [5,`Nissan`, `Altima` , `Sedan` ,45 ,12]
];
//1.print all car brands
/* console.log(`car brands`);
carBooking.forEach(brand =>{
     console.log(brand[1]);
})
 */console.log(`.................................................................`);
//2. print total number of cars available

//3. print sedan car details
/* console.log(`sedan car details`);
console.log(carBooking.filter(detail = `sedan`));

 */console.log(`.................................................................`);

//4. print cars with price per day greater than 60
console.log(`cars with price greater than 60`);
carBooking.filter(price=>price[4]>60).forEach(price =>console.log(price)
);
console.log(`.................................................................`);
//5.print details of jeep wrangler
console.log(`jeep wrangler`);
console.log(carBooking.find(details=>details[1]==`Jeep`));
console.log(`.................................................................`);

//6. sort cars based on the descending order of price per day
console.log(`descending order of price`);
price = carBooking.sort((a,b) => b[4]-a[4])
console.log(price);
console.log(`.................................................................`);

//7. sort cars based on ascending order of available cars
console.log(`ascending order of availability`);
availability = carBooking.sort((a,b)=>a[5]-b[5])
console.log(availability);
console.log(`.................................................................`);

//8.find the most available car
console.log(`most available car`);
console.log(carBooking.reduce((avail1,avail2)=>avail1[5]<avail2[5]?avail1[1]:avail2[1]));
console.log(`.................................................................`);

//.9 calculate the revenue if all cars are rented for a day
console.log(`revenue from all cars`);
console.log(carBooking.map(total=>total[4]).reduce((rev1,rev2)=>rev1+rev2));
console.log(`.................................................................`);

//10. count the number of sedan cars
/* console.log(`count of sedan cars`);
console.log(carBooking.map(name = `sedan`));
 *///11. print all unique car brands
//12.find the total number of available cars of all types
//13.find the cars with least availability
console.log(`least available car`);
console.log(carBooking.reduce((least1,least2)=>least1[5]>least2[5]?least[1]:least2[1]));
//14. check if there is any car with a price per day exacty 55