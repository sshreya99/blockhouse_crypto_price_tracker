import { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(CryptoContext);

  return (
    <input
      type="text"
      placeholder="Search cryptocurrency..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-80 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0577da]  placeholder-gray-300 text-gray-800"
    />
  );
};

export default SearchBar;
