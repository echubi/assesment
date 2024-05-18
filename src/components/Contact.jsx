import styles, { layout } from "../styles";
import { contact } from "../assets";

const Contact = () => (
	<section id="contact" className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading}>Contact Us</h2>
			<h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
				Send Your Message
			</h4>
			<form action="">
				<input
					type="text"
					placeholder="Your Email"
					className="w-[100%] mb-[20px]"
				/>
				<input
					type="text"
					placeholder="Subject"
					className="w-[100%] mb-[20px]"
				/>
				<textarea
					placeholder="Message"
					className="w-[100%] mb-[20px]"
				></textarea>
				<button
					type="button"
					className="button_contact"
				>
					Send
				</button>
			</form>
		</div>

		<div className={layout.sectionImg}>
			<img src={contact} alt="contact " className="w-[90%] h-[90%]" />
		</div>
	</section>
);
export default Contact