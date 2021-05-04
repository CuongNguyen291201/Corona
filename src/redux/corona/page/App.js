import React from 'react'
import Global from '../components/Global';
import Country from '../components/Country';

const App = () => {
  return (
    <>
      <Global />
      <Country /> 
    </>
  )
}

export default React.memo(App);
