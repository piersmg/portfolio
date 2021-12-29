const Form = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full md:max-w-[500px]">
			<form className="w-full" name="contact" method="POST" action="/success" data-netlify-recaptcha="true" id="contact-form" data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />
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

// const handleSubmit = (e) => {
// 	e.preventDefault()
// 	let form = document.getElementById('contact-form');
// 	let formData = new FormData(form)
// 	fetch('/', {
// 		method: 'POST',
// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
// 		body: new URLSearchParams(formData).toString()
// 	}).then(() => {
// 		console.log('Form successfully submitted');
// 		form.remove();
// 		document.getElementsByClassName('content-body')[0].insertAdjacentHTML('afterbegin', '<p>Thanks for getting in touch. I\'ll get back to you soon.</p>');
// 	}).catch((error) => alert(error))
// }

export default Form;