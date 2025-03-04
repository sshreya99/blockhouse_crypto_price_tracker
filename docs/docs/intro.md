

---
Title: Crypto Price Tracker Documentation
---
## Project Setup Guide

### Web App (Next.js)
- **Framework:** Next.js with the new App Router (using `/app` folder).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **State Management:** React Context API.

#### Steps:
1. **Clone the repository** and navigate to the `web-app` folder.
2. Run `npm install` to install dependencies.
3. Run the app with `npm run dev`.

The folder structure is:
web-app/
        src/
            app/
                layout.tsx 
                page.tsx 
            components /
            context /
          README.md 
        public/
           


### API Integration Details
- **API:** [CoinGecko API](https://www.coingecko.com/en/api)
- **Endpoint:**  
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana,dogecoin`
- **Usage:** The API is called in the `CryptoContext` to fetch live prices. Data is fetched on initial load and can be refreshed manually.

### State Management Explanation
- **Why Context API?**  
  The Context API was chosen for its simplicity in sharing crypto data and loading state across components (e.g., list and search components) without prop drilling. Also it was easy to implement and manage the state
- **Implementation:**  
  A dedicated `CryptoContext` provides data and the `fetchCryptoPrices` function to all child components.

### Challenges & Solutions
- **Handling API Rate Limits & Errors:**  
  Implemented error handling using catch and loading states to gracefully manage API failures.
- **Responsive Design:**  
  Tailwind CSS classes ensure the UI is responsive and mobile-friendly.
- **State Sharing:**  
  The Context API enabled clean sharing of data between components without the overhead of additional libraries.

## Mobile & Web Responsiveness

The UI built with Tailwind CSS ensuring a good look and responsiveness on both mobile and desktop screens.

---

For any issues or contributions, please see our [GitHub repository](https://github.com/sshreya99/blockhouse_crypto_price_tracker).


