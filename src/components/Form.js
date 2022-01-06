const Form = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full md:max-w-[500px]">
			{/* <form className="w-full" name="contact" method="POST" data-netlify-recaptcha="true" id="contact-form" onSubmit={handleSubmit}> */}
			<form className="w-full" name="contact" method="POST" action="" data-netlify-recaptcha="true" id="contact-form" data-netlify="true">
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

// function encode(data) {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&")
// }

// const handleSubmit = (event) => {
// 	event.preventDefault()
// 	let data = new FormData(event.target);
// 	fetch("/", {
// 		method: "POST",
// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
// 		body: encode(data)
// 	}).then(() => {
// 		document.getElementsByClassName('content-body')[0].insertHTML = '<p>Thanks for getting in touch. I\'ll get back to you soon.</p>';
// 	}).catch(error => {
// 		console.log(error);
// 		document.getElementsByClassName('content-body')[0].insertHTML = `<p>Oh no! there's an error: ${error}</p>`;
// 	})
// }

export default Form;