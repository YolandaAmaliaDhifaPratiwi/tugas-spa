import React, { useState } from 'react';
import ReactDOM from 'react-dom';


// Component untuk satu experience
function ExpItem({ e }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className="exp-item"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '16px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}
    >
      {/* Teks di kiri */}
      <div style={{ flex: 1, minWidth: '250px' }}>
        <h4>{e.title} <small>— {e.organization}</small></h4>

        <div
          className="exp-meta"
          style={{ fontSize: '0.9rem', color: '#555', marginBottom: '8px' }}
        >
          <span>{e.start_date}{e.end_date ? ` — ${e.end_date}` : ' — Present'}</span>{' '}
          | <span>{e.experience_type}</span>
        </div>

        <p>{e.description}</p>

        {e.technologies && (
          <p><strong>Tech:</strong> {e.technologies.join(', ')}</p>
        )}
      </div>

      {/* Gambar di kanan, klik untuk buka modal */}
      {e.image_url && (
        <img
          src={e.image_url}
          alt={e.title}
          className="exp-image"
          onClick={() => setIsOpen(true)}
        />
      )}

      {/* Modal / Lightbox menggunakan React Portal */}
      {isOpen && ReactDOM.createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000
          }}
          onClick={() => setIsOpen(false)} // klik background close modal
        >
          {/* Tombol Close */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              zIndex: 10001
            }}
          >
            X
          </button>

          {/* Gambar */}
          <img
            src={e.image_url}
            alt={e.title}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
            onClick={(event) => event.stopPropagation()} // klik gambar tidak close modal
          />
        </div>,
        document.body
      )}
    </article>
  );
}

// Component daftar semua experiences
export default function Experiences({ experiences }) {
  return (
    <section id="experiences" className="card glow" style={{ padding: '16px' }}>
      <h3 style={{ marginBottom: '16px' }}>EXPERIENCES</h3>

      <div className="experiences-list">
        {experiences.map(e => (
          <ExpItem key={e.id} e={e} />
        ))}
      </div>
    </section>
  );
}
