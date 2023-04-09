import React from "react";
import styles from "./App.module.css";

export default function FormLogin(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <form>
                <p className={styles.fieldTitle}>Nhap email: </p>
                <input
                    name='email'
                    type='text'
                    className={styles.input}
                />
                <p className={styles.fieldTitle}>Nhap password: </p>
                <input
                    name="password"
                    type='password'
                />
                <br />
                <label>
                    <input
                        className={styles.checkbox}
                        name="isRead"
                        type='checkbox'
                    />I read and accept the privacy policy:
                </label>

                <p>Bam submit form</p>
                <button className={styles.btnSubmit}>Submit</button>
            </form>
        </div>
    )
}