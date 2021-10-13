import React from 'react';
import './ActivityLoader.css';
import { createPortal } from 'react-dom';

const ActivityLoader = () => {

  const node = document.getElementById('activity_loader') as HTMLElement;

  return createPortal(
    <div className="ActivityLoader" data-testid="ActivityLoader">
      <div className="activityDialogue">
        <img src="img/three-dots.svg" alt="loader"/>
      </div>
    </div>,
    node
  )
};

export default ActivityLoader;
