const repoDetailsDiv = document.createElement('div');
repoDetailsDiv.id = 'repo-details';
document.body.appendChild(repoDetailsDiv);

// Fetch repository data from GitHub REST API
fetch('https://github.com/Glydric/FlowTime')
    .then(response => response.json())
    .then(data => {
        // Create and populate the HTML elements
        const nameElement = document.createElement('h2');
        nameElement.textContent = data.name;
        repoDetailsDiv.appendChild(nameElement);

        const ownerElement = document.createElement('h4');
        ownerElement.textContent = data.owner.login;
        repoDetailsDiv.appendChild(ownerElement);

        const avatarElement = document.createElement('img');
        avatarElement.id = 'avatar';
        avatarElement.src = data.owner.avatar_url;
        avatarElement.alt = '';
        repoDetailsDiv.appendChild(avatarElement);
    })
    .catch(error => console.error(error));