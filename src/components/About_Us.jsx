import { about } from "../assets";
import styles, { layout } from "../styles";

const About_Us = () => {
	return (
		<section id="about" className={`${layout.sectionReverse}`}>
			<div className={layout.sectionImgReverse}>
				<img
					src={about}
					alt="about"
					className="w-[100%] h-[100%] relative z-[5] rounded-[36px]"
				/>
			</div>

			<div className={layout.sectionInfo}>
				<h2 className={`text-black ${styles.heading}`}>About Me</h2>
				<p className={`${styles.paragraph} max-w-[470px] xs:mt-5`}>
					A confident and highly motivated professional with experience in
					working in a busy environment with many tasks and delivering as
					expected. I am also skilled in analysis, problem solving and
					communication through work experience. Very proficient in Javascript,
					React and Typescript.
				</p>
			</div>
		</section>
	);
};

export default About_Us