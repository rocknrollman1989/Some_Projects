import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import nookies from 'nookies'
import {switcher} from '../helpers/switchLanguages.helper'
// import withApolloClient from '../lib/with-apollo-client'
// import { ApolloProvider } from 'react-apollo'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    function isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
  }

    const { dispatch } = ctx.reduxStore
    const cookies = nookies.get(ctx)
    !cookies.lang ? nookies.set(ctx, 'lang', 'en') : null

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // Checking if one of states has data if not fetch all data
    // This is for initiating 
    if (isEmpty(ctx.reduxStore.getState().translation)){
      await switcher(cookies.lang, dispatch)
    }
    return { pageProps }
  }



  render () {
    const { Component, pageProps, reduxStore, apolloClient} = this.props
    return (
      <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
