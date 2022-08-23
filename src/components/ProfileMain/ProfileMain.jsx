import React from 'react';
import './ProfileMain.css';
import About from '../ProfileInfo/About';
import Interest from '../ProfileInfo/Interest';
export default function SocialMedia() {
  return (
    <div>
      <button>Email</button>
      <button>LinkedIn</button>
      <About />
      <Interest />
    </div>
  );
}
