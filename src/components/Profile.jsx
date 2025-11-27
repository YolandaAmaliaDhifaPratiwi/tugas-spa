import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Profile({ profile, contact, onNavigate, refs }) {
  const contacts = contact || {};

  return (
    <>
      {/* HAPUS: MINI NAVIGATION GLOBAL di sini */}

      <section id="profile" className="profile-wrapper glow">

        {/* HEADER: FOTO + NAMA */}
        <div className="profile-header">
          <img 
            src="/photo-profile.jpeg"  // dari folder public/
            alt={profile.full_name} 
            className="profile-photo" 
          />
          <div className="profile-title">
            <h1>{profile.full_name}</h1>
            <h3>{profile.headline}</h3>
          </div>
          
          {/* MASUKKAN MINI NAVIGATION GLOBAL DI SINI! */}
          <div className="profile-nav-global">
            <button onClick={() => onNavigate(refs.profileRef)}>Profile</button>
            <button onClick={() => onNavigate(refs.skillsRef)}>Skills</button>
            <button onClick={() => onNavigate(refs.expRef)}>Experience</button>
          </div>

        </div>

        {/* BODY */}
        <div className="profile-body">
          {/* ... sisa body ... */}
        </div>
      </section>
    </>
  );
}
