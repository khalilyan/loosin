"use client";

import Link from 'next/link';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { currentLocale } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.content}>
          <Link href={`/${currentLocale}`} className={styles.logo}>
            LOOSIN
          </Link>
          <nav className={styles.footerNav}>
            <Link href={`/${currentLocale}/collections`}>Collections</Link>
            <Link href={`/${currentLocale}/care`}>Size Guide</Link>
            <Link href={`/${currentLocale}/about`}>Our Story</Link>
            <Link href={`/${currentLocale}/contact`}>Return and exchange</Link>
          </nav>
          <div className={styles.socials}>
            <a 
              href="https://instagram.com/loosin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="https://facebook.com/loosin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a 
              href="https://tiktok.com/@loosin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Follow us on TikTok"
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <small>&copy; {new Date().getFullYear()} Loosin. All rights reserved.</small>
          <div className={styles.contacts}>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
            <a href="mailto:contact@loosin.com">contact@loosin.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}



