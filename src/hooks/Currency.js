import { useState, useEffect } from 'react';

function useCurrencyExchange(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(``) // Add your own API, and perform action bassed own your API fetch output


      .then((res) => {
        if (!res.ok) {
          throw new Error('Error at fetch respose');
        }
        return res.json();
      })

      
      .then((res) => {
        if (res[currency]) {
          setData(res[currency]);
        } else {
          console.error('Error while selecting currency object');
          setData({});
        }
      })


      .catch((err) => {
        console.log('Fetch error:', err);
        setData({});
      });


  }, [currency]);

  console.log('Fetched data:', data);
  return data;
}

export default useCurrencyExchange;
