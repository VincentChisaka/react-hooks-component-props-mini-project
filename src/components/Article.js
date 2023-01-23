import React from 'react'

function Article({title,preview, minutes,date=  "January 1, 1970"}) {

  return (
    <article>
        <h3>{title}</h3>
        <small>{date + ' .'} <span style={{marginLeft:'10px'}}>
            {(minutes < 30) ? '☕️'.repeat(Math.ceil(minutes/5)):
            (minutes >= 30) ? '🍱'.repeat(Math.ceil(minutes/10)): ''}
            {minutes + 'minutes'}</span></small>
        <p>{preview}</p>
    </article>
  )
}

export default Article