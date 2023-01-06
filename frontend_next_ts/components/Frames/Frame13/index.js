import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import styles from './Frame13.module.scss'
import Image from 'next/image'

function Frame13() {

    const fats = useSelector((state) => state.foods.fats)
    useChangeFrameAfterInterval(4)

    return (
        <div id={styles['frame-13']}>
           <ul>
                <li>Gorduras.</li>
            </ul>

            <div>
                <Image
                    src={fats[2]}
                    alt='Gordura 3'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
                <Image
                    src={fats[3]}
                    alt='Gordura 4'
                    width={500}
                    height={500}
                    className={styles.icon}
                />
            </div>
        </div>
    )
}

export default Frame13