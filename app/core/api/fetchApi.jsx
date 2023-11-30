const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxbyRv13pvnJAyVcXHubp2cxLbtzZ6UqyH52FjqSz11DIFES14Sp437br-UF6RI_ndbSA/exec';
const PROXY_URL = "https://happy-mixed-gaura.glitch.me/";

const googleLogin = (email) => {
    const url = new URL(PROXY_URL + WEBAPP_URL);
    
    return fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  };
  

export default googleLogin;