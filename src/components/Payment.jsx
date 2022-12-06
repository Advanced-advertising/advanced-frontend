import React from 'react';
import "./Payment.css"
import cross from "../images/cross.png";



const Payment = (props) => {
    const normalizeCardNumber = (value) =>{
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(' ').substring(0,19) || ""
    }
    const normalizeCardData = (value) =>{
        return value.replace(/\s/g, "").match(/.{1,2}/g)?.join(' ').substring(0,5) || ""
    }
    const normalizeCardCVV = (value) =>{
        return value.replace(/\s/g, "").match(/.{1,3}/g)?.join(' ').substring(0,3) || ""
    }

    return (
        <div className='modal_advertising'>
            <div className='close'>
                <button className='modal_close' onClick={ () => props.onClose()}>
                    <img src={cross} alt="Close"/>
                </button>
            </div>
            <div className="payment_wrap">
                <div className="payment_card">
                    <div className="checkout_form">
                        <form action="#">
                            <div className="input_item">
                                <input type="text"
                                       placeholder="XXXX XXXX XXXX XXXX"
                                       inputMode="numeric"
                                       name="cardNumber"
                                       id="cardNumber"
                                       onChange={(event)=>{
                                           const {value} = event.target
                                           event.target.value = normalizeCardNumber(value)
                                       }}
                                />
                            </div>
                            <div className="input_grp">
                                <div className="input_item">
                                    <input type="text"
                                           placeholder="MM / YY"
                                           inputMode="numeric"
                                           name="cardNumber"
                                           id="cardNumber"
                                           onChange={(event)=>{
                                               const {value} = event.target
                                               event.target.value = normalizeCardData(value)
                                           }}
                                    />
                                </div>
                                <div className="input_item">
                                    <input type="text"
                                           placeholder="CVV"
                                           inputMode="numeric"
                                           name="cardNumber"
                                           id="cardNumber"
                                           onChange={(event)=>{
                                               const {value} = event.target
                                               event.target.value = normalizeCardCVV(value)
                                           }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="payment_button_pay">
                    <button>Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;