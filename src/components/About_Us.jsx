import { about } from "../assets";
import styles, { layout } from "../styles";

const About_Us = () => {
	return (
		<section id="about" className={`pt-[300px] ${layout.sectionReverse}`}>
			<div className={layout.sectionImgReverse}>
				<img
					src={about}
					alt="about"
					className="w-[100%] h-[100%] relative z-[5]"
				/>
			</div>

			<div className={layout.sectionInfo}>
				<h2 className={`text-black ${styles.heading}`}>About Us</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Tincidunt nunc pulvinar sapien et ligula ullamcorper
					malesuada proin. Hendrerit dolor magna eget est. Odio facilisis mauris
					sit amet massa vitae tortor condimentum lacinia. Tristique senectus et
					netus et. Adipiscing elit ut aliquam purus sit. Iaculis urna id
					volutpat lacus.
				</p>
			</div>
		</section>
	);
};

export default About_Us