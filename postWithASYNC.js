const posts = [
    { title: 'Post One' },
    { title: 'Post Two' },
    { title: 'Post Three' }
];

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = new Date();
            resolve(time);
        })
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = posts.push(post);
            resolve(data);
        })
    })
}

function deletePost() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deleteEle = posts.pop();
                resolve(deleteEle);
            }
            else {
                reject('Error');
            }
        })
    })
}



async function asyncFunction() {
    
    const [post, updateuserActivity] = await Promise.all(([createPost({ title: 'Post Four' }), updateLastUserActivityTime()]))
    console.log('before create post Time - ', updateuserActivity);
    console.log('user last post ', post);



    console.log('User All posts ', posts);

    const deleteEle = await deletePost();

    console.log('After deleting post' , posts);

    const UpdateTime = await updateLastUserActivityTime();

    console.log('User Last Activity' , UpdateTime.getTime());

} 



asyncFunction();