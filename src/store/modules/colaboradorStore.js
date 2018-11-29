export default {
  state: {
    colaboradores: [
      {
        id: 1,
        nome: 'Homem Aranha',
        dataCadastro: new Date(),
        status: true,
        matricula: '0001',
        cpf: '05259684745',
        email: 'homemaranha@marvel.com',
        celular: '05259684745',
        pis: '05259684745',
        passwordlog: '1234',
        departamento: 1,
        turno: 1,        
        photo: 'https://i.etsystatic.com/14168448/r/il/b0155f/1605731592/il_570xN.1605731592_fis8.jpg'
      },
      {
        id: 2,
        nome: 'Homem Formiga',
        dataCadastro: new Date(),
        status: true,
        matricula: '0002',
        cpf: '89233151689',
        email: 'homemformiga@marvel.com',
        celular: '89233151689',
        pis: '89233151689',
        passwordlog: '1234',
        departamento: 1,
        turno: 1,
        photo: 'https://i.etsystatic.com/10244140/r/il/baca8b/1460009402/il_570xN.1460009402_4yp9.jpg'
      },
      {
        id: 3,
        nome: 'Vespa',
        dataCadastro: new Date(),
        status: false,
        matricula: '0003',
        cpf: '62699151122',
        email: 'vespa@marvel.com',
        celular: '62699151122',
        pis: '62699151122',
        passwordlog: '1234',
        departamento: 1,
        turno: 1,
        photo: 'https://i.etsystatic.com/16285302/r/il/88a44f/1646269812/il_570xN.1646269812_dpab.jpg'
      },
      {
        id: 4,
        nome: 'Mulher Maravilha',
        dataCadastro: new Date(),
        status: true,
        matricula: '0004',
        cpf: '68225762401',
        email: 'mulhermaravilha@dc.com',
        celular: '68225762401',
        pis: '68225762401',
        passwordlog: '1234',
        departamento: 1,
        turno: 1,
        photo: 'https://i.etsystatic.com/11670458/r/il/6703f2/1255225743/il_570xN.1255225743_8d1a.jpg'
      },
      {
        id: 5,
        nome: 'Super-man',
        dataCadastro: new Date(),
        status: false,
        matricula: '0005',
        cpf: '65019208680',
        email: 'superman@dc.com',
        celular: '65019208680',
        pis: '65019208680',
        passwordlog: '1234',
        departamento: 1,
        turno: 1,
        photo: 'https://i.etsystatic.com/12361366/r/il/951550/984615895/il_570xN.984615895_5ima.jpg'
      }
    ]
  },
  getters: {
    colaboradoresAtivos (state) {
      return state
        .colaboradores
        .filter(colab => colab.status)
        .map(c => { return { ...c, dataCadastroFormatada: c.dataCadastro.toDateString() } })
    }
  },
  mutations: {

  },
  actions: {

  }
}
