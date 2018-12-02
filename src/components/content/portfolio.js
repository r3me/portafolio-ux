import React from 'react'

import ecommerce from '../../images/ecommerce.jpg'
import financial from '../../images/financial-app.jpg'
import teletón from '../../images/teleton.jpg'
import blockchain from '../../images/idapp.jpg'

const works = [
	{
		title: "Prototipo | Aplicación Financiera",
		link: "https://marvelapp.com/60f7397/screen/48903399",
		sites: "https://sites.google.com/view/appfinanciera/p%C3%A1gina-principal",
		img: financial,
	},
	{
		title: "Prototipo | eCommerce",
		link: "https://marvelapp.com/ecj1369/screen/47544031",
		sites: "https://sites.google.com/view/jazhei/p%C3%A1gina-principal",
		img: ecommerce,
	},
	{
		title: "Prototipo | Hackathon Teletón",
		link: "https://www.figma.com/file/oMhb2d6sOPL2LAEGAExYz3/Teleton?node-id=0%3A1",
		sites: "https://sites.google.com/view/confiateleton/p%C3%A1gina-principal",
		img: teletón,
	},
	{
		title: "Prototipo | Hackathon Blockchain",
		link: "https://marvelapp.com/9i09d6b/screen/48170277",
		sites: "https://sites.google.com/view/identidadapp/p%C3%A1gina-principal",
		img: blockchain,
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
				<a className="img" href={work.link} target="_blank" rel="noopener noreferrer">
					<img src={work.img} alt={work.title} />
				</a>
				<a className="site" href={work.sites} target="_blank" rel="noopener noreferrer">UX Design</a>
			</div>
		)) }
  </div>
)

export default Portfolio
