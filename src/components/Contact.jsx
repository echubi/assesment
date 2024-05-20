import { useState } from "react";
import styles, { layout } from "../styles";
import { contact } from "../assets";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		
		fetch("https://getform.io/f/pamqwyna", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ formData }),
		})
			.then((response) => {
				if (response.ok && response.status === 200) {
					setFormData({ name: "", email: "", message: "" });
				} else {
					throw new Error("Failed to send email");
				}
			})
			.catch((error) => {
				console.error("Error sending email:", error);
				alert("Failed to send email");
			});
	};


	return (
		<section id="contact" className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading}>Contact Me</h2>
				<h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
					Send Your Message
				</h4>
				<form onSubmit={handleSubmit}>
					<input
						name="name"
						type="text"
						placeholder="Your Name"
						className="w-[100%] mb-[20px]"
						value={formData.name}
						onChange={handleInputChange}
					/>
					<input
						name="email"
						type="email"
						placeholder="Your Email"
						className="w-[100%] mb-[20px]"
						value={formData.email}
						onChange={handleInputChange}
					/>
					<textarea
					name="message"
						placeholder="Message"
						className="w-[100%] mb-[20px]"
						value={formData.message}
						onChange={handleInputChange}
					></textarea>
					<button type="submit" className="button_contact">
						Send
					</button>
				</form>
			</div>

			<div className={layout.sectionImg}>
				<img
					src={contact}
					alt="contact"
					className="w-[90%] h-[90%] rounded-[36px]"
				/>
			</div>
		</section>
	);
}
export default Contact