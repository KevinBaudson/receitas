import React from 'react'

import '../Home/Home.css'

const Home = () => {
  return (
    <main className='home'>
  
        <div className="main">
          <h1 className='title-home'>Receitas para todos os gostos!</h1>
          {/* <img className='img-home' src="https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg" alt="imagem principal" /> */}
        </div>
        <h2>Saiba mais sobre a culinária</h2>
        <article className='article'>
          <div className="content">
            <h3>Curiosidades na mesa</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur corporis hic! Aperiam totam consequatur recusandae soluta optio sequi? Ab consectetur quisquam doloribus recusandae. Unde numquam quam fuga nihil deserunt?</p>
          </div>
          <div className="content">
            <h3>Conheça a cultura Brasileira</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur corporis hic! Aperiam totam consequatur recusandae soluta optio sequi? Ab consectetur quisquam doloribus recusandae. Unde numquam quam fuga nihil deserunt?</p>
            </div>
        </article>
        <section className='section'>
          <div className="content-section">
            <h3>O básico que funciona</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro, voluptatum sit aliquid vel commodi magnam dolor minima fugiat odit quisquam, corrupti facere voluptatibus repellendus saepe sequi reprehenderit dolorum est.</p>
          </div>
          <div className="image">
            <img  src="https://imagens.usp.br/wp-content/uploads/pratodecomidafotomarcossantos003.jpg" alt="" />
          </div>
        </section>
    </main>
  )
}

export default Home