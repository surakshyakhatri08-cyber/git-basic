
//callback function(function passed as a argument in another function)
console.log("Start");
const getUser = (callback) => {
    setTimeout(() => {
        console.log("User Fetched");
        // console.log({
        //     _id: 1,
        //     name: "Surakshya KHatri",
        //     email: "surakshyakhatri@12gmail.com",
        //     password: "12345678",
        // });
        callback({
            _id: 1,
            name: "Surakshya KHatri",
            email: "surakshyakhatri@12gmail.com",
            password: "12345678",
        });
    }, 3000);
};

const getPost = (userId, callback) =>  {
    setTimeout(() => {
        console.log("Post Fetched");
        // console.log();
        callback([
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
   }, 2000);
};

getComment = (postId, callback) => {
    setTimeout(() => {
        console.log("Comments Fetched");
        // console.log();
        callback([
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

    }, 1000);
};

getUser((user) => {
    console.log(user);
    getPost(user._id,(posts) => {
        console.log(posts);
        getComment(posts[0]._id, (comments) => {
            console.log(comments);
        });
    });
});

console.log("End");
