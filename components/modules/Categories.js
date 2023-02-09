import Hatchback from '../icons/Hatchback'
import Sedan from '../icons/Sedan'
import Sport from '../icons/Sport'
import Suv from '../icons/Suv'
import styles from './Categories.module.css'

const Categories = () => {
  return (
    <div className={styles.container}>
        <div>
            <p>Sedan</p>
            <Sedan />
        </div>

        <div>
            <p>Suv</p>
            <Suv />
        </div>


        <div>
            <p>Hatchback</p>
            <Hatchback />
        </div>


        <div>
            <p>Sport</p>
            <Sport />
        </div>

    </div>
  )
}

export default Categories