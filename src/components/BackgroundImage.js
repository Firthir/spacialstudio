import React from 'react'
import PropTypes from 'prop-types'
import 'intersection-observer'
import Observer from '@researchgate/react-intersection-observer'

import './BackgroundImage.css'
import { getImageSrc } from '../util/getImageUrl'

export default class BackgroundImage extends React.Component {
  static defaultProps = {
    lazy: false,
    src: '',
    imageSize: 1800
  }

  state = {
    src:
      this.props.src.indexOf('http') === 0
        ? ''
        : getImageSrc(
          this.props.src,
          this.props.lazy ? 10 : this.props.imageSize
        ),
    dataSrc: getImageSrc(this.props.src, this.props.imageSize),
    loaded: false
  }

  handleIntersection = e => {
    if (e.isIntersecting) {
      const img = new Image()
      img.src = this.state.dataSrc
      img.onload = () => {
        this.setState({
          src: this.state.dataSrc,
          loaded: true
        })
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.src === nextProps.src) return

    this.setState({
      src: getImageSrc(
        nextProps.src,
        nextProps.lazy ? 10 : this.props.imageSize
      ),
      dataSrc: getImageSrc(nextProps.src, this.props.imageSize)
    })
  }

  render () {
    let className = this.props.className || ''
    if (this.state.loaded) className += ' BackgroundImage-lazy-loaded'
    if (this.props.lazy) className += ' BackgroundImage-lazy'
    const options = {
      onChange: this.handleIntersection,
      onlyOnce: true,
      rootMargin: '0% 0% 100%'
    }
    const { lazy, imageSize, ...props } = this.props

    return (
      <Observer {...options}>
        <div
          {...props}
          className={`BackgroundImage absolute ${className || ''}`}
          src={this.state.src}
          style={{
            backgroundImage: `url(${this.state.src})`,
            backgroundSize: props.contain ? 'contain' : 'cover',
            opacity: props.opacity || 1
          }}
        />
      </Observer>
    )
  }
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired
}
