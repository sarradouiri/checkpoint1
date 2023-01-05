import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Button } from 'react-bootstrap';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className="App">
      
      <h1>Veuillez s'inscrire sur Notre site  </h1>
      
     </div>
      <InputGroup className="Nom">
        <InputGroup.Text id="basic-addon1">Entrer votre nom</InputGroup.Text>
        <Form.Control
          placeholder="Nom"
          aria-label="Nom"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className="">
    
    <h2></h2>
    
   </div>
      <InputGroup className="Prenom">
      <InputGroup.Text id="basic-addon2">Entrer votre prénom</InputGroup.Text>
        <Form.Control
          placeholder="Prénom"
          aria-label="Prénom"
          aria-describedby="basic-addon2"
        />
        
      </InputGroup>
      <div className="">
    
    <h2></h2>
    
   </div>

      <InputGroup className="age">
        <InputGroup.Text>age</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>ans</InputGroup.Text>
      </InputGroup>
      <div className="">
    
    <h2></h2>
    
   </div>
      <InputGroup className="femme">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="femme" />
      </InputGroup>
      <div className="">
    
    <h2></h2>
    
   </div>
      <InputGroup className="homme">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="homme" />
      </InputGroup>
      <div className="">
    
    <h2></h2>
    
   </div>
      <InputGroup>
        <InputGroup.Text> Commentaire</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Commentaire" />
      </InputGroup>
      <div className="">
    
    <h2></h2>
    
   </div>
      <div className="boutton">
    
      <Button >S'inscrire</Button>
  
      
     </div>
    </div>
  )
}

export default App ;

