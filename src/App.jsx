import { Navbar, Hero, About_Us, Contact, Footer } from './components';
import styles from './styles'


const App = () => {
  return (
		<div className="w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={` ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={` ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<About_Us />
					<Contact />
				</div>
			</div>
			<div className={`banner ${styles.flexStart} px-5`}>
				<div className={`${styles.boxWidth}`}>
					<Footer />
				</div>
			</div>
		</div>
	);
  
  }

export default App
