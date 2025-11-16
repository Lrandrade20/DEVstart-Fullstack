/**️️Classe com lista de cidades

Complete a classe ClimaDasCidades, implementando os seguintes métodos de instância:

    obterPrimeiraCidade(), que retorna a primeira cidade da variável de instância cidades.
    obterUltimaCidade(), que retorna a última cidade da variável de instância cidades.
    exportarCSV(), que retorna uma string contendo o nome de cada cidade seguido pela temperatura naquela cidade (separada por um caractere de espaço). Essa string deve ser uma string CSV, o que significa que cada cidade e grupo de temperatura deve ser separado por uma vírgula e um caractere de espaço. Por exemplo: Florianópolis 25, São Paulo 30.

A a classe é inicializada com um argumento: a matriz cidades, contendo o boletim meteorológico de várias cidades.

Outro detalhe é que alguns itens dentro do objeto dados estão em inglês. Isso acontece porque se trata de um objeto produzido por um site externo, então fique atento para reproduzir o nome dos itens fielmente no seu código.

A sua solução do exercício deve começar pelo método construtor e, após ele, você criará os demais métodos. Exemplo:

class ClimaDasCidades {
    constructor(cidades) {
        this.cidades = cidades;
    }

    obterPrimeiraCidade() {
        return this.cidades[0];
    }

 */

    // Implemente a classe ClimaDasCidades 
class ClimaDasCidades {
    constructor(cidades, temperatura) {
      this.cidades = cidades;
      this.temperatura = temperatura;

    }

    obterPrimeiraCidade() {
      return this.cidades[0]
    }

    obterUltimaCidade() {
      return this.cidades[this.cidades.length - 1]
    }

    exportarCSV() {
      // Para cada cidade, cria "Nome e TEMP"
    const pares = this.cidades.map(cidade => {
      const nome = cidade.location.name
      const temp = cidade.current.temperature
      return `${nome} ${temp}`
    })

    // Junta tudo em uma string CSV
    return pares.join(", ")
  }

}

let dados = [{
  "request": {
    "type": "Cidade",
    "query": "Florianópolis, Brasil",
    "language": "pt",
    "unit": "m"
  },
  "location": {
    "name": "Florianópolis",
    "country": "Brasil",
    "region": "Santa Catarina",
    "lat": "37.775",
    "lon": "-122.418",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:46",
    "localtime_epoch": 1606297560,
    "utc_offset": "-8.0"
  },
  "current": {
    "observation_time": "05:46 PM",
    "temperature": 14,
    "weather_code": 116,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 13,
    "wind_degree": 330,
    "wind_dir": "NNW",
    "pressure": 1024,
    "precip": 0,
    "humidity": 67,
    "cloudcover": 25,
    "feelslike": 14,
    "uv_index": 1,
    "visibility": 16,
    "is_day": "no"
  }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "São Paulo",
      "language": "pt",
      "unit": "m"
    },
    "location": {
      "name": "São Paulo",
      "country": "Brasil",
      "region": "São Paulo",
      "lat": "52.374",
      "lon": "4.890",
      "timezone_id": "Brasil/Brasília",
      "localtime": "2020-11-25 09:11",
      "localtime_epoch": 1606295460,
      "utc_offset": "1.0"
    },
    "current": {
      "observation_time": "08:11 AM",
      "temperature": 4,
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
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "Sydney, Austrália",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Sydney",
      "country": "Austrália",
      "region": "New South Wales",
      "lat": "-33.883",
      "lon": "151.217",
      "timezone_id": "Australia/Sydney",
      "localtime": "2020-11-26 04:47",
      "localtime_epoch": 1606366020,
      "utc_offset": "11.0"
    },
    "current": {
      "observation_time": "05:47 PM",
      "temperature": 19,
      "weather_code": 113,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
      ],
      "weather_descriptions": [
        "Clear"
      ],
      "wind_speed": 11,
      "wind_degree": 10,
      "wind_dir": "N",
      "pressure": 1010,
      "precip": 0,
      "humidity": 73,
      "cloudcover": 0,
      "feelslike": 19,
      "uv_index": 1,
      "visibility": 10,
      "is_day": "no"
    }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "Hanoi, Vietnã",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Hanoi",
      "country": "Vietnã",
      "region": "",
      "lat": "21.033",
      "lon": "105.850",
      "timezone_id": "Asia/Ho_Chi_Minh",
      "localtime": "2020-11-26 00:47",
      "localtime_epoch": 1606351620,
      "utc_offset": "7.0"
    },
    "current": {
      "observation_time": "05:47 PM",
      "temperature": 23,
      "weather_code": 116,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
      ],
      "weather_descriptions": [
        "Partly cloudy"
      ],
      "wind_speed": 6,
      "wind_degree": 140,
      "wind_dir": "SE",
      "pressure": 1018,
      "precip": 0,
      "humidity": 78,
      "cloudcover": 75,
      "feelslike": 25,
      "uv_index": 1,
      "visibility": 6,
      "is_day": "no"
    }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "beirute",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Beirute",
      "country": "Líbano",
      "region": "Beyrouth",
      "lat": "33.872",
      "lon": "35.510",
      "timezone_id": "Asia/Beirut",
      "localtime": "2020-11-25 19:48",
      "localtime_epoch": 1606333680,
      "utc_offset": "2.0"
    },
    "current": {
      "observation_time": "05:48 PM",
      "temperature": 20,
      "weather_code": 389,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png"
      ],
      "weather_descriptions": [
        "Rain With Thunderstorm"
      ],
      "wind_speed": 11,
      "wind_degree": 240,
      "wind_dir": "WSW",
      "pressure": 1009,
      "precip": 0.5,
      "humidity": 78,
      "cloudcover": 75,
      "feelslike": 20,
      "uv_index": 5,
      "visibility": 8,
      "is_day": "yes"
    }
  }
]