class OpenAIAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        const apiKey = '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';
        const endpoint = 'https://api.openai.com/v1/chat/completions';
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-1106',
                prompt: userMessage,
                max_tokens: 150,
            }),
        });
        const responseData = await response.json();
        // Log the entire API response for debugging
        console.log('Response from OpenAI API:', responseData);
        // Check if choices array is defined and not empty
        if (responseData.choices && responseData.choices.length > 0) {
            return responseData.choices[0].text.trim();
        } else {
            // Handle the case where choices array is undefined or empty
            console.error('Error: No valid response from OpenAI API');
            return 'Sorry, I couldn\'t understand that.';
        }
    }
}
module.exports = { OpenAIAPI };