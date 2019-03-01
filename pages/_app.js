import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout.js'
import Head from 'next/head';
class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#c6b3fb"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>
          <title>TaskTimer - make timers for tasks</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp;
