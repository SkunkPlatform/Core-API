document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('api-form');
    const responseOutput = document.getElementById('response-output');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const endpoint = document.getElementById('endpoint').value;
        const method = document.getElementById('method').value;
        const data = document.getElementById('data').value;

        try {
            const response = await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: method === 'GET' ? null : data
            });

            const result = await response.json();
            responseOutput.textContent = JSON.stringify(result, null, 2);
        } catch (error) {
            responseOutput.textContent = `Error: ${error.message}`;
        }
    }); // javascript
});
