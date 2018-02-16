import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Gallery from '../components/Gallery.js'
import Accordion from '../components/Accordion.js'
import ProjectSection from '../components/ProjectSection'
import PostSection from '../components/PostSection'
import './Services.css'

export default ({ page, projects, posts }) => (
  <div className='Services'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <div className='section thin Services--gallery'>
      <div className='container larger'>
        <div className='Flex alignCenter'>
          <Gallery images={page.galleryImages.map(obj => obj.galleryimage)} />
          <div className='Services--info'>
            <h2 className='large'>{page.galleryTitle}</h2>
            <div className='Services--description'>
              {page.galleryDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <h2 className='taCenter'>{page.threeColumnSectionTitle}</h2>
        <Content source={page.threeColumnSection} className='threeColumn' />
      </div>
    </div>
    <div className='section thin'>
      <div className='container'>
        <Accordion items={page.accordion} />
      </div>
    </div>
    <ProjectSection
      projects={projects}
      title={page.projectSectionTitle}
      limit='2'
    />
    <div className='section thin'>
      <div className='container'>
        <PostSection
          posts={posts}
          title={page.newsSectionTitle}
          limit='3'
          showLoadMore={false}
        />
      </div>
    </div>
    <div className='section thin Services--Consultation'>
      <div className='container'>
        <h2>{page.bookingTitle}</h2>
        <Link className='button' to='/contact/'>
          book now
        </Link>
      </div>
    </div>
  </div>
)
