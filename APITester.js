<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Tester - Postman Clone</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #ff6b6b, #feca57);
            padding: 20px 30px;
            color: white;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }

        .main-content {
            padding: 40px;
        }

        .request-section {
            margin-bottom: 30px;
        }

        .url-section {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            align-items: center;
            flex-wrap: wrap;
        }

        .method-select {
            padding: 12px 20px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            background: white;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 120px;
        }

        .method-select:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .url-input {
            flex: 1;
            padding: 12px 20px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s ease;
            min-width: 300px;
        }

        .url-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .send-btn {
            padding: 12px 30px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            transform: translateY(0);
        }

        .send-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .send-btn:active {
            transform: translateY(0);
        }

        .tabs {
            display: flex;
            border-bottom: 2px solid #f1f3f4;
            margin-bottom: 20px;
        }

        .tab {
            padding: 15px 25px;
            cursor: pointer;
            border: none;
            background: none;
            font-size: 16px;
            font-weight: 600;
            color: #666;
            transition: all 0.3s ease;
            position: relative;
        }

        .tab.active {
            color: #667eea;
        }

        .tab.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .headers-section, .body-section {
            margin-bottom: 20px;
        }

        .header-row {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            align-items: center;
        }

        .header-input {
            flex: 1;
            padding: 10px 15px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .header-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .add-header-btn, .remove-header-btn {
            padding: 8px 15px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .add-header-btn {
            background: #48bb78;
            color: white;
        }

        .remove-header-btn {
            background: #f56565;
            color: white;
        }

        .add-header-btn:hover {
            background: #38a169;
        }

        .remove-header-btn:hover {
            background: #e53e3e;
        }

        .body-textarea {
            width: 100%;
            height: 200px;
            padding: 15px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            resize: vertical;
            transition: all 0.3s ease;
        }

        .body-textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .response-section {
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid #f1f3f4;
        }

        .response-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .response-title {
            font-size: 1.5em;
            font-weight: 700;
            color: #333;
        }

        .status-badge {
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 14px;
        }

        .status-success {
            background: #c6f6d5;
            color: #2f855a;
        }

        .status-error {
            background: #fed7d7;
            color: #c53030;
        }

        .response-content {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            white-space: pre-wrap;
            max-height: 400px;
            overflow-y: auto;
            line-height: 1.5;
        }

        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            color: #667eea;
            font-weight: 600;
        }

        .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #f3f3f3;
            border-top: 2px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .hidden {
            display: none !important;
        }

        @media (max-width: 768px) {
            .url-section {
                flex-direction: column;
                align-items: stretch;
            }
            
            .method-select, .url-input {
                min-width: auto;
                width: 100%;
            }
            
            .header-row {
                flex-direction: column;
            }
            
            .main-content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 API Tester</h1>
            <p>Test your REST APIs with style</p>
        </div>
        
        <div class="main-content">
            <div class="request-section">
                <div class="url-section">
                    <select class="method-select" id="method">
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                        <option value="PATCH">PATCH</option>
                    </select>
                    <input type="text" class="url-input" id="url" placeholder="Enter API endpoint URL (e.g., https://jsonplaceholder.typicode.com/posts)" value="https://jsonplaceholder.typicode.com/posts">
                    <button class="send-btn" id="sendBtn">Send Request</button>
                </div>
                
                <div class="tabs">
                    <button class="tab active" data-tab="headers">Headers</button>
                    <button class="tab" data-tab="body">Body</button>
                </div>
                
                <div class="tab-content active" id="headers-tab">
                    <div class="headers-section">
                        <div class="header-row">
                            <input type="text" class="header-input" placeholder="Header name (e.g., Content-Type)" data-type="key">
                            <input type="text" class="header-input" placeholder="Header value (e.g., application/json)" data-type="value">
                            <button class="add-header-btn" onclick="addHeaderRow()">+ Add</button>
                        </div>
                    </div>
                </div>
                
                <div class="tab-content" id="body-tab">
                    <div class="body-section">
                        <textarea class="body-textarea" id="requestBody" placeholder="Enter JSON body for POST/PUT requests...
Example:
{
  &quot;title&quot;: &quot;My Post&quot;,
  &quot;body&quot;: &quot;This is the content&quot;,
  &quot;userId&quot;: 1
}"></textarea>
                    </div>
                </div>
            </div>
            
            <div class="response-section">
                <div class="response-header">
                    <h3 class="response-title">Response</h3>
                    <div class="status-badge hidden" id="statusBadge"></div>
                </div>
                <div class="response-content" id="responseContent">Make a request to see the response here...</div>
            </div>
        </div>
    </div>

    <script>
        // Tab functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
            });
        });

        // Add header row functionality
        function addHeaderRow() {
            const headersSection = document.querySelector('.headers-section');
            const newRow = document.createElement('div');
            newRow.className = 'header-row';
            newRow.innerHTML = `
                <input type="text" class="header-input" placeholder="Header name" data-type="key">
                <input type="text" class="header-input" placeholder="Header value" data-type="value">
                <button class="remove-header-btn" onclick="removeHeaderRow(this)">Remove</button>
            `;
            headersSection.appendChild(newRow);
        }

        function removeHeaderRow(button) {
            button.parentElement.remove();
        }

        // Main request functionality
        document.getElementById('sendBtn').addEventListener('click', async () => {
            const method = document.getElementById('method').value;
            const url = document.getElementById('url').value.trim();
            const responseContent = document.getElementById('responseContent');
            const statusBadge = document.getElementById('statusBadge');
            
            if (!url) {
                alert('Please enter a URL');
                return;
            }

            // Show loading state
            responseContent.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    Sending ${method} request...
                </div>
            `;
            statusBadge.classList.add('hidden');

            try {
                // Collect headers
                const headers = {};
                document.querySelectorAll('.header-row').forEach(row => {
                    const keyInput = row.querySelector('[data-type="key"]');
                    const valueInput = row.querySelector('[data-type="value"]');
                    if (keyInput.value && valueInput.value) {
                        headers[keyInput.value] = valueInput.value;
                    }
                });

                // Prepare request options
                const requestOptions = {
                    method: method,
                    headers: headers
                };

                // Add body for POST, PUT, PATCH requests
                if (['POST', 'PUT', 'PATCH'].includes(method)) {
                    const bodyContent = document.getElementById('requestBody').value.trim();
                    if (bodyContent) {
                        requestOptions.body = bodyContent;
                        // Set default content-type if not specified
                        if (!headers['Content-Type'] && !headers['content-type']) {
                            requestOptions.headers['Content-Type'] = 'application/json';
                        }
                    }
                }

                // Make the request
                const startTime = Date.now();
                const response = await fetch(url, requestOptions);
                const endTime = Date.now();
                const duration = endTime - startTime;

                // Get response data
                const responseText = await response.text();
                let formattedResponse;
                
                try {
                    // Try to parse as JSON for pretty formatting
                    const jsonResponse = JSON.parse(responseText);
                    formattedResponse = JSON.stringify(jsonResponse, null, 2);
                } catch {
                    // If not JSON, use as is
                    formattedResponse = responseText;
                }

                // Display response
                const statusClass = response.ok ? 'status-success' : 'status-error';
                statusBadge.className = `status-badge ${statusClass}`;
                statusBadge.textContent = `${response.status} ${response.statusText} • ${duration}ms`;
                statusBadge.classList.remove('hidden');

                responseContent.innerHTML = `Status: ${response.status} ${response.statusText}
Time: ${duration}ms
Size: ${new Blob([responseText]).size} bytes

Headers:
${Object.entries(response.headers).map(([key, value]) => `${key}: ${value}`).join('\n')}

Response Body:
${formattedResponse || 'No response body'}`;

            } catch (error) {
                statusBadge.className = 'status-badge status-error';
                statusBadge.textContent = 'Request Failed';
                statusBadge.classList.remove('hidden');

                responseContent.innerHTML = `Error: ${error.message}

This could be due to:
• CORS policy restrictions
• Network connectivity issues  
• Invalid URL or server not responding
• Firewall or security settings

Try using a CORS-enabled API endpoint like:
• https://jsonplaceholder.typicode.com/posts
• https://httpbin.org/get
• https://api.github.com/users/octocat`;
            }
        });

        // Add default Content-Type header for POST requests
        document.getElementById('method').addEventListener('change', (e) => {
            const method = e.target.value;
            const firstHeaderRow = document.querySelector('.header-row');
            const keyInput = firstHeaderRow.querySelector('[data-type="key"]');
            const valueInput = firstHeaderRow.querySelector('[data-type="value"]');
            
            if (['POST', 'PUT', 'PATCH'].includes(method) && !keyInput.value) {
                keyInput.value = 'Content-Type';
                valueInput.value = 'application/json';
            }
        });

        // Allow Enter key to send request
        document.getElementById('url').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('sendBtn').click();
            }
        });
    </script>
</body>
</html>
