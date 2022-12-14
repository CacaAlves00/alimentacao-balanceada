import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function GoBackToHome({ hideComponent }) {

  const navigate = useNavigate()

  function goBackToHome() {
    hideComponent()
    navigate('/')
  }

  return (
    <section id='go-back-to-home'>
      <Card id='card'>
        <Card.Body>
          <Card.Title>Sair</Card.Title>
          <Card.Text>
            Tem certeza que deseja voltar à tela inicial ?
          </Card.Text>

        </Card.Body>

        <div id='button-container'>
          <Button variant='success' onClick={goBackToHome}>Ir para o tela inicial</Button>
          <Button variant='outline-success' onClick={hideComponent}>Ficar aqui</Button>
        </div>
      </Card>
    </section>
  )
}

export default GoBackToHome