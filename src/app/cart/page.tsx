import Link from 'next/link';
import styles from './page.module.css';

const MOCK_CART = [
  { id: 1, title: 'MARGARITA MIXER', price: '$15.00', quantity: 2, imageColor: '#EAF5E6' },
  { id: 2, title: 'OLD FASHIONED MIXER', price: '$20.00', quantity: 1, imageColor: '#F5E6ED' },
];

export default function Cart() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>YOUR BASKET</h1>
          <Link href="/shop" className={styles.continueLink}>Continue Shopping</Link>
        </div>

        <div className={styles.content}>
          <div className={styles.itemsBlock}>
            <div className={styles.labels}>
              <span>PRODUCT</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>
            
            <div className={styles.itemsList}>
              {MOCK_CART.map(item => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemImage} style={{ backgroundColor: item.imageColor }}></div>
                    <div className={styles.itemDetails}>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className={styles.quantityControls}>
                    <button className={styles.qtyBtn}>-</button>
                    <span>{item.quantity}</span>
                    <button className={styles.qtyBtn}>+</button>
                  </div>
                  <div className={styles.itemTotal}>
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.summaryBlock}>
            <div className={styles.summaryRow}>
              <span>SUBTOTAL</span>
              <span>$50.00</span>
            </div>
            <p className={styles.shippingText}>Shipping & taxes calculated at checkout.</p>
            <button className="btn btn-lime" style={{ width: '100%' }}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </main>
  );
}
