import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { CoursesList } from '../CoursesList';
import Container from '../Components/Container';

function CourseDetails() {

  const navigate = useNavigate();
  const location = useLocation();

  const param= useParams()

  // const [courseDetails, setCourseDetails] = useState({});

  // useEffect(()=>{

  //   const foundValue= CoursesList.find((item)=>item.id== param.id);
  //   setCourseDetails(foundValue)},[]
  // )

  console.log(param)
  return (
    <Container>

      <div className="container mt-5">
      <div className="btn btn-outline-dark mb-5" onClick={() => navigate(-1)}>Back</div>

        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">{location.state.name}</h5>
            <p class="card-text">{location.state.desp}</p>
            <h4 class="">&#8377; {location.state.price}</h4>
            <p class="card-text">{location.state.details}</p>

            <div className="btn btn-sm btn-dark mt-2">Enroll now</div>
          </div>
        </div>

        </div>
    </Container>
  )
}

export default CourseDetails
