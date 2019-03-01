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
          <meta name="Description" content="Track time spent on tasks."/>
          <meta property="og:title" content="Task timer"/>
          <meta property="og:description" content="Track time spent on tasks."/>
          <meta property="og:image" content="/static/demo.png"/>
          <meta property="og:url" content="/"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="og:site_name" content="TaskTimer"/>
          <meta name="twitter:image:alt" content="Task timer graphic"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon.ico"/>
          <title>TaskTimer - track time spent on tasks</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp;
