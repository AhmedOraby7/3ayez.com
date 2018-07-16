import React, { Component } from 'react';
import fireBase from 'firebase';

import LoginForm from '../components/LoginForm'

export default class App extends Component {

  componentWillMount(){
    fireBase.initializeApp(
        {
          apiKey: 'AIzaSyCw2JeroeUwQslUfAh37w-V9GSUpspDv_o',
          authDomain: 'ayez-playground.firebaseapp.com',
          databaseURL: 'https://ayez-playground.firebaseio.com',
          projectId: 'ayez-playground',
          storageBucket: 'ayez-playground.appspot.com',
          messagingSenderId: '305895668239'
        })
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
