import { useEffect, useState } from 'react';
import Notification from "../ui/notification";
import classes from './contact-form.module.css';

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

export default function ContactForm() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
    }
  }, [requestStatus]);

  async function sendContactData(name, email, message) {
    await delay(2000);

    const body = JSON.stringify({
      name,
      email,
      message,
    });

    const response = await fetch('/api/contact', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    

    if(!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
  }

  async function contactSubmitHandler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData(enteredName, enteredEmail, enteredMessage);

      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      setRequestStatus('error');
    }
  }

  let motification;

  if(requestStatus === 'pending') {
    motification = {
      status: 'pending',
      title: 'Sending...',
      message: 'Data is on its way',
    }
  }

  if(requestStatus === 'success') {
    motification = {
      status: 'success',
      title: 'Sent...',
      message: 'Data sent successfully',
    }
  }

  if(requestStatus === 'error') {
    motification = {
      status: 'error',
      title: 'Error...',
      message: 'Data can not be sent',
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={contactSubmitHandler} >
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {motification && <Notification  title={motification.title} message={motification.message} status={motification.status} />}
    </section>
  );
}
