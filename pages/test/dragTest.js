import React from 'react'
import Draggable from 'react-draggable'
import HellMoney from '@/assets/joss.svg'
import Image from 'next/image'
export default function Drag() {
  class App extends React.Component {
    // eventLogger = (e: MouseEvent, data: Object) => {
    //   console.log('Event: ', e)
    //   console.log('Data: ', data)
    // }

    render() {
      return (
        <Draggable
          axis="y"
          handle=".handle"
          defaultPosition={{ x: 500, y: 500 }}
          position={null}
          bounds={{ top: -1000, bottom: 1000 }}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className="handle" style={{ width: 300 }}>
            {/* <div>123</div> */}
            <div className="border">
              <Image src={HellMoney} width={300} />
            </div>
          </div>
        </Draggable>
      )
    }
  }

  return <App />
}
