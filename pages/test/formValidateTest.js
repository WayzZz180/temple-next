import { useState } from 'react'
import './html5.css'

var style1 = {
  width: '100%',
}
var style2 = {
  display: 'flex',
  float: 'right',
  margin: '0px',
  height: '33px',
  padding: '5px 35px',
  fontSize: '14px',
  letterSpacing: '2px',
}
var style3 = {
width: '68%',
letterSpacing: '2px',
paddingLeft: '15px',
}
export default function FormValidate() {
  // 初始值會是物件，物件的屬性名稱即各欄位的name屬性值
  // 初始值通常不是 `{}` 也不是 `null`，也不可以空著不寫
  const [member, setMember] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })

  // 記錄各欄位錯誤訊息用
  // 假定每次使用者提交時，錯誤訊息都是清空的
  const originErrors = {
    fullname: '',
    email: '',
    password: '',
    password2: '',
  }

  const [errors, setErrors] = useState(originErrors)

  // 切換密碼欄位輸入呈現與隱藏
  const [show, setShow] = useState(false) // 對應password欄位
  const [show2, setShow2] = useState(false) // 對應password2欄位

  // 所有欄位共用的onChange事件處理函式
  const handleFieldChange = (e) => {
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 計算的物件屬性名稱
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newMember = { ...member, [e.target.name]: e.target.value }
    // 設定回狀態
    setMember(newMember)
  }

  // 表單提交送出用的事件處理函式
  const handleSubmit = (e) => {
    // 阻擋預設行為(送出到同網址)
    e.preventDefault()

    // 作各欄位檢查
    const newErrors = { ...originErrors }

    if (!member.fullname) {
      newErrors.fullname = '姓名欄位為必填'
    }

    if (!member.email) {
      newErrors.email = '電子郵件為必填'
    }

    if (member.password.length < 6 || member.password.length > 12) {
      newErrors.password = '密碼要6~12個字元'
    }

    if (member.password2.length < 6 || member.password2.length > 12) {
      newErrors.password2 = '密碼要6~12個字元'
    }

    if (member.password !== member.password2) {
      newErrors.password = '密碼與確認密碼不同'
      newErrors.password2 = '密碼與確認密碼不同'
    }

    setErrors(newErrors)
  }

  return (
    <>
      <style jsx>
        {`
          .error {
            color: #e4007e;
            font-size: 12px;
            letter-spacing: 2px;
          }
        `}
      </style>
      <h3>表單輸入與驗證</h3>
      <form className="app" onSubmit={handleSubmit}>
        <div>
          <label>
            <p>姓名：</p>
            <input
              type="text"
              name="fullname"
              value={member.fullname}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.fullname}</div>
        <div>
          <label>
            <p>電子郵件：</p>
            <input
              type="text"
              name="email"
              value={member.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.email}</div>
        <div>
          <label>
            <p>密碼：</p>
            <input
            style={style3}
              type={show ? 'text' : 'password'}
              name="password"
              value={member.password}
              onChange={handleFieldChange}
            />
            <button
              type="button"
              style={style2}
              onClick={() => {
                setShow(!show)
              }}
            >
              {show ? '隱藏密碼' : '呈現密碼'}
            </button>
          </label>
        </div>
        <div className="error">{errors.password}</div>
        <div>
          <label>
            <p>確認密碼：</p>
            <input
            style={style3}
              type={show2 ? 'text' : 'password'}
              name="password2"
              value={member.password2}
              onChange={handleFieldChange}
            />{' '}
            <button
              type="button"
              style={style2}
              onClick={() => {
                setShow2(!show2)
              }}
            >
              {show2 ? '隱藏密碼' : '呈現密碼'}
            </button>
          </label>
        </div>
        <div className="error">{errors.password2}</div>
        <div>
          <button type="submit" style={style1}>
            提交
          </button>
        </div>
      </form>
    </>
  )
}