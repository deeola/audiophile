import React from "react";
import useSign from "./useSign";
import ValidateSign from "./ValidateSign";

function PerosnalDetails({ Submitform }) {
  const { values, handleChange, onSubmit, error, radioChange, radioChangeA } =
    useSign(Submitform, ValidateSign);
  const {
    name,
    email,
    number,
    address,
    zip,
    city,
    moneyNumber,
    moneyPin,
    country,
    style,
  } = values;

  return (
    <div>
      <form className="form-inputss" onSubmit={onSubmit}>
        <div >BILLING DETAILS</div>
        <div className="nameEmail">
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Wagner Adeyemi"
              name="name"
              value={name}
              id="name"
            ></input>
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              placeholder="lovecoding@gmail.com"
              name="email"
              id="email"
              value={email}
            ></input>
            {error.email && <p>{error.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            onChange={handleChange}
            type="number"
            placeholder="+123456789"
            name="number"
            value={number}
            id="number"
          ></input>
          {error.number && <p>{error.number}</p>}
        </div>

        <div>
        <div >SHIPPING INFO</div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="mystraße 49"
              name="address"
              value={address}
              id="address"
            ></input>
            {error.address && <p>{error.address}</p>}
          </div>
          <div className="zipCity">
            <div>
              <label htmlFor="zip">ZIP</label>
              <input
                onChange={handleChange}
                type="number"
                placeholder="27392"
                name="zip"
                value={zip}
                id="zip"
              ></input>
              {error.zip && <p>{error.zip}</p>}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                onChange={handleChange}
                type="text"
                placeholder="berlin"
                name="city"
                value={city}
                id="city"
              ></input>
              {error.city && <p>{error.city}</p>}
            </div>
          </div>

          <div>
          
            <label htmlFor="address">Country</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Germany"
              name="country"
              value={country}
              id="country"
            ></input>
            {error.country && <p>{error.country}</p>}
          </div>
        </div>

        <div>
        <div >PAYMENT DETAILS</div>
          <div>
            <div>
              <p>Payment Method</p>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <input
                  onClick={radioChange}
                  type="radio"
                  name="paymentSelect"
                  value="true"
                ></input>
                <p>e-money</p>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  onClick={radioChangeA}
                  type="radio"
                  name="paymentSelect"
                  value="false"
                ></input>
                <p>cash</p>
              </div>
            </div>
          </div>
          <div style={style}>
            <div>
              <label htmlFor="moneyNumber">E-money Number</label>
              <input
                onChange={handleChange}
                type="number"
                placeholder="53392*********"
                name="moneyNumber"
                value={moneyNumber}
                id="moneyNumber"
              ></input>
              {error.moneyNumber && <p>{error.moneyNumber}</p>}
            </div>
            <div>
              <label htmlFor="moneyPin">E-money Pin</label>
              <input
                onChange={handleChange}
                type="password"
                placeholder=" E-MONEY PIN"
                name="moneyPin"
                value={moneyPin}
                id="moneyPin"
              ></input>
              {error.moneyPin && <p>{error.moneyPin}</p>}
            </div>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <div>
          
      </div>
    </div>
  );
}

export default PerosnalDetails;
