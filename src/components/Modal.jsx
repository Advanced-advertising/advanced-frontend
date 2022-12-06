import React, {useEffect, useMemo} from 'react';
import {createPortal} from "react-dom";
import style from "./Modal.module.css"
const modalRootElement = document.querySelector("#modal")
const Modal = (props) => {
    const element = useMemo( () => document.createElement('div'),[])

    useEffect(()=>{
        if (props.open){
            modalRootElement.appendChild(element)
            return ()=>{
                modalRootElement.removeChild(element)
            }
        }
    })
    useEffect(()=>{
        if (props.notifOpen){
            modalRootElement.appendChild(element)
            return ()=>{
                modalRootElement.removeChild(element)
            }
        }
    })
    useEffect(()=>{
        if (props.advertOpen){
            modalRootElement.appendChild(element)
            return ()=>{
                modalRootElement.removeChild(element)
            }
        }
    })
    if (props.open) {
        return createPortal(<div className={style.modal_background} >
            <div className={style.modal_settings_card}>
                {props.children}
            </div>
        </div>, element)
    }
    if (props.notifOpen) {
        return createPortal(<div className={style.modal_background} >
            <div className={style.modal_notification_card}>
                {props.children}
            </div>
        </div>, element)
    }
    if (props.advertOpen) {
        return createPortal(<div className={style.modal_background} >
            <div className={style.modal_notification_advert}>
                {props.children}
            </div>
        </div>, element)
    }
    return null
};

export default Modal;