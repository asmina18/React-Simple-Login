import React, { useState } from 'react';

// Definerer en komponent kaldet SignUpPage
export function SignUpPage() {
  // State-variabel til at gemme meddelelser fra serveren (f.eks. om tilmeldingssuccess eller fejl)
  const [message, setMessage] = useState();

  // Funktion, der håndterer tilmeldingsformularen, kaldes ved indsendelse
  async function handleSignUp(event) {
    // Forhindrer, at standardformularadfærd udløses (siden genindlæses)
    event.preventDefault();

    // URL'en til serverens tilmeldingsendepunkt
    let url = "http://localhost:8881/sign-up";

    // Opretter en samling af brugeroplysninger fra formularen
    let body = new URLSearchParams();
    body.append('name', event.target.username.value);
    body.append('email', event.target.email.value);
    body.append('password', event.target.password.value);

    // Indstillinger for fetch-anmodningen
    let options = {
      method: "POST",
      body: body,
    };

    try {
      // Sender tilmeldingsoplysninger til serveren og venter på svar
      let res = await fetch(url, options);

      // Konverterer svaret fra serveren til JSON og opdaterer meddelelsesstate
      let data = await res.json();
      setMessage(data);
    } catch (error) {
      // Håndterer fejl ved at logge dem i konsollen
      console.error(error);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      
      {/* Viser meddelelse fra serveren, hvis der er en */}
      {message && <b>{message}</b>}

      {/* Formular til at indsende tilmeldingsoplysninger */}
      <form onSubmit={(event) => handleSignUp(event)}>
    
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        {/* Knappen til at indsende tilmeldingsformularen */}
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
}
