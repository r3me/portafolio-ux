import React from 'react'

const Bio = () => {

  const jobs = [
    {
      title: "Médicos sin Fronteras en México AC",
      description: "Proyecto `Transmigrantes´",
      activity: "Realización de entrevistas a personas migrantes en Tránsito por México.",
      date: "2018"
    },
    {
      title: "SIMO Consulting",
      description: "Proyecto `Calidad del Aire´",
      activity: "Responsable de equipo, seguimiento de rutas, supervisión en campo.",
      date: "2018"
    },
      {
      title: "Consultoría",
      description: "Freelance",
      activity: "Auditoría del proceso electoral, proyectos académicos, de mercadotecnia entre otros.",
      date: "2016-2018"
    },
    // {
    //   title: "Palíndromos Sociedades Igualitarias SC",
    //   description: "Proyecto 'Análisis cultural de los apoyos de PROSPERA en el desarrollo de hogares beneficiados': Investigadora Jr. Entrevistas estructuradas, Etnografía, Análisis de información obtenida. ",
    //   date: "Durango 2017-2018"
    // },
    // {
    //   title: "Freelance",
    //   description: "Como Freelance he colaborado en evaluaciones del Suburbano, Auditoría en las Elecciones, Proyectos Académicos como CIDE 'México, las Américas y el mundo' entre otros, para diversas consultoras.",
    //   date: "desde 2016 a la fecha"
    // },
  ]

  // const tech = [
  //   {
  //     title: "Hackathon Teletón",
  //     description: "Proyecto 'ConfíaT': Web enfocada a transparecia de datos y recuperación de información de donantes anónimos.",
  //     link: "https://github.com/rxmstrd/hackathonTeleton",
  //     date: "Octubre 2018"
  //   },
  //   {
  //     title: "Hackathon Blockchain",
  //     description: "Proyecto 'ID App': Aplicación para generación de Identidad Digital para personas Migrantes y Refugiadas. ",
  //     link: "https://github.com/rxmstrd/1-1-1-identity-frontend-i",
  //     date: "Septiembre 2018"
  //   },
  //   {
  //     title: "Workshop City Banamex",
  //     description: "Proyecto 'City Kanban': Tablero Kanban para Product Manager.",
  //     link: "https://github.com/rxmstrd/citi-kanban",
  //     date: "Agosto 2018"
  //   },
	// ]

	const skills = [
		{
			icon: "fas fa-pen-fancy",
			title: "Prototyping",
			items: ["Sketch", "Marvel", "Figma"]
		},
		{
			icon: "fas fa-lightbulb",
			title: "Planeación",
			items: ["Ideación de Proyectos", "Empaty Map", "Map Journey"]
		},
		{
			icon: "fas fa-id-card",
			title: "Análisis",
			items: ["User Persona", "Research", "Análisis de Data"]
		},
		{
			icon: "fas fa-code",
			title: "Desarrollo",
			items: ["HTML", "CSS", "Javascript"]
		},
	]

  const experiencia = jobs.map((job) => (
    <div key={job.title}>
      <h4>{job.title}</h4>
      <p>{job.description}</p>
      <p>{job.activity}</p>
      <b>{job.date}</b>
    </div>
  ))

  // const proyectos = tech.map((proyect) => (
  //   <div key={proyect.title}>
  //     <h4>{proyect.title}</h4>
  //     <p>{proyect.description}</p>
  //     <b>{proyect.date}</b>
  //     <a href={proyect.link} target="_blank" rel="noopener noreferrer">
  //       <i className="fab fa-github-alt" />
  //     </a>
  //   </div>
  // ))

//   <article>
//   <h3>Proyectos Tech</h3>
//   <section className="bio--tech">
//     {proyectos}
//   </section>
// </article>

  const habilidades = skills.map((skill) => (
		<div key={skill.title}>
			<span><i className={skill.icon} /></span>
			<h4>{skill.title}</h4>
			<div>
				{skill.items.map((item) => <p key={item}>{item}</p>)}
			</div>
		</div>
	))

  return (
    <div className="bio">
      <header>
        <h3>Acerca de mí.</h3>
        <p>Etnóloga - UX, apasionada por la intersección entre las ciencias sociales y la tecnología.</p> 
        <p>Me gustan los retos, aprender y compartir con equipos multidisciplinarios. </p>
      </header>
      <article>
        <h3>Experiencia</h3>
        <section className="bio--jobs">
          {experiencia}
        </section>
      </article>
      <article>
        <h3>Mis Habilidades</h3>
				<section className="bio--skills">
					{habilidades}
				</section>
      </article>
    </div>
  )

}

export default Bio
