const baseTextResponse = {
  "type": "text",
  "texts": ["Foram encontrados os seguintes resultados para a busca informada:"]
}

class ResponseBuilder {
    constructor() {
      this.response = {};
      this.textResponses = [];
    }

    addTextResponse(text) {
      this.textResponses.push({
          "type": "text",
          "texts": [text]
        });
    }

    getResponsesLength() {
      return this.textResponses.length;
    }

    getResponse() {
      this.response = {
        responses: [],
        output: {
          "total_vessels": this.getResponsesLength(),
        }
      };

      this.response.responses = [baseTextResponse, ...this.textResponses.slice(0, 4)];

      return this.response;
    }
}

module.exports = ResponseBuilder;