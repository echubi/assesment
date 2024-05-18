import styles from "../styles";

const Hero = () => {
  return (
		<section className={`main ${styles.paddingY}`}>
			<div className="px-[15px] pt-[230px] pb-[50px] ">
				<div className="flex flex-col w-full ">
					<h2 className="font-roboto font-bold  ss:text-[72px] text-[60px] text-white ss:leading-[100px] leading-[15px] text-center">
						Welcome To My Website
					</h2>
					<p className="font-poppins text-[20px] text-white text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
						eiusmod tempor
					</p>
				</div>
      </div>
				<div className="w-[50%] m-[auto]">
					<button
						type="button"
						className="button "
					>
						Click Me
					</button>
				</div>
		</section>
	);
}

export default Hero