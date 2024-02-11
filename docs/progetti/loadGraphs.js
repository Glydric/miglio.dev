const div = document.getElementById("destra");
const repoDetailsDiv = document.createElement('div');
repoDetailsDiv.id = 'repo';
div.appendChild(repoDetailsDiv)

const projects = ["Glydric/FlowTime"]
// Fetch repository data from GitHub REST API
for (let project of projects) {
    const linkElement = document.createElement('a');
    linkElement.href = `https://github.com/${project}`;
    linkElement.textContent = project

    const li = document.createElement('li');
    li.appendChild(linkElement);

    repoDetailsDiv.appendChild(li);

    // fetch(`https://api.github.com/repos/${project}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         // Create and populate the HTML elements

    //     })
    //     .catch(error => console.error(error));
}