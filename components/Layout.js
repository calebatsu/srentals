//making the navbar+footer default to all components
import Navbar from "./Navbar"
import styles from '../styles/Home.module.css'
const Layout  =({children}) => {
    return (
    <> 
    <Navbar/> <div> {children}</div>
    <footer className={styles.footer}>
        
        <a href="/terms"> Terms</a>
        <a href="/privacy"> Privacy</a>
        <p> © 2023 Speedy Rentals  </p>
      </footer>
    </>
    
    );
};

export default Layout;