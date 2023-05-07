import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CityBlock from '../commonHome/blocks/CityBlock'


const CitySection = () => {

  const locations = [
    {
      id : 1,
      name : "FEDERAL",
      code_name: 'FEDERAL',
      mapPhoto : "/images/homepage/cities/dhaka.png"
    },
    {
      id : 2,
      name : "SINDH",
      code_name: 'SINDH',
      mapPhoto : "/images/homepage/cities/chittagong.png"
    },
    {
      id : 3,
      name : "BALOCHISTAN",
      code_name: 'BALOCHISTAN',
      mapPhoto : "/images/homepage/cities/rajshahi.png"
    },
    {
      id : 4,
      name : "KPK",
      code_name: 'KPK',
      mapPhoto : "/images/homepage/cities/sylhet.png"
    }
  ]
  return (
    <div className='browse-jobs-location section-padding'>
        <div className='container'>
            <SectionTitle title="Browse Jobs by Cities" subTitle="More Cities" subLink="category" />
            <div className='row pt-40'>
                { locations.map(location => <CityBlock key={location.id} location={location} />)}
            </div>
        </div>
    </div>
  )
}

export default CitySection
