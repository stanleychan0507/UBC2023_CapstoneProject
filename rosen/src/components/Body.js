import React from 'react'
import Button from 'react-bootstrap/Button';

function Body() {
  return (
    <>
        <div className="buttons">
            <Button variant='primary' className='upload'>Upload</Button>
            <Button variant='primary' className='run'>Run</Button>
        </div>
        
        <div className='imagebox'>
            <div className='title'>
                <h1 className='reference'>Reference Photo</h1>
                <div className='referencebox'>
                    
                </div>
                
            </div>
            <div className='title'>
                <h1 className='video'>Video</h1>

                <div className='videobox'>
                    
                </div>
                
            </div>
            
        </div>
    </>
  
  )
}

export default Body;
