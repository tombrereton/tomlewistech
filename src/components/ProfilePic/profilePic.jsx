import React from "react";
import profile from "./profile.jpg";
import * as styles from "./profilePic.module.css";

export default function ProfilePic(props) {
    return (
        <div className={styles.imageCropper}>
            <img className={styles.pic} src={profile} alt="profile"/>
        </div>
    )
}