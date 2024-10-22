const { google } = require('googleapis');
const { auth } = require('google-auth-library');

class GoogleAIAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        const client = await auth.getClient({
            scopes: ['https://www.googleapis.com/auth/cloud-platform']
        });
        const projectId = await auth.getProjectId();
        const endpoint = `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/123456789:detectIntent`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await client.getAccessToken()}`,
            },
            body: JSON.stringify({
                queryInput: {
                    text: {
                        text: userMessage,
                        languageCode: 'en-US',
                    },
                },
            }),
        });

        const responseData = await response.json();
        // Log the entire API response for debugging
        console.log('Response from Google AI API:', responseData);
        // Check if queryResult is defined and has a fulfillmentText
        if (responseData.queryResult && responseData.queryResult.fulfillmentText) {
            return responseData.queryResult.fulfillmentText.trim();
        } else {
            // Handle the case where queryResult is undefined or empty
            console.error('Error: No valid response from Google AI API');
            return 'Sorry, I couldn\'t understand that.';
        }
    }
}

module.exports = { GoogleAIAPI };