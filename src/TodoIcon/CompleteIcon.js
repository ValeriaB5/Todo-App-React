import React from 'react';
import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? ' rgb(243, 219, 80)' : 'white'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };