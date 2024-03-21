
// const posts = [
//     { title: 'Post  One' },
//     { title: 'Post  Two' },
//     { title: 'Post  Three' },

// ];

// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const time = new Date();
//             resolve(time);
//         })
//     })
// }


// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = posts.push(post);
//             resolve(posts);
//         }, 2000);
//     })
// }

// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 const deleteEle = posts.pop();
//                 resolve(deleteEle);
//             }
//             else {
//                 reject('Error');
//             }
//         })
//     })
// }



// Promise.all(([createPost({ title: 'Post Four' }), updateLastUserActivityTime()]))
//     .then(([post, updateuserActivity]) => {
//         console.log('before creating post ', post, updateuserActivity);

//         console.log('After creating post', posts)

//         updateLastUserActivityTime().then((updateuserActivity) => {
//             console.log('users last Activity', updateuserActivity.getTime());

//             deletePost().then(() => {
//                 console.log('after deleting last post ', posts);
//             })

//         })

//     });




function resolveAfterDelay(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved');
        }, delay);
    });
}

async function asyncFunction() {
    console.log('Start');

    try {
        const result1 = await resolveAfterDelay(4000);
        console.log('this 1',result1);

        const result2 = await resolveAfterDelay(2000);
   
        console.log('this 2',result2);

        const result3 = await resolveAfterDelay(6000);
        console.log('this 3',result3);

        const result4 = await resolveAfterDelay(2000);
   
        console.log('this 4',result4);
    } catch (error) {
        console.error('Error:', error);
    }

    console.log('End');
}

asyncFunction();


