// Page1.js
import React from 'react';

const Page1 = ({ fetchSessionToken, sessionToken }) => {
  return (
    <div className="container">
      <h1 className="mt-5 text-center">Device Risk SDK Example</h1>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={fetchSessionToken}>
          Get Session Token
        </button>
        {sessionToken && (
          <div className="mt-3">
            <strong>Session Token:</strong> {sessionToken}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page1; // Ensure Page1 is exported as default
