import React from 'react'

export default function Video() {
  return (
    <div>
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-md-12">
                <video className='w-100' controls poster="/static/media/video.6da95078.png"  src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"></video>
                </div>
            </div>
        </div>
      
    </div>
  )
}
