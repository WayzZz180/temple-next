import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import HomeSet from '../cards/HomeSet'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArrowRight from '@/components/common/arrow/arrowRight'
import ArrowLeft from '@/components/common/arrow/arrowLeft'

class CarouselMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1, //index which u want to display first
      direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
      nextIcon: (
        <span>
          <ArrowRight />
        </span>
      ),
      prevIcon: (
        <span>
          <ArrowLeft />
        </span>
      ),
    }
  }

  handleCarouselSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    })
  }

  render() {
    const { nextIcon, prevIcon } = this.state
    return (
      <>
        <style>
          {`body{
          background-color: #EEECE0
        }`}
        </style>
        <Carousel
          indicators={false}
          nextIcon={nextIcon}
          prevIcon={prevIcon}
          index={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}
          interval={3000}
        >
          <Carousel.Item >
            <HomeSet text1="吉祥如意" text2="媽祖基本款" pic1="MazuSet" />
          </Carousel.Item>
          <Carousel.Item>
            <HomeSet text1="花好月圓" text2="月老基本款" pic1="loveSet" />
          </Carousel.Item>
          <Carousel.Item>
            <HomeSet text1="金榜題名" text2="文昌基本款" pic1="studySet" />
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}
export default CarouselMain
