import React from "react";

class About extends React.Component {
  render() {

    const skills = ["HTML", "CSS", "Javascript", "Lógica de Programação", "DOM", "HoFs", "Jest", "Bootstrap", "React"] // adicione mais habilidades aqui
const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

    return (
      <>
        <h1>Pedro Hasse Niemczewski</h1>
        <p>Oi, eu sou o Pedro, nasci em Pelotas, Rio Grande do Sul e estou começando Front-End na Turma 23 - B da Trybe!</p>
        <h2>Minhas Habilidades até agora:</h2>
        <ul>{jsxSkills}</ul>
      </>
    )
  }
}

export default About;