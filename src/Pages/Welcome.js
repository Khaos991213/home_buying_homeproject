import React from 'react'
import style from '../style/welcome.module.css';
import {Link} from "react-router-dom";
const Welcome = () => {
    return(   
        <div className={style.WelcomeContainer}>  
            <h1>Welcome!</h1>
            <img src="/Image/welcome-picture.jpg" atr="logo"></img>
            <div className={style.WelcomeInfo}>
                <p>
                    我們發現到雖然現在的購屋網站都已經很方便了，但其實是缺少特定族群的，
                    我們這個網站主要鎖定族群就是年長者，所以我們找房子的條件與一般的購物
                    網站不一樣，我們針對這個族群的醫療，購物，運動及娛樂，建立四個資料表
                ，依據使用者想要的環境條件找到最適合使用者的房子。
                </p>    
                <p> 
                    因此我們分析了當地相關的設施希望能為將要退休的人提供良好的選擇。
                    也希望我們能夠為你提出協助。
                </p>
                <p>
                    DataBase Team 7    
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link 
                 exact to="/Account"
                >
                    Get Your User Name
                </Link>
                <Link
                 exact to="/SignIn"
                >
                    Have an Account? Sign In
                </Link>
            </div>
        </div>
    ) 
}

export default Welcome
