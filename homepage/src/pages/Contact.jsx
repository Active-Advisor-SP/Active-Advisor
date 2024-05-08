import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FooterComp from '../components/FooterComp';

const styles = {
  '*': {
    backgroundColor: '#333',
  },
  html: {
    fontFamily: 'Outfit',
  },
  body: {
    background: '#3B5B5D',
    margin: 0,
    padding: 0,
  },
  contactContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  contactLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '20px',
  },
  contactLeftTitle: {
    fontWeight: 600,
    color: '#333',
    fontSize: '40px',
    marginBottom: '5px',
  },
  contactLeftHr: {
    border: 'none',
    width: '120px',
    height: '5px',
    backgroundColor: '#333',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  contactInputs: {
    width: '400px',
    height: '50px',
    border: '1px solid #333', // Çerçeve eklendi
    outline: 'none',
    paddingLeft: '25px',
    fontWeight: 500,
    color: 'black',
    borderRadius: '50px',
    transition: 'border-color 0.3s', // Geçiş eklendi
  },
  contactTextarea: {
    width: '400px', // Boyut eklendi
    height: '50px', // Boyut eklendi
    border: '1px solid #333', // Çerçeve eklendi
    outline: 'none',
    paddingTop: '15px',
    borderRadius: '20px',
    paddingLeft: '25px',
    fontWeight: 500,
    color: 'black',
    transition: 'border-color 0.3s', // Geçiş eklendi
  },
  contactButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 30px',
    fontSize: '16px',
    color: '#fff',
    gap: '10px',
    border: 'none',
    borderRadius: '50px',
    background: 'linear-gradient(270deg, #801414, #3a0909)',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Geçiş eklendi
  },
  contactButtonImg: {
    height: '15px',
  },
  '@media (max-width: 800px)': {
    contactInputs: {
      width: '80vw',
    },
    contactTextarea: {
      width: '80vw', // Boyut eklendi
    },
  },
};

function Contact() {
  return (
    <div>
        <NavbarComponent />
        <div style={styles.contactContainer}>
        <form action="https://api.web3forms.com/submit" method="POST" style={styles.contactLeft}>
          <div style={styles.contactLeftTitle}>
            <h2> Get in touch</h2>
            <hr style={styles.contactLeftHr} />
          </div>
          <input type="hidden" name="access_key" value="b4c890bf-fb78-46f2-949b-3e3b394d6cbb" />
          <input type="text" name="name" placeholder="Your Name" style={styles.contactInputs} required />
          <input type="email" name="email" placeholder="Your Email" style={styles.contactInputs} required />
          <textarea name="message" placeholder="Your message" style={styles.contactTextarea} required></textarea>
          <button type="submit" style={styles.contactButton}>Submit </button>
        </form>
        <div className="contact-right">
          {/* İlgili içerik */}
        </div>
      </div>
      <FooterComp />
    </div>

  
  )
}

export default Contact