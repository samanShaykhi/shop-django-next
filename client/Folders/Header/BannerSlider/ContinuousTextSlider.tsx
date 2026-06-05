'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

interface ContinuousTextSliderProps {
  items?: string[];
  speed?: number; // pixels per second
  gap?: number; // px
}
const ContinuousTextSlider: React.FC<ContinuousTextSliderProps> = ({
  items,
  speed = 50,
  gap = 48,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  const defaultItems = [
    'فروش فوق‌العاده — تا 50% تخفیف روی همه محصولات جدید!',
    'ارسال سریع در تهران و مراکز استان‌ها — خرید بالای 1,000,000 تومان رایگان',
    'تخفیف ویژه اعضای خبرنامه — کد: VIP2025',
    'محصول جدید: ایرپاد نسل سوم — موجودی محدود',
    'پیشنهاد روز: کیف چرمی اصل — تعداد محدود!',
  ];

  const list = items && items.length ? items : defaultItems;

  useEffect(() => {
    const el = contentRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const t = setTimeout(() => {
      const contentWidth = el.getBoundingClientRect().width;
      const distance = contentWidth + gap;
      const dur = Math.max(6, distance / Math.max(1, speed));
      setDuration(dur);

      // set CSS variable on the moving track (container) to avoid typing issues
      container.style.setProperty('--marquee-duration', `${dur}s`);

      // small delay so user sees the filled bar before it starts moving
      setTimeout(() => setStarted(true), 200);
    }, 120);

    return () => clearTimeout(t);
  }, [list, speed, gap]);

  return (
    <div className={styles.wrapper} aria-hidden={false}>
      <div ref={containerRef} className={styles.viewport}>
        <div
          className={`${styles.track} ${started ? styles.animateMarquee : ''}`}
          // keep whitespace inline behavior
        >
          <div ref={contentRef} className={styles.block} style={{ paddingRight: `${gap}px` }}>
            {list.map((text, i) => (
              <span key={i} className={styles.item}>
                {text}
              </span>
            ))}
          </div>

          <div className={styles.block} style={{ paddingRight: `${gap}px` }}>
            {list.map((text, i) => (
              <span key={`dup-${i}`} className={styles.item}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousTextSlider;

