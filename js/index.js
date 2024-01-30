JAVASCRIPT

Queue
Play
// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search-input').value;
  searchGitHubUsers(searchTerm);
});

function searchGitHubUsers(query) {
  const url = `https://api.github.com/search/users?q=${query}`;
  fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  })
  .then(response => response.json())
  .then(data => displayUsers(data.items))
  .catch(error => console.error('Error fetching user data:', error));
}

function displayUsers(users) {
  const results = document.getElementById('results');
  results.innerHTML = ''; // Clear previous results
  users.forEach(user => {
    const userElement = document.createElement('div');
    // Populate userElement with user data
    // Add event listener to userElement to fetch user repos on click
    results.appendChild(userElement);
  });
}

function fetchUserRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  })
  .then(response => response.json())
  .then(repos => displayRepos(repos))
  .catch(error => console.error('Error fetching repositories:', error));
}

function displayRepos(repos) {
  // Similar to displayUsers, but for repositories
}