import React from 'react'
import { categoryInfos } from './categoryFullnfos'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
const Category = () => {
  return (
    <section className={classes.category_container}>
      {

      categoryInfos.map((infos) => (
        <CategoryCard data ={infos}/>
      ))

      }
    </section>
  )
}

export default Category
