import React from 'react'

import Spinner from './Spinner'
import './WelcomeAnimation.css'

export default class WelcomeAnimation extends React.Component {
  static defaultProps = {
    waitForImages: []
  }

  element = null

  componentWillMount () {
    document.body.classList.add('fixed')
  }

  componentDidMount () {
    if (this.props.waitForImages.length) {
      Promise.all(
        this.props.waitForImages.map(
          image =>
            new Promise((resolve, reject) => {
              console.log('loading')
              const img = document.createElement('img')
              img.src = image
              img.onload = () => {
                resolve(`${image} loaded`)
              }
            })
        )
      )
        .then(this.startAnimation)
        .catch(this.startAnimation)
    }
    this.element.addEventListener('animationend', this.handleAnimationFinish)
  }

  componentWillUnmount () {
    this.element.removeEventListener('animationend', this.handleAnimationFinish)
  }

  startAnimation = () => document.body.classList.add('animate')

  handleAnimationFinish = e => {
    if (e.animationName === 'pulse') {
      document.body.classList.remove('fixed')
    }
  }

  render () {
    return (
      <main
        className='WelcomeAnimation'
        ref={element => {
          this.element = element
        }}
      >
        <Spinner size='2rem' />
        <Spacial />
        <Studio />
      </main>
    )
  }
}

