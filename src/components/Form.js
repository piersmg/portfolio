const Form = () => {
	return (
		<form name="contact" method="POST" data-netlify="true">
			<div>
				<label>Name: <input type="text" name="name" /></label>   
			</div>
			<div>
				<label>Email: <input type="email" name="email" /></label>
			</div>
			<div>
				<label>Message: <textarea name="message"></textarea></label>
			</div>
			<div>
				<button type="submit">Send</button>
			</div>
		</form>
	)
};
  
export default Form;