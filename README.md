# myPostman

myPostman is a minimalistic REST API testing tool inspired by [Postman](https://www.postman.com/), designed for quick and easy API requests and response inspection for local development testing. It helps developers and testers send HTTP requests, view responses, and debug RESTful services without the overhead of complex tools.

## Features

- Send HTTP requests (GET, POST, PUT, DELETE, PATCH, etc.)
- Customizable request headers and body
- View formatted responses (JSON, XML, raw text)
- Save and organize frequently used requests (if supported)
- Lightweight and easy to use

## Getting Started

### Prerequisites

- Web Browser that can execute JS ;)
- Simply download and open the file in browser, Hurray ^^^ you are all set!!!!

### Installation

Clone the repository:

```bash
git clone https://github.com/ajmalkkt/myPostman.git
cd myPostman
```

Install dependencies:

```bash
npm install
```

### Usage

Start the application:

```bash
npm start
```

Or, if it's a web-based tool, open `index.html` in your browser.

#### Sending a Request

1. Select the HTTP method (GET, POST, etc.).
2. Enter the request URL.
3. (Optional) Add headers and request body.
4. Click "Send".
5. View the response in the result panel.

## Example

```
GET https://jsonplaceholder.typicode.com/posts/1
```

**Response:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
}
```

## Screenshots

<!-- Add screenshots here if available -->
![myPostman Screenshot](screenshot.png)

## Roadmap

- [ ] Authentication support (Bearer, Basic Auth)
- [ ] Environment variables
- [ ] Export/Import requests
- [ ] Dark mode

## Contributing

Contributions are welcome! Please fork this repo and submit a pull request.

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- Inspired by [Postman](https://www.postman.com/)
- Built with ❤️ by [ajmalkkt](https://github.com/ajmalkkt)

© 2025 ajmalkkt. All rights reserved.
