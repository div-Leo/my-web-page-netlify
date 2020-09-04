import React, { useRef } from 'react';
import { useScrollState } from 'scrollmonitor-hooks';

function Revealer ({children, revealIn, revealOut}) {
  const ref = useRef(null);
  const scrollState = useScrollState(ref);

  let animate = revealIn;
  if (scrollState.isFullyInViewport){
    animate = revealIn;
  } else if (scrollState.isBelowViewport) {
    animate = revealOut;
  }
  if (children.props.className) animate = animate += ' ' + children.props.className;

  return React.cloneElement(children, {
    className: animate,
    ref: ref
  });
}

export default Revealer;
