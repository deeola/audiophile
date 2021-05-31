import React,{useContext} from "react";
import useSign from "./useSign";
import ValidateSign from "./ValidateSign";
import audioContext from '../../context/Audiophile/audioContext'

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
    Moneystyle
  } = values;

  const AudioContext = useContext(audioContext)
  const continueAndPay = AudioContext.continueAndPay;




  //  FETCH LOCAL STORAGE


  const summaryItems = JSON.parse(localStorage.getItem("newItems"));

  const itemsPrice = summaryItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxprice = itemsPrice * 0.2;
  const shippingPrice = 50;

  const TotalPrice = itemsPrice + taxprice + shippingPrice;

  localStorage.setItem('grandtotal', JSON.stringify(TotalPrice))

  return (
    <div className="mainFormDiv">
      <form className="form-inputss" onSubmit={onSubmit}>
        <div className="PersonalDetails">
          <div>BILLING DETAILS</div>
          <div className="nameEmail">
            <div className="formControl">
              <div className="labelError">
                <label htmlFor="name">Name</label>
                {error.name && <p className="error">{error.name}</p>}
              </div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Wagner Adeyemi"
                name="name"
                value={name}
                id="name"
              ></input>
            </div>

            <div className="formControl">
              <div className="labelError">
                <label htmlFor="email">Email</label>
                {error.email && <p className="error">{error.email}</p>}
              </div>
              <input
                onChange={handleChange}
                type="email"
                placeholder="lovecoding@gmail.com"
                name="email"
                id="email"
                value={email}
              ></input>
            </div>
          </div>

          <div className="phoneNumber">
            <div className="formControl">
              <div className="labelError">
                <label htmlFor="number">Phone Number</label>
                {error.number && <p className="error">{error.number}</p>}
              </div>
              <input
                onChange={handleChange}
                type="number"
                placeholder="+123456789"
                name="number"
                value={number}
                id="number"
              ></input>
            </div>
          </div>

          <div className="shippingInfo">
            <div>SHIPPING INFO</div>
            <div className="address">
              <div className="formControl">
                <div className="labelError">
                  <label htmlFor="address">Address</label>
                  {error.address && <p className="error">{error.address}</p>}
                </div>

                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="mystraße 49"
                  name="address"
                  value={address}
                  id="address"
                ></input>
              </div>
            </div>

            <div className="zipCity">
              <div className="zip">
                <div className="formControl">
                  <div className="labelError">
                    <label htmlFor="zip">ZIP</label>
                    {error.zip && <p className="error">{error.zip}</p>}
                  </div>

                  <input
                    onChange={handleChange}
                    type="number"
                    placeholder="27392"
                    name="zip"
                    value={zip}
                    id="zip"
                  ></input>
                </div>
              </div>

              <div className="city">
                <div className="formControl">
                  <div className="labelError">
                    <label htmlFor="city">City</label>
                    {error.city && <p className="error">{error.city}</p>}
                  </div>

                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Berlin"
                    name="city"
                    value={city}
                    id="city"
                  ></input>
                </div>
              </div>
            </div>

            <div className="country">
              <div className="formControl">
                <div className="labelError">
                  <label htmlFor="address">Country</label>

                  {error.country && <p className="error">{error.country}</p>}
                </div>

                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Germany"
                  name="country"
                  value={country}
                  id="country"
                ></input>
              </div>
            </div>
          </div>

          <div className="paymentDetails">
            <div>PAYMENT DETAILS</div>
            <div className="paymentMethodDiv">
              <div>
                <p>Payment Method</p>
              </div>
              <div className="radioDiv">
                <div className="radios">
                  <input
                    onClick={radioChange}
                    type="radio"
                    name="paymentSelect"
                    value="true"
                    id="emoney"
                  ></input>
                  <label htmlFor="emoney">e-Money</label>
                </div>
                <div className="radios">
                  <input
                    onClick={radioChangeA}
                    type="radio"
                    name="paymentSelect"
                    value="false"
                    id="cash"
                  ></input>
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>

            <div className='NumberPinWrapper' style={style}>
              <div className="NumberPin"  >
                

              <div className="moneyNumber">
                <div className="formControl">
                  <div className="labelError">
                    <label htmlFor="moneyNumber">E-money Number</label>
                    {error.moneyNumber && (
                      <p className="error">{error.moneyNumber}</p>
                    )}
                  </div>

                  <input
                    onChange={handleChange}
                    type="number"
                    placeholder="53392*********"
                    name="moneyNumber"
                    value={moneyNumber}
                    id="moneyNumber"
                  ></input>
                </div>
              </div>
              <div className="MoneyPin">
                <div className="formControl">
                  <div className="labelError">
                    <label htmlFor="moneyPin">E-money Pin</label>
                    {error.moneyPin && (
                      <p className="error">{error.moneyPin}</p>
                    )}
                  </div>
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder=" E-MONEY PIN"
                    name="moneyPin"
                    value={moneyPin}
                    id="moneyPin"
                  ></input>
                </div>
              </div>



              </div>
              

              
            </div>

            <div style={Moneystyle}>
              <div className='EmoneyText' >
              <i className="fas fa-hand-holding-usd"></i>
              <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
              </div>
             
            </div>
          </div>
        </div>

        <div className="summary">
          <div className='summaryWrapper'>
            <div className='SummaryHeader'>Summary</div>
            {summaryItems.map((item) => (
              <div className='itemDiv' key={item.id}>
                <div className='eachItemDiv'>
                  <div className='eachItemImageName'>
                    {/* image, name and price here */}

                    <div className='summaryImage'>
                      {/* image */}
                      <img src={require('../../assets'+item.image.desktop).default} alt="smallimage"></img>
                    </div>
                    <div>
                      {/* name and price here */}
                      <p className='boldPrices'>{item.name}</p>
                      {summaryItems.length !== 0 && (
                        <>
                          <hr></hr>
                          <div>€{item.price.toFixed(2)}</div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* Button  and number here */}

                    <div>
                      <div>{item.qty}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className='priceShipping'>
              <div>Total</div>
              <div className='boldPrices'>€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className='priceShipping'>
              <div>SHIPPING</div>
              <div className='boldPrices'>€{shippingPrice.toFixed(2)}</div>
            </div>
            <div className='priceShipping'>
              <div>VAT(Tax Included)</div>
              <div className='boldPrices'>€{taxprice.toFixed(2)}</div>
            </div>

            <div className='priceShipping'>
              <div>GRAND TOTAL</div>
              <div className='boldPrices'>€{TotalPrice.toFixed(2)}</div>
            </div>
            <button onClick={continueAndPay}   className='submitButton' type='submit'>CONTINUE & PAY</button>
              
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default PerosnalDetails;
