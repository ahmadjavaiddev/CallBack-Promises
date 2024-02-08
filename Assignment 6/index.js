async function fetchUserDataAndPosts(userId) {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const userDataResponse = await fetch(userUrl);
  const userData = await userDataResponse.json();

  const postsResponse = await fetch(postUrl);
  const posts = await postsResponse.json();

  return {
    user: userData,
    posts: posts,
  };
}

// Example usage:
const userId = 1;
fetchUserDataAndPosts(userId).then((result) => {
  console.log(result);
});
