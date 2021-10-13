import React from 'react';
import './ThemeBtnComponent.css';

const ThemeBtnComponent = (props:any) => {
  const docIdx = props.docIdx;
  
  return (
    <div className="ThemeBtnComponent" data-testid="ThemeBtnComponent">
      <button data-doc-idx={docIdx} id={props.id} onClick={props.onClick} className={"btn "+props.className}>
        {props.children}
      </button>
    </div>
  );
};

export default ThemeBtnComponent;
