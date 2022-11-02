import React from 'react'
import {useNavigate} from "react-router-dom"

function Viewall() {
    const nevigate = useNavigate();
    const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };
  return (
    <div>Viewall
         
    </div>
  )
}

export default Viewall