const Spacial = () => (
  <svg
    width='152px'
    height='29px'
    viewBox='0 0 152 29'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    className='WelcomeAnimation--Spacial'
  >
    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <path
        d='M24.3,27.5 L24.3,0.7 L35.5,0.7 C37,0.7 38.3,1 39.5,1.5 C40.7,2 41.7,2.7 42.6,3.6 C43.5,4.5 44.1,5.5 44.6,6.7 C45.1,7.9 45.3,9.1 45.3,10.4 C45.3,11.7 45.1,12.9 44.6,14.1 C44.1,15.3 43.5,16.3 42.6,17.2 C41.7,18.1 40.7,18.8 39.5,19.3 C38.3,19.8 37,20.1 35.5,20.1 L30.5,20.1 L30.5,27.5 L24.3,27.5 Z M30.5,15 L34.7,15 C35.3,15 35.9,14.9 36.5,14.6 C37,14.4 37.5,14 37.9,13.6 C38.3,13.2 38.6,12.7 38.8,12.1 C39,11.5 39.1,11 39.1,10.3 C39.1,9.7 39,9.1 38.8,8.5 C38.6,7.9 38.3,7.4 37.9,7 C37.5,6.6 37.1,6.3 36.6,6 C36.1,5.7 35.5,5.6 34.8,5.6 L30.6,5.6 L30.6,15 L30.5,15 Z M53.8,0.72 L44.2,27.52 L50.8,27.52 L51.8,24.42 L61.3,24.42 L62.3,27.52 L69,27.52 L59.5,0.72 L53.8,0.72 Z M56.7,8.32 L59.9,19.32 L53.4,19.32 L56.7,8.32 Z M69.6,14.12 C69.6,12.32 69.9,10.52 70.5,8.82 C71.1,7.12 72,5.62 73.2,4.32 C74.4,3.02 75.9,2.02 77.7,1.22 C79.5,0.42 81.5,0.02 83.8,0.02 C85.8,0.02 87.5,0.32 89.1,0.92 C90.7,1.52 92,2.32 93.2,3.32 C94.3,4.32 95.3,5.52 96,6.82 C96.7,8.22 97.1,9.62 97.3,11.12 L90.8,11.12 C90.6,10.32 90.4,9.62 90,8.92 C89.6,8.22 89.2,7.72 88.6,7.22 C88,6.72 87.3,6.32 86.6,6.02 C85.8,5.72 84.9,5.62 84,5.62 C82.7,5.62 81.6,5.82 80.6,6.32 C79.6,6.82 78.8,7.42 78.1,8.22 C77.4,9.02 76.9,9.92 76.5,10.92 C76.1,11.92 76,13.02 76,14.12 C76,15.32 76.2,16.42 76.6,17.42 C77,18.42 77.5,19.32 78.3,20.12 C79,20.92 79.8,21.52 80.8,21.92 C81.8,22.32 82.9,22.62 84.1,22.62 C85.9,22.62 87.4,22.12 88.5,21.22 C89.6,20.32 90.4,19.22 90.8,17.92 L97.4,17.92 C97.2,19.32 96.7,20.72 95.9,21.92 C95.2,23.12 94.2,24.22 93.1,25.22 C92,26.12 90.6,26.92 89.1,27.42 C87.6,27.92 85.9,28.22 84,28.22 C81.8,28.22 79.8,27.82 78,27.02 C76.2,26.22 74.7,25.22 73.5,23.92 C72.3,22.62 71.3,21.12 70.7,19.42 C69.9,17.82 69.6,16.02 69.6,14.12 Z M101,27.52 L107.3,27.52 L107.3,0.72 L101,0.72 L101,27.52 Z M119.6,0.72 L110,27.52 L116.6,27.52 L117.6,24.42 L127.1,24.42 L128.1,27.52 L134.8,27.52 L125.1,0.72 L119.6,0.72 Z M122.5,8.32 L125.7,19.32 L119.2,19.32 L122.5,8.32 Z M137.7,0.72 L137.7,27.52 L151.5,27.52 L151.5,22.12 L143.9,22.12 L143.9,0.72 L137.7,0.72 Z M0,18.6 L6.2,18.6 C6.2,20 6.6,21.2 7.4,22 C8.2,22.8 9.2,23.2 10.4,23.2 C11.4,23.2 12.3,22.9 12.9,22.3 C13.6,21.7 13.9,21 13.9,20 C13.9,19.5 13.8,19 13.6,18.6 C13.4,18.2 13.1,17.9 12.7,17.6 C12.3,17.3 11.9,17.1 11.4,16.9 C10.9,16.7 10.3,16.5 9.8,16.2 C8.6,15.8 7.5,15.3 6.4,14.9 C5.3,14.4 4.3,13.9 3.5,13.3 C2.7,12.7 2,11.9 1.5,11 C1,10.2 0.7,9.1 0.7,7.8 C0.7,6.5 1,5.3 1.5,4.3 C2,3.3 2.7,2.5 3.6,1.9 C4.5,1.3 5.5,0.8 6.6,0.5 C7.8,0.2 9,0 10.2,0 C11.8,0 13.1,0.2 14.3,0.7 C15.5,1.2 16.5,1.8 17.3,2.6 C18.1,3.4 18.7,4.3 19.1,5.3 C19.5,6.3 19.7,7.4 19.7,8.6 L13.5,8.6 C13.5,7.4 13.2,6.5 12.6,5.8 C12,5.1 11.2,4.8 10.1,4.8 C9.2,4.8 8.5,5 7.8,5.5 C7.2,6 6.8,6.6 6.8,7.5 C6.8,8.4 7.1,9.1 7.8,9.6 C8.5,10.1 9.4,10.6 10.6,11 C11.8,11.4 12.9,11.8 14.1,12.3 C15.2,12.8 16.3,13.3 17.1,14 C18,14.6 18.7,15.4 19.2,16.4 C19.7,17.3 20,18.5 20,19.8 C20,21.1 19.8,22.3 19.2,23.3 C18.7,24.4 18,25.2 17.1,26 C16.2,26.7 15.2,27.3 14,27.7 C12.8,28.1 11.5,28.3 10,28.3 C8.5,28.3 7.1,28.1 5.9,27.7 C4.6,27.3 3.6,26.7 2.7,25.8 C1.8,25 1.1,24 0.6,22.8 C0.3,21.5 0,20.2 0,18.6'
        id='Shape'
        fill='#FFFFFF'
        fillRule='nonzero'
      />
    </g>
  </svg>
)

