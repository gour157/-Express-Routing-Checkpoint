# Express Working Hours Website

This is a simple Express.js web application that demonstrates a website that is only available during working hours (Monday to Friday, 9 AM - 5 PM).

## Features

- Three pages: Home, Our Services, and Contact Us
- Navigation bar with links to all pages
- Custom middleware to check if the current time is within working hours
- Clean and responsive design with CSS
- "We're Closed" page displayed outside of working hours

## Project Structure

```
express-working-hours-site/
├── app.js                  # Main server file
├── middleware/
│   └── timeChecker.js      # Working hours middleware
├── public/
│   └── css/
│       └── style.css       # CSS styles
├── views/
│   ├── index.html          # Home page
│   ├── services.html       # Our Services page
│   ├── contact.html        # Contact Us page
│   └── closed.html         # Page shown when website is "closed"
└── package.json            # Project dependencies
```

## Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. Visit `http://localhost:3000` in your browser

## Testing Outside Working Hours

To test the "closed" functionality outside of working hours:
1. Modify the `timeChecker.js` middleware temporarily to check for different hours
2. Restart the server
3. Access any route to see the "closed" page

## License

This project is open source and available under the MIT License.#   E x p r e s s - R o u t i n g - C h e c k p o i n t  
 # Express-Routing-Checkpoint
# Express-Routing-Checkpoint
# Express-Routing-Checkpoint
