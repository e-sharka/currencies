import React, { useState, useEffect } from 'react';
import './style.css';

const Rate = (props) => {
  const [rate, setRate] = useState('');

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${props.from}&to=CZK`)
      .then((resp) => resp.json())
      .then((json) => setRate(json.rates.CZK));
  }, [props.from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {props.from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};

export default Rate;
