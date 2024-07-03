import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SigmaDeviceManager from '@socure-inc/device-risk-sdk';
import Page1 from './components/Page1'; // Adjust the path if necessary

const sigmaDeviceOptions = {
  sdkKey: process.env.GOVCLOUD_SDK_KEY,
  useSocureGov: true
};

  // Initialize SigmaDeviceManager outside of useEffect
  SigmaDeviceManager.initialize(sigmaDeviceOptions);

const App = () => {
  const [sessionToken, setSessionToken] = useState('');



  const fetchSessionToken = () => {
    SigmaDeviceManager.getSessionToken()
      .then((sessionToken) => {
        console.log("sessionToken", sessionToken);
        setSessionToken(sessionToken);
      })
      .catch(err => {
        console.error('Error fetching session token:', err);
        // Handle error state or feedback to the user
      });
  };

  return (
    <div>
      <Page1 fetchSessionToken={fetchSessionToken} sessionToken={sessionToken} />
    </div>
  );
};

export default App;
