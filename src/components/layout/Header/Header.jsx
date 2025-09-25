"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';
import { useTranslations } from '@/utils/client-dictionary';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher/LanguageSwitcher';
import { IoSearch } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useLanguage } from '@/context/LanguageContext';




export default function Header() {
  const { currentLocale } = useLanguage();
  const t = useTranslations(currentLocale);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  console.log(t)
 
  
  const handleLinkHover = (e, menu = null) => {
    const nav = e.currentTarget.parentElement;
    const item = e.currentTarget;
    const itemRect = item.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    
    nav.style.setProperty('--hover-width', `${itemRect.width}px`);
    nav.style.setProperty('--hover-left', `${itemRect.left - navRect.left}px`);
    
    if (menu) {
      setActiveMenu(menu);
    }
  };

  const handleLinkLeave = (e) => {
    const nav = e.currentTarget.parentElement;
    nav.style.setProperty('--hover-width', '0');
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };
  return (
    <header className={`${styles.header} ${isSearchOpen ? styles.searchOpen : ''}`}>
      <div className={`${styles.headerContainer} container`}>
        <Link href={`/${currentLocale}`} className={styles.logo}>
          LOOSIN
        </Link>
        <div className={styles.centerContent}>
          <nav className={`${styles.nav} ${isSearchOpen ? styles.hidden : ''}`}>
            <div 
              className={styles.menuContainer} 
              onMouseEnter={(e) => handleLinkHover(e, 'men')} 
              onMouseLeave={handleMenuLeave}
            >
              <Link href={`/${currentLocale}/shop`} className={styles.menuTrigger}>
                {t.navigation.men}
                <IoIosArrowDown className={`${styles.arrow} ${activeMenu === 'men' ? styles.active : ''}`} size={14} />
              </Link>
              {activeMenu === 'men' && (
                <div className={styles.submenu}>
                  <div className={styles.submenuContent}>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Featured.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Featured.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/men"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Jewelry.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Jewelry.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/men"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Occasions.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Occasions.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/men"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Collections.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Collections.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/men"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div 
              className={styles.menuContainer}
              onMouseEnter={(e) => handleLinkHover(e, 'women')} 
              onMouseLeave={handleMenuLeave}
            >
              <Link href={`/${currentLocale}/collections`} className={styles.menuTrigger}>
                {t.navigation.women}
                <IoIosArrowDown className={`${styles.arrow} ${activeMenu === 'women' ? styles.active : ''}`} size={14} />
              </Link>
              {activeMenu === 'women' && (
                <div className={styles.submenu}>
                  <div className={styles.submenuContent}>
                    <div className={styles.submenuSection}>
                    <h3>{t.navigation.submenuHeaders.Featured.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Featured.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/women"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Jewelry.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Jewelry.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/women"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Occasions.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Occasions.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/women"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className={styles.submenuSection}>
                      <h3>{t.navigation.submenuHeaders.Collections.title}</h3>
                      <div className={styles.submenuLinks}>
                        {t.navigation.submenuHeaders.Collections.subitems.map((item) => (
                          <Link key={item.href} href={"/shop/women"+item.href}>{item.title}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href={`/${currentLocale}/new`} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>{t.navigation.newIn}</Link>
            <Link href={`/${currentLocale}/sale`} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>{t.navigation.sale}</Link>
            <Link href={`/${currentLocale}/about`} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>{t.navigation.about}</Link>
          </nav>
          <div className={`${styles.searchWrapper} ${isSearchOpen ? styles.visible : ''}`}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder={t.navigation.search}
              autoFocus={isSearchOpen}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <LanguageSwitcher />
          <button 
            className={`${styles.icon} ${isSearchOpen ? styles.active : ''}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <IoSearch size={24} color='black' />
          </button>

          <Link href={`/${currentLocale}/account`} className={styles.icon}>
            <RiUser3Fill size={24} color='black' />
          </Link>
          <Link href={`/${currentLocale}/cart`} className={styles.icon}>
            <IoBagHandleSharp color='black' size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}