const baseResponse = {
    responses: [
      {
        "type": "text",
        "texts": ["Foram encontrados os seguintes resultados para a busca informada:"]
      },
      {
        "type": "text",
        "texts": []
      },      
    ],
    output: {
      "total_expenses": 100
    }
}

class ResponseBuilder {
    constructor() {
        this.response = {...baseResponse};
        this.response.responses[1].texts = [];
    }

    addTextResponse(text) {
        this.response.responses[1].texts.push(text);
    }

    getResponse() {
        return this.response;
    }
}

module.exports = ResponseBuilder;