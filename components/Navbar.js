

import styled from 'styled-components'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
const Nav = styled.nav

//<img src="https://mail.google.com/mail/u/0?ui=2&ik=9a70ebca4f&attid=0.1&permmsgid=msg-f:1754842980808959206&th=185a7464bbb4a4e6&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_BtGw7M_ePiOBdCYH5oUD46PGkOwbIWpDCstIjSZwfgi6kiVXPRn69RvFU2rDQ9ThgGXdSkI7jGP2rHMyJg-gLThr2LOzlm8Lx8w1p9aCcZi6JHaJZU3LZ_2A&disp=emb&realattid=ii_lctfnr8f0" alt="Speedy Rentals Logo"></img>
//creating navar bar with links
const Navbar = () => {
  return (
    
    <div className={styles.navbar}>

        <div className={styles.links}>
        <img alt="Speedy Rentals Logo"></img>
            <Link href="/"> Home</Link>
            <Link href="/about"> About</Link>
            <Link href="/contact"> Contact</Link>
            <Link href="/login"> Login</Link>
            <Link href="/register"> Register</Link>

        </div>
    </div>
  );
};

export default Navbar;
