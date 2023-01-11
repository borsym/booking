import React from 'react';
import './mailList.css';
type Props = {};

export default function MailList({}: Props) {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time</h1>
      <span className="mailDesc">Sign up</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
