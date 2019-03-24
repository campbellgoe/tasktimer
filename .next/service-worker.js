self.__precacheManifest = [
  {
    "url": "/_next/static/runtime/webpack-f0c6edbea5b547edc23f.js"
  },
  {
    "url": "/_next/static/runtime/main-c0c5a1e2c07f93dba430.js"
  },
  {
    "url": "/_next/static/chunks/commons.1676748e496532e71ab5.js"
  },
  {
    "url": "/_next/static/04Na7CAkZKZ7gPPo3g~pY/pages/index.js"
  },
  {
    "url": "/_next/static/04Na7CAkZKZ7gPPo3g~pY/pages/contact.js"
  },
  {
    "url": "/_next/static/04Na7CAkZKZ7gPPo3g~pY/pages/about.js"
  },
  {
    "url": "/_next/static/04Na7CAkZKZ7gPPo3g~pY/pages/_error.js"
  },
  {
    "url": "/_next/static/04Na7CAkZKZ7gPPo3g~pY/pages/_app.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/arrow_right.svg",
    "revision": "5cb2d652c1cf3df3c6195d0055529215"
  },
  {
    "url": "static/demo.png",
    "revision": "256cd54bea46434fc8861cd0aa3ed358"
  },
  {
    "url": "static/drag_indicator.svg",
    "revision": "78310cc6df5488642946bfc08221ce22"
  },
  {
    "url": "static/favicon.ico",
    "revision": "be935853400860a8029693b80ce32331"
  },
  {
    "url": "static/icon-smol-192.png",
    "revision": "741f5a41222e5c85b8d4eb4b03ebac82"
  },
  {
    "url": "static/icon-smol.png",
    "revision": "55535e9394ab957d6f1b858b7531c250"
  },
  {
    "url": "static/logo.png",
    "revision": "09fc3fb0d205ab230a3619d59125e700"
  },
  {
    "url": "static/manifest.json",
    "revision": "72c961d45884029b18cc54634b4fbd30"
  },
  {
    "url": "static/night_mode_icon.svg",
    "revision": "145aafb72e9fef249215d2bcea3a957d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
