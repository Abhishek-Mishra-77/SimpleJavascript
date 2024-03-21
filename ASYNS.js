console.log('Person 1: shows ticket');
console.log('person2 : shows ticket');


// const preMovies = async () => {

//     const promiseWifeBringstickets = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('ticket')
//         }, 3000);
//     })

//     const getPopcorn = new Promise((resolve, reject) => {
//         resolve('popcorn');
//     })

//     const getCandy = new Promise((resolve, reject) => {
//         resolve('candy');
//     })

//     const getCoke = new Promise((resolve, reject) => {
//         resolve('coke');
//     })

//     let ticket = await promiseWifeBringstickets;

//     let [popCorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
//     console.log(`${popCorn} , ${candy} , ${coke}`);

//     return ticket

// }




const preMovies = async () => {

    const promiseWifeBringstickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => {
        resolve('popCorn');
    })

    const addbutter = new Promise((resolve, reject) => {
        resolve('butter');
    })

    const getColdDrinks = new Promise((resolve , reject) =>{
        resolve('ColdDrink');
    })

    let ticket = await promiseWifeBringstickets;

    console.log(`wife : i have the ${ticket}`);
    console.log('husband : we should go in ');
    console.log('wife : no i am hungry');


    let popCorn = await getPopcorn;

    console.log(`husband : i got some ${popCorn}`);
    console.log('husband : we should go in ');
    console.log('wife : I need butter on my popcorn');

    let butter = await addbutter;

    console.log(`husband : i got some ${butter}`);
    console.log('husband : Anything else darling?');
    console.log('wife : lets got we getting late ');
    console.log('husband : thank you for reminder *grins*');


    let coldDring  = await getColdDrinks;

    console.log(`wife : Oh i want to ${coldDring}`);
    console.log('husband : ok i bring coldDring');

    return ticket;

}

preMovies().then((m) => {
    console.log(`person3 : shows ${m}`);
})


console.log('person4 : shows ticket');
console.log('person5 : shows ticket');