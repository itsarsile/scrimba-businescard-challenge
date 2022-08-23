import React from 'react';
import './style.css';
import Avatar from '../src/components/Avatar/Avatar';
import ProfileMain from '../src/components/ProfileMain/ProfileMain';
import SocialMedia from '../src/components/SocialMedia/SocialMedia';
export default function App() {
  return (
    <div className="container">
      <Avatar />
      <ProfileMain />
      <SocialMedia />
    </div>
  );
}
