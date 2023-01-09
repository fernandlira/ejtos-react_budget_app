import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { currency, dispatch } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div className="input-group" style={{ backgroundColor: 'lightgreen',
                     borderRadius: "5px", color: "white" }}>
            <label>Currency :</label>
                  <select style={{
                      backgroundColor: 'lightgreen',
                     borderRadius: "5px",
                     border: "none",
                     color: "white"
                  }} className="custom-select" id="inputGroupSelect01" value={currency} onChange={(event) => setCurrency(event.target.value)}>
                        <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                  </select>
                  </div>
        </div>
    );
};

export default CurrencyList;
