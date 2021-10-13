import React from 'react';
import { createPortal } from 'react-dom';
import './AlertComponent.css';
import ThemeBtnComponent from '../../customcontrols/ThemeBtnComponent/ThemeBtnComponent';

const AlertComponent = (props:any) => {
  const node = document.getElementById("alert") as HTMLElement;

  const tag:number = (props.tag)?props.tag:0;
  const open:Boolean = props.open;
  const title = props.title;
  const message = props.message;
  const okButtonText = (props.okButtonText)?props.okButtonText:"Ok";
  const cancelButtonText = (props.cancelButtonText)?props.cancelButtonText:"Cancel";
  const showCancelButton = props.showCancelButton;
  const onClick = props.onClick;

  const clickAction = (event:any) => {
      const targetId = event.target.id;

      if(!onClick)
        return;

      //modify tag of target element
      event.target['tag'] = tag;

      if(targetId === 'alert_dialogue_btn_1') {
        onClick(event, 1);
      }else {
        onClick(event, 0);
      }
  }

  if(!open) return null;

  return createPortal(
    <div className="AlertComponent" data-testid="AlertComponent">
        <div className="alertDialogue modalAnimate">
          <div className="alertTitle">
            {title}
          </div>
          <div className="alertBody">
            {message}
          </div>
          <div className="alertButton">
              {
                (showCancelButton)?
                <ThemeBtnComponent id="alert_dialogue_btn_2" className="btn-outline-secondary" onClick={clickAction}>{cancelButtonText}</ThemeBtnComponent>:null
              }
              <ThemeBtnComponent id="alert_dialogue_btn_1" className="btn-theme" onClick={clickAction}>{okButtonText}</ThemeBtnComponent>
          </div>
        </div>
    </div>
  , node)
};

export default AlertComponent;
