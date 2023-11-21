// Function to simulate updating the user's last activity time
const updateLastUserActivityTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedLastActivityTime = new Date().toISOString();
      resolve(updatedLastActivityTime);
    }, 1000);
  });
};

// Function to simulate creating a post
const createPost = (content, posts) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { content, timestamp: new Date().toISOString() };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
};

// Function to simulate deleting a post from an array
const deletePostFromArray = (posts) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      resolve(deletedPost);
    }, 1000);
  });
};

let posts = [];

Promise.all([
  createPost("This is a new Post", posts),
  updateLastUserActivityTime().then((updatedLastActivityTime) => {
    console.log("Last Activity Time:", updatedLastActivityTime);
    return createPost("Another post", posts);
  }),
])
  .then(([newPost, anotherPost]) => {
    console.log("Post created:", newPost);
    console.log("Post created:", anotherPost);

    return updateLastUserActivityTime();
  })
  .then((secondUpdatedLastActivityTime) => {
    console.log("Last Activity Time:", secondUpdatedLastActivityTime);

    return deletePostFromArray(posts);
  })
  .then((deletedPost) => {
    console.log("Post deleted:", deletedPost);

    console.log("Remaining Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
