import React, { Fragment } from "react";
import styles from "styles/components/_card.module.scss";
import { render } from "@testing-library/react";
import testImg from "assets/test.jpg";
import {AiOutlineHeart} from "react-icons/ai";
import {BiBookmark} from "react-icons/bi";
import {BsPlus} from "react-icons/bs";
import {RiEyeCloseLine} from "react-icons/ri";

export default function Card() {
  return (
    <Fragment>
        <div className={styles.container}>
            <div className={styles.container_img}>
                <img className={styles.img} src={testImg}/>
            </div>
            <div className={styles.toolbar}>
                <div>
                    <RiEyeCloseLine className={styles.icon}/>
                    <p className={styles.text}>4.2k</p> 
                </div>
                <div>
                    <BsPlus className={styles.icon}/>
                    <AiOutlineHeart className={styles.icon}/>
                </div>
            </div>
        </div>
    </Fragment>
  );
}
