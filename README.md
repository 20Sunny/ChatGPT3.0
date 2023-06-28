<p align="center"><img width="180" src="https://aivanaart.vercel.app/assets/logo-76f396b8.png" alt="AIVANA"><h1 align="center">AIVANA - Aivlog</h1></p>
<center>I have not active api that why it not working on live site</center>
Aivana is a web-based chatbot application that uses OpenAI's powerful language processing technology to provide human-like conversations with your users. This project is built using Express, Vite, React, and the OpenAI API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Easy to use and deploy: simply clone the repo, install the dependencies, and run the app using `npm start`!
- Customizable: easily modify the chatbot's behavior and appearance by editing the code in the `src` directory
- Powerful language processing: thanks to OpenAI's advanced algorithms, Aivana can understand and respond to a wide range of user inputs
- Scalable: the app can handle multiple users at once and can be easily deployed to a cloud-based server for even greater scalability

## Getting Started
- clone the repo. in a folder by running command `git clone https://github.com/20Sunny/ChatGPT3.0.git` in cmd.
- open the file in code editor and thn the install command `npm install` in integral cmd of both folder SERveR and CLiENT.
- create the `.env` file in server folder
  OPENAI_API_KEY="your api"
- paste your api key in the `.env` file like above.
- replace `https://quickbot.onrender.com` to `https://localhost:5000` in script file in client folder.
- run the server folder using `npm start` and client using `npm dev run`
- open `https://localhost:5173`, now application is in action.

## Configuration

The app requires an OpenAI API key to function. To use your own key, set the `OPENAI_API_KEY` environment variable to your key before starting the app. For example:
export OPENAI_API_KEY=your_api_key_here
npm start


The app's behavior can be customized by editing the code in the `src` directory. In particular, you may want to modify the `generateResponse` function in `App.js` to change how Aivana generates responses to user input.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repo and submit a pull request with your changes. Before submitting your pull request, please make sure that your code passes the existing tests and that you've added new tests for any new functionality you've added.

## License

This project is licensed under the [MIT License](LICENSE).


