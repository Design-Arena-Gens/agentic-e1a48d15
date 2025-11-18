'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const startRecording = () => {
    setCountdown(3);
    const countInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countInterval);
          setIsRecording(true);
          setTimeout(() => {
            setIsRecording(false);
            setCountdown(null);
          }, 10000);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.star} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
      </div>

      <div className={styles.cat}>
        <div className={styles.catBody}>
          <div className={styles.catHead}>
            <div className={styles.ear} style={{ left: '10px' }}></div>
            <div className={styles.ear} style={{ right: '10px' }}></div>
            <div className={styles.eyesContainer}>
              <div className={styles.eye} style={{ left: '25px' }}>
                <div className={styles.pupil}></div>
              </div>
              <div className={styles.eye} style={{ right: '25px' }}>
                <div className={styles.pupil}></div>
              </div>
            </div>
            <div className={styles.nose}></div>
            <div className={styles.whiskers}>
              <div className={styles.whisker} style={{ left: '5px', transform: 'rotate(-30deg)' }}></div>
              <div className={styles.whisker} style={{ left: '5px', transform: 'rotate(-15deg)' }}></div>
              <div className={styles.whisker} style={{ right: '5px', transform: 'rotate(30deg)' }}></div>
              <div className={styles.whisker} style={{ right: '5px', transform: 'rotate(15deg)' }}></div>
            </div>
          </div>

          <div className={styles.torso}>
            <div className={styles.belt}></div>
          </div>

          <div className={styles.arms}>
            <div className={styles.arm} style={{ left: '-15px' }}></div>
            <div className={styles.arm} style={{ right: '-15px' }}></div>
          </div>

          <div className={styles.legs}>
            <div className={styles.leg} style={{ left: '15px' }}></div>
            <div className={styles.leg} style={{ right: '15px' }}></div>
          </div>

          <div className={styles.tail}></div>
        </div>

        <div className={styles.sword}></div>
        <div className={styles.sword2}></div>
      </div>

      {[...Array(5)].map((_, i) => (
        <div key={i} className={styles.shuriken} style={{
          left: `${10 + i * 20}%`,
          animationDelay: `${i * 0.3}s`
        }}>
          ⚔
        </div>
      ))}

      <div className={styles.controls}>
        {countdown !== null && !isRecording && (
          <div className={styles.countdown}>{countdown}</div>
        )}
        {isRecording && (
          <div className={styles.recording}>● RECORDING</div>
        )}
        {!isRecording && countdown === null && (
          <button onClick={startRecording} className={styles.recordButton}>
            🎥 Capture Video (10s)
          </button>
        )}
      </div>

      <div className={styles.title}>🥷 NINJA CAT DANCE 🐱</div>
    </div>
  );
}
