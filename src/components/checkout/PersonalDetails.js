import React, { useContext } from "react";
import useForm from "./useForm";
import validate from "./ValidateSign";
import audioContext from "../../context/Audiophile/audioContext";

function PerosnalDetails() {
  const AudioContext = useContext(audioContext);
  const {
    continueAndPay,
    clickTrue,
    showIconclicked,
    showIconclickeds,
    clickTrues,
  } = AudioContext;

  const { handleChange, handleSubmit, values, errors } = useForm(
    continueAndPay,
    validate
  );

  //  FETCH SUMMARY ITEMS FROM  LOCAL STORAGE

  const summaryItems = JSON.parse(localStorage.getItem("newItems"));

  const itemsPrice = summaryItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxprice = itemsPrice * 0.2;
  const shippingPrice = 50;

  const TotalPrice = itemsPrice + taxprice + shippingPrice;

  localStorage.setItem("grandtotal", JSON.stringify(TotalPrice));

  return (
    <div className="mainFormDiv">
      <form className="form-inputss" onSubmit={handleSubmit} noValidate>
        <div className="PersonalDetails">
          <div className="inputTitles">BILLING DETAILS</div>
          <div className="nameEmail">
            <div className="formControl">
              <div className="labelError">
                <label htmlFor="name">Name</label>
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Wagner Adeyemi"
                name="name"
                value={values.name}
                id="name"
              ></input>
            </div>

            <div className="formControl">
              <div className="labelError">
                <label htmlFor="email">Email</label>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <input
                onChange={handleChange}
                type="email"
                placeholder="lovecoding@gmail.com"
                name="email"
                id="email"
                value={values.email}
              ></input>
            </div>
          </div>

          <div className="phoneNumber">
            <div className="formControl">
              <div className="labelError">
                <label htmlFor="number">Phone Number</label>
                {errors.number && <p className="error">{errors.number}</p>}
              </div>
              <input
                onChange={handleChange}
                type="number"
                placeholder="+123456789"
                name="number"
                value={values.number}
                id="number"
              ></input>
            </div>
          </div>

          <div className="shippingInfo">
            <div className="inputTitles">SHIPPING INFO</div>
            <div className="address">
              <div className="formControl">
                <div className="labelError">
                  <label htmlFor="address">Address</label>
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>

                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="mystraße 49"
                  name="address"
                  value={values.address}
                  id="address"
                ></input>
              </div>
            </div>

            <div className="zipCity">
              <div className="zip">
                <div className="formControl">
                  <div className="labelError">
                    <label htmlFor="zip">ZIP</label>
                    {errors.zip && <p className="error">{errors.zip}</p>}
                  </div>

                  <input
                    onChange={handleChange}
                    type="number"
                    placeholder="27392"
                    name="zip"
                    value={values.zip}
                    id="zip"
                  ></input>
                </div>
              </div>

              <div className="city">
                <div className="formControl">
                  <div className="labelError">
                    <label htmlFor="city">City</label>
                    {errors.city && <p className="error">{errors.city}</p>}
                  </div>

                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Berlin"
                    name="city"
                    value={values.city}
                    id="city"
                  ></input>
                </div>
              </div>
            </div>

            <div className="country">
              <div className="formControl">
                <div className="labelError">
                  <label htmlFor="address">Country</label>

                  {errors.country && <p className="error">{errors.country}</p>}
                </div>

                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Germany"
                  name="country"
                  value={values.country}
                  id="country"
                ></input>
              </div>
            </div>
          </div>

          <div className="paymentDetails">
            <div className="inputTitles">PAYMENT DETAILS</div>
            <div className="paymentMethodDiv">
              <div>
                <p style={{ fontWeight: "700", fontSize: "14px" }}>
                  PAYMENT METHOD
                </p>
              </div>
              <div className="radioDiv">
                <div className="radios">
                  <input
                    onClick={showIconclicked}
                    type="radio"
                    name="paymentSelect"
                    value="true"
                    id="emoney"
                  ></input>
                  <label htmlFor="emoney">e-Money</label>
                </div>
                <div className="radios">
                  <input
                    onClick={showIconclickeds}
                    type="radio"
                    name="paymentSelect"
                    value="false"
                    id="cash"
                  ></input>
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>

            <div className="NumberPinWrapper" style={clickTrue()}>
              <div className="NumberPin">
                <div className="moneyNumber">
                  <div className="formControl">
                    <div className="labelError">
                      <label htmlFor="moneyNumber">E-money Number</label>
                    </div>

                    <input
                      onChange={handleChange}
                      type="number"
                      placeholder="53392*********"
                      name="moneyNumber"
                      id="moneyNumber"
                    ></input>
                  </div>
                </div>
                <div className="MoneyPin">
                  <div className="formControl">
                    <div className="labelError">
                      <label htmlFor="moneyPin">E-money Pin</label>
                    </div>
                    <input
                      onChange={handleChange}
                      type="password"
                      placeholder=" E-MONEY PIN"
                      name="moneyPin"
                      id="moneyPin"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div style={clickTrues()}>
              <div className="EmoneyText">
                <i className="fas fa-hand-holding-usd"></i>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="summary">
          <div className="summaryWrapper">
            <div className="SummaryHeader">Summary</div>
            {summaryItems.map((item) => (
              <div className="itemDiv" key={item.id}>
                <div className="eachItemDiv">
                  <div className="eachItemImageName">
                    <div className="summaryImage">
                      <img
                        src={
                          require("../../assets" + item.image.desktop).default
                        }
                        alt="smallimage"
                      ></img>
                      <img
                        style={{ display: "none" }}
                        src={
                          require("../../assets" + item.image.tablet).default
                        }
                        alt="smallimage"
                      ></img>
                      <img
                        style={{ display: "none" }}
                        src={
                          require("../../assets" + item.image.mobile).default
                        }
                        alt="smallimage"
                      ></img>
                    </div>
                    <div>
                      <p className="boldPrices">{item.name}</p>
                      {summaryItems.length !== 0 && (
                        <>
                          <hr></hr>
                          <div>€{item.price.toFixed(2)}</div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="pricetitle">x{item.qty}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="priceShipping">
              <div className="pricetitle">Total</div>
              <div className="boldPrices">€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="priceShipping">
              <div className="pricetitle">SHIPPING</div>
              <div className="boldPrices">€{shippingPrice.toFixed(2)}</div>
            </div>
            <div className="priceShipping">
              <div className="pricetitle">VAT(Tax Included)</div>
              <div className="boldPrices">€{taxprice.toFixed(2)}</div>
            </div>

            <div className="priceShipping">
              <div className="pricetitle">GRAND TOTAL</div>
              <div className="boldPrices pricetotal">
                €{TotalPrice.toFixed(2)}
              </div>
            </div>
            <button className="submitButton" type="submit">
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default PerosnalDetails;

// onClick={ Object.keys(error).length === 0 ? continueAndPay : ''}
