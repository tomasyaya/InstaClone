import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import { categories } from '../../../api/db.json'

export const CategoryList = () => {
  return(
    <List>
      { 
        categories
          .map((categories, index) => <Item key={categories.id}>{ <Category {...categories} /> }</Item>)
      }
    </List>
  )
}