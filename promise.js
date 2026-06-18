//Promise
// state of promise
// 1. pending
// 2. fulfield
// 3. rejected

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({message: "Success"});
//         reject({message: "Error"});
//     }, 3000);
// });
console.log("Start");
// console.log(promiseFunc);

//handling promise
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Finally");
// });
// console.log("End");




const promiseFunc = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({message: "Success"});
        // reject({message: "Error"});
    }, 3000);
});
}

// promiseFunc().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Finally");
// });
// console.log("End");


const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if(error) {
                reject({message: "User fetch failed"});
            } else {
                resolve({
            _id: 1,
            name: "Surakshya KHatri",
            email: "surakshyakhatri@12gmail.com",
            password: "12345678",
        });
            }
        }, 3000);
    });
}

const getPost = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if(error) {
                reject({message: "Post fetct Failed"});
            } else {
                resolve([
            {
            userId: userId,
            _id: 1,
            title: "post 1",
            },

            {
            userId: userId,
            _id: 2,
            title: "post 1",
            },

            {
            userId: userId,
            _id: 3,
            title: "post 2",
            },

            {
            userId: userId,
            _id: 4,
            title: "post 3",
            }
        ]);
            }
        }, 2000);
    });
}

const getComment = (postId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if(error) {
                reject({message: "Comment fetch failed"});
            } else {
                resolve ([
            {
            _id: 1,
            postId: postId,
            text: "comment 1",
            },

            {
            _id: 2,
            postId: postId,
            text: "comment 2",
            },

            {
            _id: 3,
            postId: postId,
            text: "comment 3",
            },
        ]);
            }
        }, 1000);
    })
}



//promise chaining
// getUser().then((user) => {
//     console.log(user);

//     return getPost(user._id);
// })
// .then((posts) => {
//     console.log(posts);
//     return getComment(posts[0]._id);
// })
// .then((comments) => {
//     console.log(comments);
// })
// .catch((error) => {
//     console.log(error);
// });

// console.log("End");


// const fetchData = async() => {
//     try {
//     const user = await getUser();
//     console.log(user);
//     const post = await getPost(user._id);
//     console.log(post);
//     const comment = await getComment(post[0]._id);
//     console.log(comment);
//     } catch(error) {
//         console.log(error);
//     } finally {
//         console.log("Finally");
//     }
// }
// fetchData();




//fetch
// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//     return response.json();
// }).then((todo) => {
//     console.log(todo);
// }).catch((error) => {
//     console.log(error);
// });

console.log("End");

// const fetchData = async() => {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         // console.log(data);
//         const todo = await data.json();
//         console.log(todo);

//     } catch(error) {
//         console.log(error);
//     }
// }
// fetchData();


const fetchData = async() => {
    try {
        //fetch posts
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post = await posts.json();
        console.log(post);
        //fetch comments
        const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post[3].id}`);
        const comment = await comments.json();
        console.log(comment);

    } catch(error) {
        console.log(error);
    }
}
fetchData();
