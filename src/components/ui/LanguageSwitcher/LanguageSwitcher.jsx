'use client';

import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLocale, changeLanguage, languages } = useLanguage();

  const handleLanguageChange = (locale) => {
    changeLanguage(locale);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.trigger} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <GrLanguage className={styles.icon} />
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map(({ code, label, countryCode }) => (
            <button
              key={code}
              className={`${styles.option} ${code === currentLocale ? styles.active : ''}`}
              onClick={() => handleLanguageChange(code)}
            >
              <ReactCountryFlag
                countryCode={countryCode}
                svg
                className={styles.flag}
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}