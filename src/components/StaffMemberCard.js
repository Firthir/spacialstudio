import React from 'react'
import { Link } from 'react-router-dom'

import BackgroundImage from './BackgroundImage'
import Content from './Content'
import './StaffMemberCard.css'

export default class StaffMemberCard extends React.Component {
  render () {
    const { staffMember } = this.props

    return (
      <div className='StaffMember'>
        {staffMember.image && (
          <div className='StaffMember--Image square'>
            <BackgroundImage
              className='square-content'
              src={staffMember.image}
            />
          </div>
        )}
        <h3 className='StaffMember--Title'>{staffMember.title}</h3>
        {staffMember.subtitle && (
          <div className='StaffMember--Subtitle'>{staffMember.subtitle}</div>
        )}
        <div className='StaffMember--ContentWrap'>
          <Content source={staffMember.content} />
        </div>
        <Link to={staffMember.instagram}>instagram</Link>
        <Link to={staffMember.twitter}>twitter</Link>
        <Link to={staffMember.linkedin}>linkedinsta</Link>
      </div>
    )
  }
}
