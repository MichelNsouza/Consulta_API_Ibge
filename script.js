const app = () => {
  return {
    
    estados: [],
    
    cidades: [],
    
    init() {
      axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(resposta => {this.estados = resposta.data})
    },
    
    buscaCidades(estadoSigla){
      axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + estadoSigla  + "/municipios")
      .then(resposta => { this.cidades = resposta.data})
    },

  }
}