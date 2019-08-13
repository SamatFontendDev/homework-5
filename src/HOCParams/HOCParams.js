import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (WrappedComponent, params) => {
  return class extends Component {
    render() {
      this.props = {...this.props, params}
      return(
        <WrappedComponent {...this.props}/>
      )
    }
  }
}
