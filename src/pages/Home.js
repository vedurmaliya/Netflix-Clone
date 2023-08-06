import React from 'react'
import Head from '../Components/Head'
import Row from '../Components/Row'
import requests from '../requests'

function Home() {
  return (
    <>

      <Head></Head>
      <Row rowId='1' rowHeading='Up Coming' URL={requests.Upcoming} />
      <Row rowId='2' rowHeading='Top Rated' URL={requests.TopRated} />
      <Row rowId='3' rowHeading='Popular' URL={requests.Popular} />
      <Row rowId='4' rowHeading='Trending' URL={requests.Trending} />
      {/* <Row rowId='5' rowHeading='Comedy' URL={requests.Comedy} /> */}
      {/* <Row rowId='6' rowHeading='Horror' URL={requests.Horror} /> */}
      {/* <Row rowId='7' rowHeading='History' URL={requests.History} /> */}
      {/* <Row rowId='8' rowHeading='Adventure' URL={requests.Adventure} /> */}
    </>
  )
}

export default Home