import React from 'react'
import '../Proyects/Proyects.css'
import CardProyect from '../CardProyect/CardProyect'

export default function Proyects() {
  return (
    <div className='proyects__container'>
        <CardProyect />
        <CardProyect />
        <CardProyect />
    </div>
  )
}
