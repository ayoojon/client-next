import React from 'react'

export default function index() {
    return (
        <div className="my-12 px-6 md:px-10 lg:px-14">
        <Services className="mb-8" />
        {/* <EventSearch /> */}
        <AllEvents className="mb-8 mt-6" />
        <AllServices />
      </div>
    )
}
