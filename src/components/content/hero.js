import React from 'react'

import amelia from './../../images/amelia.png'

const Hero = () => {
	const scrollToContact = () => document.querySelector('.contact').scrollIntoView({ block: "start", behavior: "smooth" });
	const scrollToPortfolio = () => document.querySelector('.portfolio').scrollIntoView({ block: "start", behavior: "smooth" });
  return (
    <div className="hero">
      <header>
        <picture>
          <img src={amelia} alt="Amelia Estrada | UX" />
        </picture>
        <h1>Amelia Estrada</h1>
        <h2>Ux Designer</h2>
      </header>
      <nav>
        <a href="https://www.linkedin.com/in/amelia-estrada/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
        <a href="https://github.com/rxmstrd?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" /></a>
        <a onClick={scrollToContact}><i className="far fa-envelope" /></a>
			</nav>
			<aside>
				<a onClick={scrollToContact}>Contacto</a>
				<a onClick={scrollToPortfolio}>Portafolio</a>
			</aside>
    </div>
  )
}

export default Hero
