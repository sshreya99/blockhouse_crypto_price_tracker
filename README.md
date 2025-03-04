# Crypto Price Tracker

A simple web dashboard that displays live cryptocurrency prices using Next.js, TypeScript, Tailwind CSS, and the Context API.

## Features
- Live crypto prices from CoinGecko API.
- Search bar to filter cryptocurrencies.
- Manual refresh button.
- Loading indicator and error handling.
- Responsive design.

## Setup Instructions

### Prerequisites
- Node.js (v23.9.0)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sshreya99/blockhouse_crypto_price_tracker

2. Navigate to the Web App Directory
   
   cd blockhouse_crypto_price_tracker/web-app

3. Install Dependencies

   npm install

4. ensure postcss.config.mjs 

    const config = {
  plugins: {
    "@tailwindcss/postcss": {},
     },
  };
  export default config;

  and 

  in global.css file

  @import "tailwindcss";

5. Run the Development Server
    
   npm run dev

### To run documentation,

   - cd blockhouse_crypto_price_tracker/docs
   - npm install
   - npm run start