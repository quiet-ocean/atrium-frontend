import React from 'react'
// import emoji from 'react-easy-emoji'

export const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {/* {props.symbol} */}
    <div dangerouslySetInnerHTML={{ __html: props.symbol }} />
  </span>
)
// export Emoji;
