import React, { } from 'react'
import { useSelector } from 'react-redux'
import useChangeFrameAfterInterval from '../../../hooks/useChangeFrameAfterInterval'
import './styles.scss'

function Frame10() {

    const prots = useSelector((state) => state.foods.prots)
    useChangeFrameAfterInterval(2)

    return (
        <div id='frame-10'>
           <ul>
                <li>Proteínas.</li>
            </ul>

            <div>
                <img src={require(prots[2])} alt='Proteína 3' className='icon' />
                <img src={require(prots[3])} alt='Proteína 4' className='icon' />
            </div>
        </div>
    )
}

export default Frame10