import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Timeless Elegance, Modern Design</h1>
          <p>Discover our collection of handcrafted jewelry pieces</p>
          <a href="/shop" className={styles.ctaButton}>
            Shop Now
          </a>
        </div>
      </section>

      <section className={`${styles.featured} container`}>
        <h2>Featured Collections</h2>
        <div className={styles.grid}>
          {/* Add featured products/collections here */}
          <div className={styles.featuredItem}>
            <div className={styles.imagePlaceholder}></div>
            <h3>Necklaces</h3>
          </div>
          <div className={styles.featuredItem}>
            <div className={styles.imagePlaceholder}></div>
            <h3>Rings</h3>
          </div>
          <div className={styles.featuredItem}>
            <div className={styles.imagePlaceholder}></div>
            <h3>Earrings</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
