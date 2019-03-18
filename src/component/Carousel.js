import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'
//import Swipeable from 'react-swipeable';

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            position: 0,
            direction: 'next',
            sliding: false
        }
      }

  handleSwipe = (isNext) => {
        if (isNext) {
          this.nextSlide()
        } else {
          this.prevSlide()
        }
   }
    
  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

    render() {
      const { title, children } = this.props
    
      return (
        <div>
          <h2>{ title }</h2>
          <Wrapper>
            <CarouselContainer>
              { children.map((child, index) => (
                <CarouselSlot
                  key={ index }
                  order={ this.getOrder(index)}
                >
                  {child}
                </CarouselSlot>
              )) }
            </CarouselContainer>
          </Wrapper>
          <button onClick={ () => this.nextSlide() }>Next</button>
          <button onClick={ () => this.prevSlide() }>Prev</button>
        </div>
      )
    }
  }

  Carousel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  export default Carousel;