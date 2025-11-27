import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Profile({ profile, contact, onNavigate, refs }) {
  const contacts = contact || {};

  return (
    <section id="profile" className="profile-wrapper glow">

      {/* =========================
          HEADER: PHOTO + TITLE + NAV
      ============================ */}
      <div className="profile-header">

        {/* 🔗 MINI NAVIGATION */}
        <div className="profile-nav">
          <button onClick={() => onNavigate(refs.profileRef)}>Profile</button>
          <button onClick={() => onNavigate(refs.skillsRef)}>Skills</button>
          <button onClick={() => onNavigate(refs.expRef)}>Experience</button>
        </div>

        {/* FOTO PROFIL */}
        <img 
          src="/photo-profile.jpeg"  // dari folder public/
          alt={profile.full_name} 
          className="profile-photo" 
        />

        {/* NAMA + HEADLINE */}
        <div className="profile-title">
          <h1>{profile.full_name}</h1>
          <h3>{profile.headline}</h3>
        </div>
      </div>

      {/* =========================
          BODY: ABOUT, PROFILE, CONTACT
      ============================ */}
      <div className="profile-body">

        {/* ABOUT ME */}
        <div className="profile-section glow">
          <h2>ABOUT ME</h2>
          <p>{profile.short_bio}</p>
        </div>

        {/* DETAIL PROFILE */}
        <div className="profile-section glow">
          <h2>PROFILE</h2>
          <p><strong>NIM:</strong> {profile.nim}</p>
          <p><strong>Program:</strong> {profile.prodi}</p>
          <p><strong>Angkatan:</strong> {profile.angkatan}</p>
          <p><strong>Lokasi:</strong> {profile.location}</p>

          {/* PORTFOLIO BUTTON */}
          {profile.portfolio_url && (
            <p>
              <a 
                href={profile.portfolio_url} 
                target="_blank" 
                rel="noreferrer"
                className="portfolio-btn"
              >
                🥰 View My Portfolio
              </a>
            </p>
          )}
        </div>

        {/* CONTACT / SOSMED */}
        <div className="profile-section glow">
          <h2>CONTACT</h2>
          <div className="social-links-new">
            {contacts.email && <a href={`mailto:${contacts.email}`}><FaEnvelope /> Email</a>}
            {contacts.phone && (
              <a href={`https://wa.me/${contacts.phone.replace(/[^0-9]/g, "")}`}>
                <FaWhatsapp /> WhatsApp
              </a>
            )}
            {contacts.instagram && <a href={contacts.instagram}><FaInstagram /> Instagram</a>}
            {contacts.linkedin && <a href={contacts.linkedin}><FaLinkedin /> LinkedIn</a>}
          </div>
        </div>

      </div>
    </section>
  );
}
