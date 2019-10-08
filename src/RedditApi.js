const API_URL = "https://www.reddit.com";

export async function fetchAnimalPosts(term) {
  let response = await fetch(`${API_URL}/r/${term}.json`);
  let posts = await response.json();
  return posts;
}

export async function fetchAuthorPosts(author) {
  let response = await fetch(`${API_URL}/user/${author}.json`);
  let posts = await response.json();
  return posts;
}
