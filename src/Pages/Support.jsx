import React, { useContext } from 'react'
import { AppDetails } from '../App'
import Container from '../Components/Container'

function Support() {

  const nikhilcontext = useContext(AppDetails)
  return (
    <Container>
      <div className="container mt-5">
              <h1>Call us at +91 99247 68290</h1>
              <h4>{nikhilcontext.username}</h4>
          </div>
    </Container>
  )
}

export default Support
