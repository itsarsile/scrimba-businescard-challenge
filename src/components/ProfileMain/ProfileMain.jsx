import React from 'react';
import './ProfileMain.css';
import About from '../ProfileInfo/About';
import Interest from '../ProfileInfo/Interest';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
export default function SocialMedia() {
  return (
    <div className="profilemain--wrapper">
      <div className="profilemain--btn_wrapper">
        <button>
          <AiFillMail className="profilemain--btn_icon" /> Email
        </button>
        <button>
          <AiFillLinkedin className="profilemain--btn_icon" />
          LinkedIn
        </button>
      </div>
      <About />
      <Interest />
    </div>
  );
}
