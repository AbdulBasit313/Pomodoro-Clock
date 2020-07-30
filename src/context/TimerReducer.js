import React, { useReducer } from "react";


let TimerReducer = (state, action) => {
  switch (action.type) {
    case 'decrementTimer':
      return {
        ...state,
        timer: state.timer - 1
      }
  }
}