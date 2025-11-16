/**Aplicativo de previsão do tempo

Complete a classe Temperatura com os seguintes métodos de instância:

    obterLocalizacao(), de forma que retorne o nome da cidade seguido por uma vírgula, um caractere de espaço e o nome do país. Por exemplo: Florianópolis, Brasil
    obterIcone(), de modo que retorne o ícone que representa o clima.
    obterTemperatura(), de modo que retorne a temperatura seguida do símbolo de grau (use uma entidade HTML que é &deg;) e seguida do caractere C (para Celsius). Por exemplo, 10°C (mas você tem que usar a entidade HTML acima.

Lembre-se que o console.log() é seu amigo! Ele permitirá que você visualize a estrutura do objeto com o qual está trabalhando. Veja que o objeto com o qual você deve trabalhar neste exercício é o dadosDoClima.

Se perceber que há tudo o que precisa em dadosDoClima. Vai ver que o ícone se encontra lá também. Para acessá-lo é simples: dadosDoClima.current.weather_icons. Ele é um endereço eletrônico que será o src da tag img.

Note que a classe é inicializada com um argumento: o objeto de detalhes contendo os dados meteorológicos.

Portanto:

    crie um método construtor que faça essa inicialização.
    Outro detalhe é que alguns itens dentro do objeto dadosDoClima estão em inglês.

(Isso acontece porque se trata de um objeto produzido por um site externo, então fique atento para reproduzir o nome dos itens fielmente no seu código).
 */



// Implemente a classe Temperatura 

// dadosDoClima.current.weather_icons
class Temperatura {

    obterLocalizacao() {
      return `${dadosDoClima.location.name}, ${dadosDoClima.location.country}`
    }

    obterIcone() {
      return `${dadosDoClima.current.weather_icons}`
    }

    obterTemperatura() {
      return `${dadosDoClima.current.temperature}&deg;C`
    }

}

// dados utilizados para trazer a temperatura

let dadosDoClima = {
  "request": {
    "type": "Cidade",
    "query": "Florianopolis",
    "language": "pt",
    "unit": "m"
  },
  "location": {
    "name": "Florianópolis",
    "country": "Brasil",
    "region": "Santa Catarina",
    "lat": "52.374",
    "lon": "4.890",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:11",
    "localtime_epoch": 1606295460,
    "utc_offset": "1.0"
  },
  "current": {
    "observation_time": "08:11 AM",
    "temperature": 25,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Clear"
    ],
    "wind_speed": 17,
    "wind_degree": 160,
    "wind_dir": "SSE",
    "pressure": 1014,
    "precip": 0,
    "humidity": 87,
    "cloudcover": 0,
    "feelslike": 1,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "yes"
  }
}