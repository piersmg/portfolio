const Form = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full md:max-w-[500px]">
			<form className="w-full" name="contact" action="/success" method="POST" data-netlify-recaptcha="true" netlify>
				<div className="relative mb-8">
					<input placeholder=" " type="text" name="name" />   
					<label htmlFor="name">Name: </label>
				</div>
				<div className="relative mb-8">
					<input placeholder=" " type="email" name="email" />
					<label htmlFor="email">Email: </label>
				</div>
				<div className="relative mb-8">
					<textarea placeholder=" " name="message"></textarea>
					<label htmlFor="message">Message: </label>
				</div>
				<div data-netlify-recaptcha="true"></div>
				<div>
					<button className="text-2xl px-4 py-2 bg-secondary text-white focus:bg-primary hover:bg-primary dark:focus:bg-white dark:hover:bg-white focus:text-secondary hover:text-secondary" type="submit">Send</button>
				</div>
			</form>
		</div>
	)
};
  
export default Form;