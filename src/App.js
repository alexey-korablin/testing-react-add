import React from 'react';

import './app.scss';
import Header from './component/header';
import Headline from './component/headline';

const tempProps = [
  {
    fName: 'Joe',
    lName: 'Doe',
    email: 'joe_doe@example.com',
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div>
      <Header></Header>
      <section className='main'>
        <Headline
          header='Posts'
          description='Click the button to render posts!'
          tempProps={tempProps}
        ></Headline>
      </section>
    </div>
  );
}

export default App;
