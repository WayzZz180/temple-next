import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Mazu from '@/components/common/cards/PrayMazu'
import Love from '@/components/common/cards/PrayLove'
import Study from '@/components/common/cards/PrayStudy'
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
        >
          <Carousel.Item>
            <Mazu />
          </Carousel.Item>
          <Carousel.Item>
            <Love />
          </Carousel.Item>
          <Carousel.Item>
            <Study />
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}
export default CarouselMain
