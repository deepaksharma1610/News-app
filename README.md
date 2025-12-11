# NewsApp

A modern, responsive news application built with React and Vite. This app fetches and displays news articles from various categories using the NewsAPI, with support for multiple languages and infinite scrolling.

## Features

- **Category-based News**: Browse news by categories like Politics, Crime, Education, Entertainment, Sports, Cricket, and more.
- **Language Support**: Available in Hindi and English.
- **Search Functionality**: Search for specific news topics.
- **Infinite Scrolling**: Load more articles seamlessly as you scroll.
- **Responsive Design**: Optimized for all device sizes using Bootstrap.
- **Fast and Lightweight**: Built with Vite for quick development and build times.

## Technologies Used

- **React 19**: For building the user interface.
- **Vite**: For fast development and building.
- **React Router DOM**: For client-side routing.
- **React Infinite Scroll Component**: For infinite scrolling functionality.
- **Bootstrap 5**: For responsive styling.
- **NewsAPI**: For fetching news data.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd NewsApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## API Key

This app uses NewsAPI to fetch news data. You need to sign up at [NewsAPI](https://newsapi.org/) and get your API key. Replace the API key in `src/Pages/Home.jsx` with your own:

```javascript
let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&sortBy=publishedAt&language=${searchParams.get("language") ?? "hi"}&apiKey=YOUR_API_KEY`)
```

## Project Structure

```
NewsApp/
├── public/
│   ├── css/
│   │   └── style.css
│   └── images/
├── src/
│   ├── Components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── NewsItem.jsx
│   ├── Pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
