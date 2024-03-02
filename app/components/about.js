import React from 'react'
import { Button } from '@nextui-org/button'

export default function About() {
  return (
    <div>
        <div className='d-md-flex aboutUs p-5 align-items-center'>
        <div className='col-md ms-5 p-5'>
          <h2 className='text-4xl font-extrabold mb-5'>
            Building Innovative Web Solutions with Full Stack Development
          </h2>
          <p>
            With expertise in a wide range of programming languages and frameworks, I am capable of delivering high-quality web applications that meet the needs of businesses and users alike.
          </p>
          <div className='mt-3'>
            <Button className='my-3' variant='shadow' color='primary'>
              Contact Me
            </Button>
          </div>
        </div>
        <div className='col-md d-md-none d-lg-block overflow-visible'>
          <spline-viewer className="overflow-visible" url="https://prod.spline.design/Hh1EpEIH2cvHGizF/scene.splinecode"/>
        </div>
      </div>
    </div>
  )
}
