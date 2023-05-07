import React from 'react'
import SectionTitle from '../commonHome/sectionTitle/SectionTitle'
import CategoryBlock from '../commonHome/blocks/CategoryBlock'


const CategorySection = () => {

  const categorires = [
    {
      name : "Front-end Developer",
      id : "1",
      icon : ""
    },
    {
      name : "Back-end Developer",
      id : "2",
      icon : ""
    },
    {
      name : "Moblie Application Developer",
      id : "3",
      icon : ""
    },
    {
      name : "Finance",
      id : "4",
      icon : ""
    },
  ]

  return (
    <div className='browse-jobs-categories section-padding'>
        <div className='container'>
            <SectionTitle title="Browse Job Categories" subTitle="More Category" subLink="category" />
            <div className='row pt-40'>
                {
                  categorires.map(category => <CategoryBlock key={category.id} category={category} />)
                }
            </div>
        </div>
    </div>
  )
}

export default CategorySection
