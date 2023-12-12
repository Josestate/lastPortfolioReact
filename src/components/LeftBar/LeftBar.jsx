import React from 'react'
import '../LeftBar/LeftBar.css'
import homeIcon from '../../assets/homeIcon.png'
import infoIcon from '../../assets/infoIcon.png'
import contactIcon from '../../assets/contacticon.png'

export default function LeftBar() {
  return (
    <div className='leftBar__Container'>
        <button className='leftbar__buttons'><img src={homeIcon} alt="" className='leftBar-buttons-images'/></button>
        <button className='leftbar__buttons'><img src={infoIcon} alt="" className='leftBar-buttons-images'/></button>
        <button className='leftbar__buttons'><img src={contactIcon} alt="" className='leftBar-buttons-images'/></button>
    </div>
  )
}
