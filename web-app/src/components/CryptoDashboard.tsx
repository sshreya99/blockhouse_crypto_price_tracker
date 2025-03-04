"use client";
import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';
import CryptoCard from './CryptoCard';
import SearchBar from './SearchBar';
import Loader from './Loader';

const CryptoDashboard = () => {
  const { cryptos, loading, searchTerm, fetchCryptoPrices } = useContext(CryptoContext);

  // Filter the list based on search term
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Crypto Price Tracker
      </h1>
      <div className="flex flex-col items-center mb-6">
        <SearchBar />
        <button
          onClick={fetchCryptoPrices}
          className="mt-4 px-6 py-2 bg-[#0577da] text-white rounded-full hover:bg-[#035ead] transition-colors"
        >
          Refresh Prices
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8">
          {filteredCryptos.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoDashboard;