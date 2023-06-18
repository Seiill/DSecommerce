import { React,useState } from 'react'

import { FormContainer, FormGroup, Label, Input, Button, TextArea  } from './contactUsElements'
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Envío de los datos a través de PHP
        const url = '../../../form.php';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data); // Respuesta del servidor
            // Realizar acciones adicionales según la respuesta del servidor
          })
          .catch(error => {
            console.error(error);
            // Manejar el error
          });
      };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nombre:</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensaje:</Label>
          <TextArea id="message" name="message" value={formData.message} onChange={handleChange}></TextArea>
        </FormGroup>
        <Button type="submit">Enviar</Button>
      </form>
    </FormContainer>
  )
}

export default ContactUs