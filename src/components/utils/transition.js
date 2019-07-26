import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 500

const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0},
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
};

const Transition = ({ children, location }) => {
  return (
    <div>
      <TransitionGroup>
        <ReactTransition 
          key={location.pathname} 
          timeout={timeout}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]}}>
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    </div>
  );
}



export default Transition;