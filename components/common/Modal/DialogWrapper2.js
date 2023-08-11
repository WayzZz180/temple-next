import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import CloseBtn from '@/components/common/Modal/close'

import Portal from '../Portal/Portal'

const hideMask = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const showMask = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Mask = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  animation: ${(props) => (props.$isOpen ? showMask : hideMask)}
    ${(props) => props.$animationDuration}ms ease-in-out forwards;
`

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%; /* 調整彈出視窗的垂直位置 */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1920px; /* 調整彈出視窗的寬度 */
  height: 930px; /* 調整彈出視窗的高度 */
  background-color: #ebe9dd; /* 設定彈出視窗的背景顏色 */
`
const ModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box; /* 確保內邊距不會增加容器尺寸 */
`
/**
 * `Modal` 元件為彈出相關元件提供了重要的基礎建設，
 * 例如 `對話框(Dialog)`、`彈出提示框(Popovers)`、`菜單(Menu)`、`抽屜(Drawer)`...等等元件。
 * 其使用時機是當系統流程當中需要用戶處理額外事務，但又不希望跳轉頁面以打斷目前工作流程時，提供一個彈出互動框解決方案。
 */
const Modal = ({ isOpen, onClose, animationDuration, children, hasMask }) => {
  const [removeDOM, setRemoveDOM] = useState(!isOpen)

  useEffect(() => {
    if (isOpen) {
      setRemoveDOM(false)
    } else {
      setTimeout(() => {
        setRemoveDOM(true)
      }, animationDuration + 100)
    }
  }, [animationDuration, isOpen])

  return (
    !removeDOM && (
      <Portal>
        {hasMask && (
          <Mask
            $isOpen={isOpen}
            $animationDuration={animationDuration}
            onClick={onClose} // 确保点击遮罩也能关闭模态框
          />
        )}
        <ModalWrapper $isOpen={isOpen}>
          <div
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '50px',
              right: '100px',
              zIndex: 8,
            }}
          >
            <CloseBtn />
          </div>
          <ModalContentContainer>{children}</ModalContentContainer>
        </ModalWrapper>
      </Portal>
    )
  )
}

Modal.propTypes = {
  /**
   * 抽屜是否顯示
   */
  isOpen: PropTypes.bool,
  /**
   * 是否顯示遮罩
   */
  hasMask: PropTypes.bool,
  /**
   * 觸發抽屜關閉
   */
  onClose: PropTypes.func,
  /**
   * 定義動畫完成一次週期的時間(ms)
   */
  animationDuration: PropTypes.number,
  /**
   * 內容
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
}

Modal.defaultProps = {
  isOpen: false,
  hasMask: true,
  animationDuration: 200,
  onClose: () => {},
}

export default Modal
