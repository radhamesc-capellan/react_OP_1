import React from 'react'
import { Contact } from '../../models/contact.class'
import { STATUS } from '../../models/status.enum';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Radhames', 'Capellan', 'radhamesc@gmail.com', STATUS.CONNECTED);

  return (
    <div>
        <div>
            <h1>Lista de Contactos:</h1>
        </div>
        <ContactComponent contact={ defaultContact }></ContactComponent>
    </div>
  )
}

export default ContactListComponent