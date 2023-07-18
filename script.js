const searchForm = document.getElementById('searchForm');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const location = searchForm.elements.location.value;
    const jobRole = searchForm.elements.jobRole.value;

    // Make an AJAX request or fetch candidates based on the provided location and job role
    // Replace the code below with your own logic to fetch and display search results

    const candidates = [
        { name: 'Candidate 1', location: 'New York', jobRole: 'Software Engineer' },
        { name: 'Candidate 2', location: 'San Francisco', jobRole: 'Data Analyst' },
        { name: 'Candidate 3', location: 'London', jobRole: 'Product Manager' },
    ];

    displaySearchResults(candidates);
});

function displaySearchResults(candidates) {
    searchResults.innerHTML = '';

    if (candidates.length === 0) {
        searchResults.innerHTML = 'No candidates found.';
        return;
    }

    const list = document.createElement('ul');

    candidates.forEach(function(candidate) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Name:</strong> ${candidate.name}<br>
                              <strong>Location:</strong> ${candidate.location}<br>
                              <strong>Job Role:</strong> ${candidate.jobRole}`;
        list.appendChild(listItem);
    });

    searchResults.appendChild(list);
}