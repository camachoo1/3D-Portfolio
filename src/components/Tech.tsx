import { BallCanvas } from './canvas'
import { SectionWrapper } from '../higher-order-components'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, idx) => (
        <div className='w-28 h-28' key={idx}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')