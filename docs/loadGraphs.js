const repoDetailsDiv = document.createElement('div');
repoDetailsDiv.id = 'repo';
document.body.appendChild(repoDetailsDiv);

// Fetch repository data from GitHub REST API
fetch('https://api.github.com/repos/Glydric/FlowTime')
    .then(response => response.json())
    .then(data => {
        // Create and populate the HTML elements
        const nameElement = document.createElement('p');
        nameElement.textContent = data.owner.login+'/'+data.name;
        repoDetailsDiv.appendChild(nameElement);

        const avatarElement = document.createElement('img');
        avatarElement.id = 'image';
        avatarElement.src = data.image;
        avatarElement.alt = '';
        repoDetailsDiv.appendChild(avatarElement);
    })
    .catch(error => console.error(error));