import { Crypto } from '../context/CryptoContext';

interface CryptoCardProps {
  crypto: Crypto;
}

const CryptoCard = ({ crypto }: CryptoCardProps) => {
  return (
    <div className="hover:shadow-black w-full shadow-white sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{crypto.name}</h3>
      <p className="text-lg text-gray-500 font-bold">
        Price: <span className="font-normal text-gray-400">${crypto.current_price.toLocaleString()}</span>
      </p>
      <p className="text-lg text-gray-500 font-bold">
        Market Cap: <span className="font-normal text-gray-400">${crypto.market_cap.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default CryptoCard;