import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import Button from '@/components/common/button'
import tree1 from '@/assets/tree1.svg'
import moto from '@/assets/moto.svg'
import pavilion from '@/assets/pavilion.svg'
import tree2 from '@/assets/tree2.svg'
import temple from '@/assets/templeonline.svg'
import burner from '@/assets/burner.svg'
import stall from '@/assets/stall.svg'
import teabox from '@/assets/teabox.svg'
import tree3 from '@/assets/tree3.svg'
import Title from '@/components/common/title'
import C1 from '@/assets/littleC1.svg'
import C2 from '@/assets/littleC2.svg'
import C3 from '@/assets/OnlineCould.svg'
import C4 from '@/assets/OnlineCould2.svg'
import fly from '@/assets/fly.gif'
import sonaR from '@/assets/sonaR.gif'
import sonaL from '@/assets/sonaL.gif'
import samR from '@/assets/samR.gif'
import samL from '@/assets/samL.gif'
import carR from '@/assets/carR.gif'
import carL from '@/assets/carL.gif'
import chiR from '@/assets/chiR.gif'
import chiL from '@/assets/chiL.gif'
import umbR from '@/assets/umbR.gif'
import umbL from '@/assets/umbL.gif'

export default function Pilgrimage() {
  const [x, setX] = useState(0);
  const [direction, setDirection] = useState('down');
  const [isMoving, setIsMoving] = useState(false);
  const [samX, setSamX] = useState(0);
  const [carX, setCarX] = useState(0);
  const [chiX, setChiX] = useState(0);
  const [umbX, setUmbX] = useState(0);
  const speed = 5;

  const isMovingRef = useRef(isMoving);
  const directionRef = useRef(direction);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft': // 按下左移鍵
        setDirection('left');
        setIsMoving(true);
        break;
      case 'ArrowRight': // 按下右移鍵
        setDirection('right');
        setIsMoving(true);
        break;
      default:
        break;
    }
  };

  const handleKeyUp = () => {
    setIsMoving(false);
  };

  const updateCharacterPosition = () => {
    setX((prevX) => {
      if (isMovingRef.current) {
        if (directionRef.current === 'left') {
          return prevX - speed;
        } else if (directionRef.current === 'right') {
          return prevX + speed;
        }
      }
      return prevX;
    });
  };

  useEffect(() => {
    const character = document.getElementById('down');
    character.style.transform = `translateX(${x}px)`;
  }, [x]);

  useEffect(() => {
    isMovingRef.current = isMoving;
    directionRef.current = direction;
  }, [isMoving, direction]);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      updateCharacterPosition();
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isMoving) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrameId);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMoving]);

  useEffect(() => {
    const samCharacter = document.getElementById('sam');
    setSamX(x - 50); // 將 sam 的位置設定為 x - 50，跟隨在 sona 後面
    samCharacter.style.transform = `translateX(${samX}px)`;
  }, [x, samX]);
  useEffect(() => {
    const carCharacter = document.getElementById('car');
    setCarX(x - 50); 
    carCharacter.style.transform = `translateX(${carX}px)`;
  }, [x, carX]);
  useEffect(() => {
    const chiCharacter = document.getElementById('chi');
    setChiX(x - 50); 
    chiCharacter.style.transform = `translateX(${chiX}px)`;
  }, [x, chiX]);
  useEffect(() => {
    const umbCharacter = document.getElementById('umb');
    setUmbX(x - 50); 
    umbCharacter.style.transform = `translateX(${umbX}px)`;
  }, [x, umbX]);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className={styles.parent_container}>
      <div className={`${styles.flex_row2}`}>
        <div className={`${styles.fly}`}>
          <Image src={fly} alt="cloud" width={520}></Image>
        </div>
        <div className={`${styles.C1}`}>
          <Image src={C1} alt="cloud" width={520}></Image>
        </div>
        <div className={`${styles.C3}`}>
          <Image src={C3} alt="cloud" width={1150}></Image>
        </div>
        <div className={`${styles.C4}`}>
          <Image src={C4} alt="cloud" width={750}></Image>
        </div>
        <div className={`${styles.C2}`}>
          <Image src={C2} alt="cloud" width={520}></Image>
        </div>
      </div>
      <Title
        text="遶境online"
        text2="PILGRIMAGE ONLINE"
        lineColor="hot_pink"
        className={`${styles.title}`}
      />
      <div className={`${styles.flex_row}`}>
        <Image
          src={tree1}
          alt=""
          width="535"
          className={`${styles.tree1}`}
        ></Image>
        <Image
          src={moto}
          alt=""
          width="235"
          className={`${styles.moto}`}
        ></Image>
        <Image
          src={pavilion}
          alt=""
          width="500"
          className={`${styles.pavilion}`}
        ></Image>
        <Image
          src={tree2}
          alt=""
          width="200"
          className={`${styles.tree2}`}
        ></Image>
        <Image
          src={temple}
          alt=""
          width="1050"
          className={`${styles.temple}`}
        ></Image>
        <Image
          src={burner}
          alt=""
          width="250"
          className={`${styles.burner}`}
        ></Image>
        <Image
          src={stall}
          alt=""
          width="355"
          className={`${styles.stall}`}
        ></Image>
        <Image
          src={teabox}
          alt=""
          width="70"
          className={`${styles.teabox}`}
        ></Image>
        <Image
          src={tree3}
          alt=""
          width="600"
          className={`${styles.tree3}`}
        ></Image>
      </div>
      <div>
      <Image
          id="umb"
          alt="Umb"
          src={direction === 'left' ? umbL : umbR}
          className={`${styles.umb}`}
        />
      <Image
          id="chi"
          alt="Chi"
          src={direction === 'left' ? chiL : chiR}
          className={`${styles.chi}`}
        />
      <Image
          id="car"
          alt="Car"
          src={direction === 'left' ? carL : carR}
          className={`${styles.car}`}
        />
        <Image
          id="sam"
          alt="Sam"
          src={direction === 'left' ? samL : samR}
          className={`${styles.sam}`}
        />
        <Image
          id="down"
          alt="sona"
          src={direction === 'left' ? sonaL : sonaR}
          className={`${styles.sona}`}
        />
      </div>
    </div>
  )
}

Pilgrimage.getLayout = (page) => <>{page}</>
