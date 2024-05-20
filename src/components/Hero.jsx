import styles from "../styles";



const Hero = () => {
	const showAlert = () => {
		alert("Hello, World!");
	};
  return (
		<section className={`${styles.paddingY}`}>
			<div className="px-[15px] pt-[230px] pb-[50px] ">
				<div className="flex flex-col w-full ">
					<h2 className="font-poppins font-bold xs:text-[40px] ss:text-[60px] text-black xs:leading-[70px] ss:leading-[100px] leading-[15px] xs:pb-[20px] text-center">
						Welcome To My Fincra Assessment
					</h2>
					<p className="font-poppins text-[20px] text-black text-center xs:py-5">
						This is to assess my frontend skills for a Junior Frontend Developer role
					</p>
					<div className="m-[auto] block">
						<button type="button" className="button " onClick={showAlert}>
							Click Me
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero