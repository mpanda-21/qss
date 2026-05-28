
import { db } from '../firebase.js';

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const firstName = document.getElementById('firstName').value;

  const lastName = document.getElementById('lastName').value;

  const hospital = document.getElementById('hospital').value;

  const phone = document.getElementById('phone').value;

  const email = document.getElementById('email').value;

  const enquiryType = document.getElementById('enquiryType').value;

  const products = document.getElementById('products').value;

  const message = document.getElementById('message').value;

  try {

    await addDoc(collection(db, 'queries'), {

      firstName,
      lastName,
      hospital,
      phone,
      email,
      enquiryType,
      products,
      message,

      createdAt: serverTimestamp()

    });

    document.getElementById('success-msg').style.display = 'block';

    form.reset();

    console.log('Enquiry submitted');

  } catch (error) {

    console.error(error);

    alert('Error submitting enquiry');

  }

});

