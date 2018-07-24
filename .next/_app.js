import React from 'react'
import firebaseInitializer from '../firebase/initialize';

export default class MyApp extends App {
  componentDidMount () {
    firebaseInitializer();
  }
}
