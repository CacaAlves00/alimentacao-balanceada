import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Feedback from '../Feedback'
import useAnswer from './hooks/useAnswer'
import useFoodsOnGame from './hooks/useFoodsOnGame'
import Plate from './Plate'
import audio1 from './../../audios/d&d-1.wav'
import audio2 from './../../audios/d&d-2.wav'
import audio3 from './../../audios/d&d-3.wav'
import './styles.scss'
import usePlayAudio from '../../hooks/usePlayAudio'

/*
    If it's missing 1 food, the missing food will be a fat
    If it's missing 2 foods, the missing foods will be a fat and a prot

    if (nOfMissingFood === 1)
            setFoodsOnPlate([randomCarb, randomProt])
        else if (nOfMissingFood === 2)
            setFoodsOnPlate([randomCarb])
*/

function DragAndDrop() {

    const [round, setRound] = useState(0)
    const [showFeedback, setShowFeedback] = useState(false)
    const [curAudioBeingPlayed, setCurAudioBeingPlayed] = useState()

    const setUpAnswer =
        useAnswer(howMuchFoodIsMissing, setShowFeedback, increaseRound)

    const [mapFoodsOnGameToFoods, setUpFoodsState] = useFoodsOnGame()

    const navigate = useNavigate()

    usePlayAudio(curAudioBeingPlayed)

    useEffect(() => {
        setUpFoodsState()
        setUpAnswer()
    }, [round])

    useEffect(() => {
        if (!showFeedback)
            setUpAudio()
    }, [showFeedback])

    function setUpAudio() {
        if (round === 0)
            setCurAudioBeingPlayed(audio1)
        if (round === 2)
            setCurAudioBeingPlayed(audio2)
        if (round === 4)
            setCurAudioBeingPlayed(audio3)
    }

    function howMuchFoodIsMissing() {
        const isItMissing1Food = (round === 0 || round === 1)
        const isItMissing2Foods = (round === 2 || round === 3)
        const isItMissingAllFoods = (round === 4)

        return (
            isItMissing1Food ? 1 :
                isItMissing2Foods ? 2 :
                    3
        )

    }

    function isDragAndDropOver() {
        return round === 5
    }

    function increaseRound() {
        setRound((state) => state + 1)
    }

    function handleFeedbackButtonClick() {

        if (isDragAndDropOver())
            navigate('/menu')

        setShowFeedback(false)
    }

    return (
        <>
            {
                showFeedback ?
                    <Feedback variant={isDragAndDropOver() ? 'end' : 'positive'}
                        callback={handleFeedbackButtonClick} />
                    :
                    <div id='drag-and-drop'>
                        <h1>Arraste-e-solte</h1>

                        <div id='balanced-alimentation'>
                            <Plate
                                elementClass='drag-and-drop-plate'
                                nOfMissingFood={howMuchFoodIsMissing()} />

                            {
                                mapFoodsOnGameToFoods()
                            }
                        </div>
                    </div>
            }
        </>
    )
}

export default DragAndDrop