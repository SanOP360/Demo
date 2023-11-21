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
const createPost = async (content, posts) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { content, timestamp: new Date().toISOString() };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
};

// Function to simulate deleting a post from an array
const deletePostFromArray = async (posts) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      resolve(deletedPost);
    }, 1000);
  });
};

const main = async () => {
  let posts = [];

  try {
    const newPost = await createPost("This is a new Post", posts);
    const updatedLastActivityTime = await updateLastUserActivityTime();
    console.log("Last Activity Time:", updatedLastActivityTime);

    const anotherPost = await createPost("Another post", posts);
    console.log("Post created:", newPost);
    console.log("Post created:", anotherPost);

    const secondUpdatedLastActivityTime = await updateLastUserActivityTime();
    console.log("Last Activity Time:", secondUpdatedLastActivityTime);

    const deletedPost = await deletePostFromArray(posts);
    console.log("Post deleted:", deletedPost);

    console.log("Remaining Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
};

main();
