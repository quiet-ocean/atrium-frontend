import React from 'react'
// import emoji from 'react-easy-emoji'

export const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
    {/* {emoji(props.symbol) as React.ElementType<span>} */}
    {/* {new DOMParser().parseFromString(props.symbol, "text/html")} */}
    {/* {String.fromCodePoint(props.symbol)} */}
  </span>
)
// export Emoji;
