import React from 'react'
import Layout from './components/Layout'
import Banner from './components/courses/Banner'
import Descriptions from './components/courses/Descriptions'
import Lecturer from './components/courses/Lecturer'

const Courses = () => {
  return (
    <Layout>
      <Banner />

      {/* button */}
      {/* <p>button</p> */}

      {/* courses description */}
      <Descriptions />

      {/* teacher */}
      <Lecturer />
    </Layout>
  )
}

export default Courses
