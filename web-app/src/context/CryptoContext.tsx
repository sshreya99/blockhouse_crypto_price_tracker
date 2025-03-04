"use client";
import { createContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';

export interface Crypto {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
}

interface CryptoContextType {
  cryptos: Crypto[];
  loading: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  fetchCryptoPrices: () => Promise<void>;
}

export const CryptoContext = createContext<CryptoContextType>({
  cryptos: [],
  loading: false,
  searchTerm: '',
  setSearchTerm: () => {},
  fetchCryptoPrices: async () => {}
});

interface CryptoProviderProps {
  children: ReactNode;
}

export const CryptoProvider = ({ children }: CryptoProviderProps) => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchCryptoPrices = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,solana,dogecoin'
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch crypto prices: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setCryptos(data);
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCryptoPrices();
  }, [fetchCryptoPrices]);

  const contextValue = useMemo(
    () => ({
      cryptos,
      loading,
      searchTerm,
      setSearchTerm,
      fetchCryptoPrices,
    }),
    [cryptos, loading, searchTerm, fetchCryptoPrices]
  );

  return (
    <CryptoContext.Provider value={contextValue}>
      {children}
    </CryptoContext.Provider>
  );
};
