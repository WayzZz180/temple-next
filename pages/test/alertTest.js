import React from 'react'
import Alert from '@/components/common/alert'
export default function alertTest() {
  return (
    <>
      <Alert isOpen={true} text={`加入失敗`} status="wrong" />
      <Alert isOpen={true} text={`加入成功`} status="correct" />
    </>
  )
}