const Studio = () => (
  <svg
    width='128px'
    height='29px'
    viewBox='0 0 128 29'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    className='WelcomeAnimation--Studio'
  >
    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='studio' transform='translate(0.000000, -1.000000)' fill='#FFFFFF'>
        <path
          d='M100.2,14.98 C100.2,13.18 100.5,11.38 101.2,9.78 C101.8,8.08 102.7,6.58 103.9,5.28 C105.1,3.98 106.5,2.98 108.3,2.18 C110,1.38 111.9,0.98 114.1,0.98 C116.2,0.98 118.2,1.38 119.9,2.18 C121.6,2.98 123.1,3.98 124.2,5.28 C125.4,6.58 126.3,8.08 126.9,9.78 C127.5,11.48 127.9,13.18 127.9,14.98 C127.9,16.78 127.6,18.58 126.9,20.18 C126.3,21.88 125.3,23.38 124.2,24.68 C123,25.98 121.6,26.98 119.9,27.78 C118.2,28.58 116.3,28.98 114.1,28.98 C112,28.98 110,28.58 108.3,27.78 C106.6,26.98 105.1,25.98 103.9,24.68 C102.7,23.38 101.8,21.88 101.2,20.18 C100.6,18.58 100.2,16.78 100.2,14.98 M103.9,14.98 C103.9,16.38 104.1,17.78 104.6,19.08 C105.1,20.38 105.7,21.58 106.6,22.58 C107.5,23.58 108.5,24.38 109.8,24.98 C111,25.58 112.5,25.88 114,25.88 C115.5,25.88 117,25.58 118.2,24.98 C119.5,24.38 120.5,23.58 121.4,22.58 C122.3,21.58 122.9,20.38 123.4,19.08 C123.9,17.78 124.1,16.38 124.1,14.98 C124.1,13.58 123.9,12.18 123.4,10.88 C122.9,9.58 122.3,8.38 121.4,7.38 C120.5,6.38 119.5,5.58 118.2,4.98 C116.9,4.38 115.5,4.08 114,4.08 C112.4,4.08 111,4.38 109.8,4.98 C108.6,5.58 107.5,6.38 106.6,7.38 C105.7,8.38 105,9.58 104.6,10.88 C104.1,12.28 103.9,13.58 103.9,14.98'
          id='Shape'
          fillRule='nonzero'
        />
        <path
          d='M65.4,28.38 L65.4,1.58 L73.7,1.58 C75.9,1.58 77.9,1.98 79.6,2.68 C81.3,3.48 82.8,4.48 84,5.68 C85.2,6.98 86.1,8.38 86.7,9.98 C87.3,11.58 87.6,13.28 87.6,14.88 C87.6,16.48 87.3,18.18 86.7,19.78 C86.1,21.38 85.2,22.78 84,24.08 C82.8,25.28 81.4,26.38 79.6,27.08 C77.9,27.88 75.9,28.18 73.7,28.18 L65.4,28.18 L65.4,28.38 Z M68.9,25.28 L73.7,25.28 C75.3,25.28 76.8,24.98 78.1,24.38 C79.4,23.78 80.5,22.98 81.3,22.08 C82.2,21.08 82.8,20.08 83.3,18.78 C83.8,17.58 84,16.28 84,14.98 C84,13.68 83.8,12.38 83.3,11.18 C82.8,9.98 82.2,8.88 81.3,7.88 C80.4,6.98 79.4,6.18 78.1,5.58 C76.8,4.98 75.3,4.68 73.7,4.68 L68.9,4.68 L68.9,25.28 Z'
          id='Shape'
          fillRule='nonzero'
        />
        <path
          d='M0,19.9 L3.5,19.9 C3.5,21.7 4,23.2 5.1,24.3 C6.2,25.4 7.7,25.9 9.5,25.9 C11.1,25.9 12.3,25.5 13.3,24.7 C14.3,23.9 14.8,22.8 14.8,21.3 C14.8,20.5 14.6,19.9 14.3,19.3 C14,18.8 13.6,18.3 13.1,18 C12.6,17.6 12.1,17.3 11.5,17.1 C10.9,16.9 10.3,16.7 9.6,16.5 C8.4,16.1 7.3,15.8 6.3,15.3 C5.2,14.9 4.3,14.4 3.5,13.8 C2.7,13.2 2.1,12.5 1.6,11.6 C1.2,10.8 1,9.7 1,8.5 C1,7.3 1.2,6.2 1.7,5.3 C2.1,4.4 2.7,3.6 3.5,3 C4.1,2.3 5,1.8 6,1.5 C7,1.2 8.1,1 9.2,1 C10.5,1 11.6,1.2 12.6,1.6 C13.6,2 14.5,2.6 15.3,3.3 C16.1,4 16.6,4.9 17.1,5.9 C17.6,6.9 17.7,8 17.7,9.2 L14.2,9.2 C14.2,7.6 13.7,6.3 12.8,5.5 C12,4.6 10.8,4.1 9.2,4.1 C7.8,4.1 6.6,4.5 5.8,5.2 C4.9,5.9 4.5,6.9 4.5,8.2 C4.5,8.9 4.6,9.5 4.9,10 C5.2,10.5 5.5,10.9 6,11.2 C6.5,11.6 7,11.8 7.6,12.1 C8.2,12.3 8.8,12.6 9.5,12.8 C10.6,13.2 11.7,13.5 12.8,14 C13.9,14.4 14.8,14.9 15.7,15.5 C16.5,16.1 17.2,16.9 17.7,17.8 C18.2,18.7 18.5,19.8 18.5,21.1 C18.5,22.3 18.3,23.5 17.8,24.5 C17.3,25.5 16.7,26.3 15.9,27 C15.1,27.7 14.2,28.2 13.1,28.6 C12,29 10.9,29.1 9.6,29.1 C8.2,29.1 7,28.9 5.9,28.5 C4.8,28.1 3.8,27.5 2.9,26.7 C2.1,25.9 1.4,25 0.9,23.8 C0.2,22.6 4.77395901e-15,21.3 4.77395901e-15,19.9 Z'
          id='Path'
        />
        <polygon
          id='Path'
          points='20.6 1.6 20.6 4.7 27.5 4.7 27.5 28.4 31 28.4 31 4.7 37.9 4.7 37.9 1.6'
        />
        <polygon
          id='Shape'
          fillRule='nonzero'
          points='92.1 28.4 95.7 28.4 95.7 1.6 92.1 1.6'
        />
        <path
          d='M41.1,19.68 L41.1,1.58 L44.6,1.58 L44.6,19.68 C44.6,20.48 44.7,21.28 45,22.08 C45.3,22.78 45.7,23.48 46.2,24.08 C46.7,24.68 47.3,25.08 48,25.38 C48.7,25.68 49.5,25.88 50.4,25.88 C51.3,25.88 52.1,25.68 52.8,25.38 C53.5,25.08 54.1,24.58 54.7,24.08 C55.2,23.58 55.6,22.88 55.9,22.08 C56.2,21.38 56.3,20.48 56.3,19.68 L56.3,1.58 L59.8,1.58 L59.8,19.68 C59.8,20.98 59.6,22.18 59.1,23.28 C58.6,24.38 58,25.38 57.2,26.28 C56.4,27.08 55.4,27.78 54.3,28.28 C53.2,28.78 51.9,28.98 50.5,28.98 C49.1,28.98 47.8,28.68 46.7,28.28 C45.6,27.78 44.6,27.08 43.8,26.28 C43,25.48 42.4,24.48 41.9,23.38 C41.3,22.18 41.1,20.98 41.1,19.68 Z'
          id='Path'
        />
      </g>
    </g>
  </svg>
)
