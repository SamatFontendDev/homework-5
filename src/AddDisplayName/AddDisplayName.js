import React, { Component } from 'react';
import { render } from '@testing-library/react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (WrappedComponent) => {
  return class extends Component {
    static displayName = WrappedComponent.displayName ? `HOC${WrappedComponent.displayName}` : 'HOCComponent'
  }
}
