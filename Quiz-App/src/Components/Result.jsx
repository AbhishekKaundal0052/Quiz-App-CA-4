import React from 'react'

export default function Result(props) {
  
return (
    <div className='resultBox'>
      <p className='result'>FINAL RESULTS!!!</p>
      <h2>{props.score} out of 5 - {(props.score/5)*100}%</h2>
      <button className='Againbtn' onClick={props.again}>Restart Quizzz</button>
    </div>
  )
}