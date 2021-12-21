const Form = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<form className="min-w-[500px]" name="contact" action="/success" method="POST" data-netlify="true">
				<div className="relative mb-8">
					<input placeholder=" " type="text" name="name" />   
					<label for="name">Name: </label>
				</div>
				<div className="relative mb-8">
					<input placeholder=" " type="email" name="email" />
					<label for="email">Email: </label>
				</div>
				<div className="relative mb-8">
					<textarea placeholder=" " name="message"></textarea>
					<label for="message">Message: </label>
				</div>
				<div>
					<button className="text-2xl px-4 py-2 bg-secondary text-white focus:bg-primary hover:bg-primary dark:focus:bg-white dark:hover:bg-white focus:text-secondary hover:text-secondary" type="submit">Send</button>
				</div>
			</form>
		</div>
	)
};
  
export default Form;