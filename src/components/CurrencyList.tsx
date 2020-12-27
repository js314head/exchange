import React, { useState, useEffect } from 'react';
import Currency from './Currency';
import Loader from './Loader';
import './CurrencyList.scss';

interface Props {
  currencyList: any;
}

const CurrencyList: React.FC<Props> = ({ currencyList }) => {
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    setLoadedData(true);
  }, [currencyList]);

  return (
    <div className="CurrencyList">
      {!currencyList ? (
        <div className="CurrencyList-container">
          <Loader />
        </div>
      ) : (
        <>
          <h3>
            CURRENCY LIST -
            {loadedData ? currencyList[0]['Datum primjene'] : null}-
          </h3>

          <ul className="Currency">
            <li className="big legend">COUNTRY</li>
            <li className="legend">CURRENCY</li>
            <li className="small legend">UNIT</li>
            <li className="legend">BUY CURRENCY</li>
            <li className="legend">SELL CURRENCY</li>
          </ul>

          {currencyList
            ? currencyList.map((item: any) => (
                <Currency
                  država={item.Država}
                  valuta={item.Valuta}
                  jedinica={item.Jedinica}
                  prodajni={item['Prodajni za devize']}
                  kupovni={item['Kupovni za devize']}
                  key={item.Država}
                />
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default CurrencyList;
