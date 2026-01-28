# DAP
# Dog API Project 🐶

## Description
This project uses TheDogAPI to display:
- A random dog image (GET request)
- A list of dog breeds with searchable filtering (GET request)

## Endpoints Used
- GET /images/search
- GET /breeds

## Features
- JavaScript fetch API
- Searchable breed list
- Error handling
- Linked pages
- Environment variables (.env)

## How to Run Locally
1. Clone the repository
2. Create a `.env` file
3. Add your API key:
   API_KEY=your_key_here
4. Replace `API_KEY` in `script.js` during local testing
5. Open `index.html` in browser

## GitHub Pages Note
GitHub Pages does NOT support `.env` files in the browser.
The `.env` file is included for development and security best practices.

## Author
Kevin Solis
