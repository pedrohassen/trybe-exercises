import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      conteudos.map(({ conteudo, bloco, status }) => {
        return (
        <div key={conteudo}>
          <div>O conteúdo é: {conteudo}</div>
          <div>Bloco: {bloco}</div>
          <div>Status: {status}</div>
        </div>
        )
      })
    )
  }
}

export default Content;