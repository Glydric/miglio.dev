const div = document.getElementById("sinistra");
const repoDetailsDiv = document.createElement('div');
repoDetailsDiv.id = 'repo';
div.appendChild(repoDetailsDiv)

const projects = ["Glydric/FlowTime","unicam-complex-system/camera-security-system-monorepo"]
// Fetch repository data from GitHub REST API
for (let project of projects) {
    fetch(`https://api.github.com/repos/${project}`)
        .then(response => response.json())
        .then(data => {
            // Create and populate the HTML elements
            const linkElement = document.createElement('a');
            linkElement.href = data.html_url;
            linkElement.textContent = data.full_name
            repoDetailsDiv.appendChild(linkElement);
            repoDetailsDiv.appendChild(document.createElement('br'));
        })
        .catch(error => console.error(error));
}