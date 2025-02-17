document.getElementById('load-scripts').addEventListener('click', loadScripts);

function loadScripts() {
    // Replace this URL with the actual ScriptBlox API endpoint
    const apiUrl = 'https://api.scriptblox.com/scripts'; // Example URL

    // Fetch scripts from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const scriptsList = document.getElementById('scripts-list');
            scriptsList.innerHTML = ''; // Clear the loading message

            if (data && data.scripts && data.scripts.length > 0) {
                data.scripts.forEach(script => {
                    const scriptItem = document.createElement('div');
                    scriptItem.classList.add('script-item');
                    scriptItem.innerHTML = `
                        <h3>${script.name}</h3>
                        <p>${script.description}</p>
                        <button onclick="executeScript('${script.id}')">Execute</button>
                    `;
                    scriptsList.appendChild(scriptItem);
                });
            } else {
                scriptsList.innerHTML = '<p>No scripts available.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading scripts:', error);
            document.getElementById('scripts-list').innerHTML = '<p>Error loading scripts. Please try again later.</p>';
        });
}

function executeScript(scriptId) {
    // This function will execute the script based on its ID (add actual execution logic here)
    alert(`Executing script with ID: ${scriptId}`);
}
