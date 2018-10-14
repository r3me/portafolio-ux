import React from 'react'

const Form = () => {
	return (
		<form className="contact--form" action="https://formspree.io/rxm.strd@gmail.com" method="POST">
			<label>
				<input type="text" name="name" placeholder="¿Cuál es tu nombre?" />
			</label>
			<label>
				<input type="email" placeholder="¿Cuál es tu correo eléctronico?" name="_replyto" />
			</label>
			<label>
				<textarea name="message" placeholder="¿En qué puedo ayudarte?" />
			</label>
			<label>
				<button type="submit">Enviar</button>
			</label>
		</form>
	)
}

const Contact = () => {
	return (
		<div className="contact">
			<header>
				<h3>Contacto</h3>
			</header>
			<Form />
		</div>
	)
}

export default Contact
