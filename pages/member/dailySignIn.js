import styles from '@/pages/member/dailySignIn.module.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import AuthContext from '@/contexts/AuthContext'
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// components
import InputBox from '@/components/common/inputBox/index.js'
import MemberTitle from '@/components/common/title/memberTitle';

import Button from '@/components/common/button/index.js'
import MemberNavbar from '@/components/common/memberNavbar'
import Coupon from '@/components/common/coupon/index.js'

//bootstrap
import { Container, Row, Col } from 'react-bootstrap'
import ProfilePhoto from '@/components/common/profilePhoto';

export default function dailySignIn() {
  const { auth, setAuth, logout } = useContext(AuthContext);
  const router = useRouter()
  const { id } = router.query;
  const [coupon, setCoupon] = useState([]);
  const [user, setUser] = useState('');
  const [si, setSi] = useState([]);

//   useEffect(() => {
//     console.log(`coupons頁面 有沒有auth.token?1`, auth.token)
//     if (auth.token) {
//       fetch(process.env.API_SERVER + '/member/coupons', {
//         headers: {
//           "Authorization": "Bearer " + auth.token,
//         },
//       })
//       .then((r) => r.json())
//       .then((data) => {
//         console.log(`coupons頁面 有沒有auth.token?2`, auth.token);
//         console.log(`coupons頁面 data:`, data);
//         // 進入頁面把資料抓出來
//         setCoupon (data)
      
//       });
//   }else {
//     // Handle the case when auth.token is not available or user is not logged in
//     // You can add any additional logic here
//     console.log("用戶尚未註冊");
//   }
// }, [auth.token]);


//拿token 跟資料
useEffect(() => {
  console.log(`dailySignIn頁面 有沒有auth.token?1`, auth.token)
  if (auth.token) {
    fetch(process.env.API_SERVER + '/member/dailySignIn', {
      headers: {
        "Authorization": "Bearer " + auth.token,
      },
    })

    .then((r) => r.json())
    .then((data) => {
      console.log(`daileySignIn頁面 有沒有auth.token?2`, auth.token, data);
      console.log( data);
      // 進入頁面把資料抓出來
      setSi (data)
      setUser(data.member_id)
    
    });
}else {
  // Handle the case when auth.token is not available or user is not logged in
  // You can add any additional logic here
  console.log("用戶尚未註冊");
}
}, [auth.token]);


const signIn = (e) => {
  e.preventDefault()

  // 改成測試一天一次!!!!!

  // const validateResult = validateForm()
  // if (validateResult) {
  //   // Collect all the invalid fields and set the state
  //   const invalidFieldsArray = Object.keys(validationRules).map((field) => {
  //     const rule = validationRules[field]
  //     return rule.required && (!user[field] || user[field].trim() === '')
  //       ? field
  //       : rule.regex && !rule.regex.test(user[field])
  //       ? field
  //       : field === 'confirm_password' && !rule.custom(user[field], user)
  //       ? field
  //       : null
  //   })
  //   setInvalidFields(invalidFieldsArray.filter((field) => field !== null))

  //   alert('請檢查以下項目：\n' + invalidFieldsArray.join('\n'));
  //   // alert('資料有誤，請檢查一下喔!')

  //   return
  // }

  // 驗證通過，繼續進行表單提交
  // 取得或提交表單資料

  fetch(process.env.API_SERVER + '/member/dailySignIn', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth.token,
    },
  })
    .then((r) => r.json())
    .then((data) => {
      // 存儲後端的錯誤訊息
      if (data.error) {
        console.log(data.error)
        alert(data.error) // 顯示 email 已被使用的錯誤訊息
    
        return // 終止後續的處理
      }

      console.log(data)

      if (data) {
        alert('簽到成功')
        // router.push('/member/login');
        // window.location.reload()
      }
    })
    .catch((error) => {
      alert('簽到失敗', error)
    })
}


  return (
    <div className={styles.flex}>
      <Container>  
        
       <ProfilePhoto/>
        <Row>
          <Col>
            <MemberTitle
              text="每日簽到"
              text2="DAILY SIGN IN"
              lineColor="green"
              width={860}
            />
          </Col>
        </Row>
    
        <MemberNavbar />
          <Row className={styles.flex_centre}>
        <form onSubmit={signIn}>
            <Col>
           <Button text="簽到" btnColor="light_brown" width={487} onSubmit={signIn}/>
            </Col>
            </form>
          </Row>
          
<Row className={styles.flex_centre}>
<Col>
  <div>{si.signin_date}</div>
</Col>
</Row>
 <Row className={styles.flex_centre}>
          <Col>
          <div className={styles.text_align}>簽到記錄:</div>
          {
              si.length > 0 ? (
                si.map((v, i) => {
                  // Date formatting code here
                  const dateObject = new Date(v.signin_date);
                  const formattedDateTime = dateObject.toLocaleString('zh-TW', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute:'2-digit'
                  
                  });

                  return (
                    <div key={i}>
                      <div>{formattedDateTime}</div>
                    </div>
                  );
                })
              ) : (
                <div>還沒有簽到記錄!!!</div>
              )
            }
          </Col>
        </Row>

      </Container>
      
    </div>
  )
}
