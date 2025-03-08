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
      className="w-80 p-3 border border-gray-300 rounded-full focus:outline-none  focus:border-[#0577da]  placeholder-gray-300 text-white"
    />
  );
};

export default SearchBar;
