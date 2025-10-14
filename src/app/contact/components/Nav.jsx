import React from 'react';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>MyWebsite</h2>
      <ul style={styles.navLinks}>
        <li><a href="#" style={styles.link}>Home</a></li>
        <li><a href="#" style={styles.link}>About</a></li>
        <li><a href="#" style={styles.link}>Services</a></li>
        <li><a href="#" style={styles.link}>Contact</a></li>
      </ul>
    </nav>

    
  );
}
 
   <Image src="globe.svg" alt="" />

// ✅ Simple inline CSS styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: 'white',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};
