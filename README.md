# Software Dev Chatbot

This project is a simple chatbot application that uses OpenAI's GPT-3.5-turbo model to generate responses to user messages. The chatbot is built using Node.js and Express for the backend, and vanilla JavaScript, HTML, and CSS for the frontend.

## Project Structure

```
google-ai.js
openai.js
package.json
public/
    chat.png
    index.html
    main.js
    style.css
server.js
```

- google-ai.js: Contains the implementation for interacting with Google AI API (Dialogflow).
- openai.js: Contains the implementation for interacting with OpenAI API.
- package.json: Contains the project metadata and dependencies.
- public: Contains the static files for the frontend.
  - `chat.png`: Logo image used in the chat window.
  - index.html: Main HTML file for the frontend.
  - main.js: JavaScript file for handling frontend logic.
  - style.css: CSS file for styling the frontend.
- server.js: Main server file that sets up the Express server and handles API requests.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/software-dev-chatbot.git
    cd software-dev-chatbot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your OpenAI API key to the `.env` file:
      ```env
      OPENAI_API_KEY=your_openai_api_key
      ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter your message in the input field and click "Send" to interact with the chatbot.

## API Endpoints

- `GET /`: Serves the main HTML file.
- `POST /getChatbotResponse`: Accepts a user message and returns a response generated by the OpenAI API.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Acknowledgements

- [OpenAI](https://openai.com/) for providing the GPT-3.5-turbo model.
- [Express](https://expressjs.com/) for the web framework.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---