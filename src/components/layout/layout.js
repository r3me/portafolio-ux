import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '../sass/index.scss'

class Layout extends Component {

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > window.innerHeight * 0.5) {
			document.querySelector('.ui--scroll-top').classList.add('active')
		} else {
			document.querySelector('.ui--scroll-top').classList.remove('active')
		}
	}

	render() {
		return (
			<div id="layout">
				<Helmet
					title="Amelia Estrada | UX - Portafolio"
					meta={[
						{ name: 'description', content: 'Amelia Estrada | UX | México 2018 | Skills: Sketch, Marvel, Figma, Ideación de Proyectos, Reasearch, Map Journey, User Persona, Empathy Map, Análisis de Data, HTML, CSS, Javascript...' },
						{ name: 'keywords', content: 'amelia, estrada, ux, experiencia, usuario, user experience, prototipado, prototipo, research, servicios, mexico' },
					]}
				>
					<html lang="es" />
				</Helmet>
				{this.props.children}
				<a className="ui--scroll-top" onClick={() => document.querySelector('#layout').scrollIntoView({ block: "start", behavior: "smooth" })}>
					<span className="fas fa-angle-up" />
				</a>
			</div>
		)
	}

}

export default Layout
