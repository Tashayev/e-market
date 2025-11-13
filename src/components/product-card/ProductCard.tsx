
import {Typography } from '@mui/material'
import { style } from './product'
import type { Product } from '@/types/Products'
import { NavLink } from 'react-router'
interface ProductProps{
  product: Product
}
export default function ProductCard({product}: ProductProps) {
  const {title, price, id} = product
  return (
    <div style={style.card}>
      <Typography>
        {title}
      </Typography>
      <Typography>
        {price}
      </Typography>
      <NavLink to={`/product/${id}`} >Open</NavLink>
    </div>
  )
}
