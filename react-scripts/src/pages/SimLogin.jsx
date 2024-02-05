import React from 'react';
import propTypes from 'prop-types';

function SimLogin({ setUser }) {
  return (
    <div>
      <button onClick={() => setUser('Eva')} className="btn btn-primary me-1">Eva</button>
      <button onClick={() => setUser('Aude')} className="btn btn-primary">Aude</button>
    </div>
  );
}

SimLogin.propTypes = {
  setUser: propTypes.func.isRequired
}

export default SimLogin;