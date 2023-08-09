import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './pilgri.module.sass'
import sonaR from '@/assets/sonaR.gif'
import sonaRIdle from '@/assets/sonaRIdle.gif'
import sonaL from '@/assets/sonaL.gif'
import sonaLIdle from '@/assets/sonaLIdle.gif'
import samR from '@/assets/samR.gif'
import samRIdle from '@/assets/samRIdle.gif'
import samL from '@/assets/samL.gif'
import samLIdle from '@/assets/samLIdle.gif'
import carR from '@/assets/carR.gif'
import carRIdle from '@/assets/carRIdle.gif'
import carL from '@/assets/carL.gif'
import carLIdle from '@/assets/carLIdle.gif'
import chiR from '@/assets/chiR.gif'
import chiRIdle from '@/assets/chiRIdle.gif'
import chiL from '@/assets/chiL.gif'
import chiLIdle from '@/assets/chiLIdle.gif'
import umbR from '@/assets/umbR.gif'
import umbRIdle from '@/assets/umbRIdle.gif'
import umbL from '@/assets/umbL.gif'
import umbLIdle from '@/assets/umbLIdle.gif'

export default function Teams() {
  const [x, setX] = useState(0)
  const [direction, setDirection] = useState('down')
  const [isMoving, setIsMoving] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const [sonaSrc, setSonaSrc] = useState(0)
  const [samSrc, setSamSrc] = useState(0)
  const [carSrc, setCarSrc] = useState(0)
  const [chiSrc, setChiSrc] = useState(0)
  const [umbSrc, setUmbSrc] = useState(0)
  const [samX, setSamX] = useState(0)
  const [carX, setCarX] = useState(0)
  const [chiX, setChiX] = useState(0)
  const [umbX, setUmbX] = useState(0)
  const speed = 5

  const isMovingRef = useRef(isMoving)
  const directionRef = useRef(direction)

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft': // 按下左移鍵
        setDirection('left')
        setIsMoving(true)
        break
      case 'ArrowRight': // 按下右移鍵
        setDirection('right')
        setIsMoving(true)
        break
      default:
        break
    }
  }

  const handleKeyUp = () => {
    setIsMoving(false)
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  useEffect(() => {
    if (isMoving) {
      setIsIdle(false)
      setSonaSrc(direction === 'left' ? sonaL : sonaR)
    } else {
      setIsIdle(true)
      setSonaSrc(direction === 'left' ? sonaLIdle : sonaRIdle)
    }
  }, [isMoving, direction])

  useEffect(() => {
    if (isMoving) {
      setIsIdle(false)
      setSamSrc(direction === 'left' ? samL : samR)
    } else {
      setIsIdle(true)
      setSamSrc(direction === 'left' ? samLIdle : samRIdle)
    }
  }, [isMoving, direction])

  useEffect(() => {
    if (isMoving) {
      setIsIdle(false)
      setCarSrc(direction === 'left' ? carL : carR)
    } else {
      setIsIdle(true)
      setCarSrc(direction === 'left' ? carLIdle : carRIdle)
    }
  }, [isMoving, direction])

  useEffect(() => {
    if (isMoving) {
      setIsIdle(false)
      setChiSrc(direction === 'left' ? chiL : chiR)
    } else {
      setIsIdle(true)
      setChiSrc(direction === 'left' ? chiLIdle : chiRIdle)
    }
  }, [isMoving, direction])

  useEffect(() => {
    if (isMoving) {
      setIsIdle(false)
      setUmbSrc(direction === 'left' ? umbL : umbR)
    } else {
      setIsIdle(true)
      setUmbSrc(direction === 'left' ? umbLIdle : umbRIdle)
    }
  }, [isMoving, direction])

  const updateCharacterPosition = () => {
    setX((prevX) => {
      if (isMovingRef.current) {
        if (directionRef.current === 'left') {
          return prevX - speed
        } else if (directionRef.current === 'right') {
          return prevX + speed
        }
      }
      return prevX
    })
  }

  useEffect(() => {
    const character = document.getElementById('down')
    character.style.transform = `translateX(${x}px)`
  }, [x])

  useEffect(() => {
    isMovingRef.current = isMoving
    directionRef.current = direction
  }, [isMoving, direction])

  useEffect(() => {
    let animationFrameId

    const animate = () => {
      updateCharacterPosition()
      animationFrameId = requestAnimationFrame(animate)
    }

    if (isMoving) {
      animationFrameId = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(animationFrameId)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMoving])

  useEffect(() => {
    const samCharacter = document.getElementById('sam')
    setSamX(x - 50) // 將 sam 的位置設定為 x - 50，跟隨在 sona 後面
    samCharacter.style.transform = `translateX(${samX}px)`
  }, [x, samX])
  useEffect(() => {
    const carCharacter = document.getElementById('car')
    setCarX(x - 50)
    carCharacter.style.transform = `translateX(${carX}px)`
  }, [x, carX])
  useEffect(() => {
    const chiCharacter = document.getElementById('chi')
    setChiX(x - 50)
    chiCharacter.style.transform = `translateX(${chiX}px)`
  }, [x, chiX])
  useEffect(() => {
    const umbCharacter = document.getElementById('umb')
    setUmbX(x - 50)
    umbCharacter.style.transform = `translateX(${umbX}px)`
  }, [x, umbX])
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div>
      <Image id="umb" alt="Umb" src={umbSrc} className={`${styles.umb}`} />
      <Image id="chi" alt="Chi" src={chiSrc} className={`${styles.chi}`} />
      <Image id="car" alt="Car" src={carSrc} className={`${styles.car}`} />
      <Image id="sam" alt="Sam" src={samSrc} className={`${styles.sam}`} />
      <Image
        id="down"
        alt="sona"
        src={isIdle ? sonaSrc : direction === 'left' ? sonaL : sonaR}
        className={`${styles.sona}`}
      />
    </div>
  )
}

Teams.getLayout = (page) => <>{page}</>
