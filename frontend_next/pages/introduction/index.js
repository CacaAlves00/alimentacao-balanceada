import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './../../styles/Introduction.module.scss'
import Image from 'next/image'
import useAnimationFrames from '../../hooks/useAnimationFrames'
import Narrator from '../../components/Narrator'

function IntroductionPage() {

  const animationFrameIdx = useSelector(state => state.animation.animationFrameIdx)
  const [displayNarrator, setDisplayNarrator] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (animationFrameIdx === 13)
      setDisplayNarrator(false)
    else if (animationFrameIdx === 15)
      router.replace('/menu')
  }, [animationFrameIdx])

  return (
    <article id={styles['introduction']}>
      <header>
        <Image
          src='/imgs/cherry.svg'
          alt='Cherry'
          width={500}
          height={500}
          className={`icon ${styles.icon}`}
        />
        <h1>Introdução</h1>
      </header>

      <main>
        {useAnimationFrames(animationFrameIdx)}
      </main>

      {displayNarrator && <Narrator />}

      <footer>
        <Image
          src='/imgs/banana.svg'
          alt='Banana'
          width={500}
          height={500}
          className={`icon ${styles.icon}`}
        />
      </footer>
    </article>
  )
}

export default IntroductionPage