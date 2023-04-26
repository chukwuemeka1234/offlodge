import Image from '../images/values-img.jpg'
import SectionHead from './SectionHead'
import {GitCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values