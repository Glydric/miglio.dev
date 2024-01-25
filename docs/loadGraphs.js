const repoDetailsDiv = document.createElement('div');
repoDetailsDiv.id = 'repo';
document.body.appendChild(repoDetailsDiv);

// Fetch repository data from GitHub REST API
fetch('https://api.github.com/repos/Glydric/FlowTime')
    .then(response => response.json())
    .then(data => {
        // Create and populate the HTML elements
        const linkElement = document.createElement('a');
        linkElement.href = data.html_url;
        linkElement.textContent = data.full_name
        repoDetailsDiv.appendChild(linkElement);
    })
    .catch(error => console.error(error));