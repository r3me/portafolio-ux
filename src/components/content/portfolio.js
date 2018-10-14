import React from 'react'

import ecommerce from '../../images/ecommerce.jpg'
import financial from '../../images/financial-app.jpg'
import teletón from '../../images/teleton.jpg'
import blockchain from '../../images/idapp.jpg'
import citi from '../../images/citi.jpg'

const works = [
	{
		title: "Prototipo | Aplicación Financiera",
		time: "Tiempo de Desarrollo | 3 Semanas",
		team: "Desarrollo | UX Design: Amelia Estrada. (Proyecto Individual)",
		link: "https://marvelapp.com/60f7397/screen/48903399",
		img: financial,
	},
	{
		title: "Prototipo | eCommerce",
		time: "Tiempo de Desarrollo | 3 Semanas",
		team: "Desarrollo | UX Design: Sandra Morelos y Amelia Estrada",
		link: "https://github.com/rxmstrd/e-commerce",
		img: ecommerce,
	},
	{
		title: "Prototipo | Hackathon Teletón",
		time: "Tiempo de Desarrollo | 5, 6 y 7 de Octubre 2018",
		team: "Desarrollo | UX Design: Amelia Estrada, Front End: Diana Arana y Alexis Doli ",
		link: "https://github.com/rxmstrd/hackathonTeleton",
		img: teletón,
	},
	{
		title: "Prototipo | Hackathon Blockchain",
		time: "Tiempo de Desarrollo | 22 y 23 de Sep 2018",
		team: "Desarrollo | UX Design + 2 Front End + 2 Estrategia de Neogocios ",
		link: "https://github.com/rxmstrd/1-1-1-identity-frontend-i",
		img: blockchain,
	},
	{
		title: "Prototipo | Workshop de Citi Banamex",
		time: "Tiempo de Desarrollo | 11 Agosto de 2018",
		team: "Desarrollo | UX Design: Berenice Lemus y Amelia Estrada+ 3 Front End",
		link: "https://github.com/rxmstrd/citi-kanban",
		img: citi,
	},

]

const Portfolio = () => (
	<div className="portfolio">
		<header>
			<h3>Portafolio</h3>
		</header>
		{ works.map((work) => (
			<div key={work.title}>
				<h4>{work.title}</h4>
				<h4>{work.time}</h4>
				<h4>{work.team}</h4>
				<a href={work.link} target="_blank" rel="noopener noreferrer">
					<img src={work.img} alt={work.title} />
				</a>
			</div>
		)) }
  </div>
)

export default Portfolio
