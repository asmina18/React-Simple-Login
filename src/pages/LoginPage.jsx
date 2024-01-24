import { useState } from "react";

// Definerer en funktionel komponent kaldet LoginPage
export const LoginPage = () => {
  // State-hook til at opbevare brugerdata
  const [userData, setUserData] = useState({});

  // Asynkron funktion til at håndtere log ind-formularen
  async function handleLogin(event) {
    // Forhindrer standardformularadfærd (sidegenindlæsning)
    event.preventDefault();

    // URL'en til serverens login-endepunkt
    let url = "http://localhost:8081/sign-in";

    // Opretter en formdata med email og password fra formularen
    let body = new URLSearchParams();
    body.append("email", event.target.email.value);
    body.append("password", event.target.password.value);

    // Indstillinger for fetch-anmodningen
    let options = {
      method: "POST",
      body: body,
    };

    try {
      // Udfører fetch-anmodningen og venter på svaret
      let res = await fetch(url, options);
      
      // Udpakker JSON-svaret og opdaterer brugerdata
      let data = await res.json();
      setUserData(data);
    } catch (err) {
      // Håndterer fejl ved at logge dem i konsollen
      console.error(err);
    }
  }


  return (
    <>
      <h1>Login</h1>

      {/* Viser brugeroplysninger, hvis de er tilgængelige */}
      <p>{userData?.name}</p>
      <p>{userData?.email}</p>

      {/* Formular til indsendelse af login-oplysninger */}
      <form onSubmit={(event) => handleLogin(event)}>
        {/* Input-felt til email */}
        <label>
          Email:
          <input name="email" type="text" />
        </label>

        {/* Input-felt til password */}
        <label>
          Password:
          <input name="password" type="password" />
        </label>

        {/* Knappen til at indsende login-formularen */}
        <input value="Login" type="submit" />
      </form>
    </>
  );
};
