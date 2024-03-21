const posts = [
    { title: 'Post  One' },
    { title: 'Post  Two' },
    { title: 'Post  Three' },

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
            resolve(posts);
        }, 2000);
    })
}


function deletePost() {
    return new Promise((resolve, reject) => {
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



Promise.all(([createPost({ title: 'Post Four' }), updateLastUserActivityTime()]))
    .then(([post, updateuserActivity]) => {
        console.log('before creating post ', post, updateuserActivity);

        console.log('After creating post', posts)

        updateLastUserActivityTime().then((updateuserActivity) => {
            console.log('users last Activity', updateuserActivity.getTime());

          deletePost().then(() => {
            console.log('after deleting last post ' , posts);
          })

        })

    // { title: 'Post Four' }
    });