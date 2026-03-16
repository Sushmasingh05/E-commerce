'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => {
    const priceNum = parseFloat(item.price.replace(/[₹,]/g, ''));
    return total + (priceNum * item.quantity);
  }, 0);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>YOUR BASKET</h1>
          <Link href="/shop" className={styles.continueLink}>Continue Shopping</Link>
        </div>

        <div className={styles.content}>
          <div className={styles.itemsBlock}>
            {cartItems.length === 0 ? (
              <div className={styles.emptyCart}>
                <p>Your sanctuary is currently vacant.</p>
                <Link href="/shop" className={styles.goBtn}>RETURN TO ATELIER</Link>
              </div>
            ) : (
              <>
                <div className={styles.labels}>
                  <span>PRODUCT</span>
                  <span>QUANTITY</span>
                  <span>TOTAL</span>
                </div>
                
                <div className={styles.itemsList}>
                  {cartItems.map(item => (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.itemInfo}>
                        <div className={styles.itemImage}>
                          <Image src={item.image} alt={item.title} fill style={{ objectFit: 'contain', padding: '1rem' }} />
                        </div>
                        <div className={styles.itemDetails}>
                          <h3>{item.title}</h3>
                          <p>{item.price}</p>
                          <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove Item</button>
                        </div>
                      </div>
                      <div className={styles.quantityControls}>
                        <button onClick={() => updateQuantity(item.id, -1)} className={styles.qtyBtn}>—</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className={styles.qtyBtn}>+</button>
                      </div>
                      <div className={styles.itemTotal}>
                        ₹{(parseFloat(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className={styles.summaryBlock}>
            <div className={styles.summaryRow}>
              <span>CONSOLIDATED TOTAL</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <p className={styles.shippingText}>Shipping and artisanal handling calculated at checkout.</p>
            <button className={styles.btnCheckout} disabled={cartItems.length === 0}>PROCEED TO RITUAL —</button>
          </div>
        </div>
      </div>
    </main>
  );
}
