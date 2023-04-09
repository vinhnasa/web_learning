import React from "react";
import style from './style.module.css'

export default function Layout(){
    return (
        <div className={style.container}>
          <div className={style.sideBar}>LeftSide</div>
          <div className={style.content}>RightSide</div>
        </div>
      );
    }