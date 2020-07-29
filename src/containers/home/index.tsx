import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>home</h1>
      <ul>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/editor">editor</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
