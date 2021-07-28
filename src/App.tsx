import React, { FC } from 'react';
import { Person } from './component/Person';
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Counter } from './component/Counter';

const App: FC = () => {
  const name: string = "usman"
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Person name={name} email={name} />
      <Counter />
    </Provider>
  );
}

export default App;
