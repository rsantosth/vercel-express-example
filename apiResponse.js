const response = {
    "responses": [
      {
        "type": "text",
        "texts": ["Your total seems to be 100 dollars!"]
      },
      {
        "type": "text",
        "texts": [
          "Would you like to receive a discount by filling out a survey?"
        ],
        "options": [
          {
            "text": "yes",
            "label": "Yes!"
          },
          {
            "text": "no",
            "label": "No, thanks"
          }
        ]
      },
      {
        "type": "image",
        "name": "Aristotle",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/1024px-Aristotle_Altemps_Inv8575.jpg",
        "size": 10
      },
      {
        "type": "url",
        "url": "https://www.google.com/maps/place/Athens,+Greece/@37.9908997,23.7033199,13z/data=!3m1!4b1!4m5!3m4!1s0x14a1bd1f067043f1:0x2736354576668ddd!8m2!3d37.9838096!4d23.7275388"
      },
      {
        "type": "video",
        "name": "Apple Commercial",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "size": 2299653
      },
      {
        "type": "file",
        "name": "Riemann.pdf",
        "url": "https://www.claymath.org/sites/default/files/official_problem_description.pdf",
        "size": 10000000
      },
      {
        "type": "event",
        "trigger_node_id": "56d7a633-60c4-4206-86d3-9aaf1e77c1c6"
      },
      {
        "type": "carousel",
        "cards": [
          {
            "media": {
              "url": "https://res.cloudinary.com/dey0ylu2x/image/upload/v1607095100/carousel/image1.png",
              "type": "image"
            },
            "title": "Example title",
            "buttons": [
              {
                "type": "postback",
                "label": "Button",
                "value": "hello"
              }
            ],
            "subtitle": "Example subtitle",
            "default_action": {
              "type": "phone",
              "value": "6900000000"
            }
          },
          {
            "media": {
              "url": "https://res.cloudinary.com/dey0ylu2x/image/upload/v1607095100/carousel/image2.png",
              "type": "image"
            },
            "title": "Example title",
            "buttons": [
              {
                "url": "https://integration-guides.vercel.app/demo/demoForm",
                "type": "webview",
                "label": "Open Webview!"
              },
              {
                "url": "https://moveo.ai",
                "type": "url",
                "label": "Button"
              },
              {
                "type": "phone",
                "label": "Button",
                "value": "2100123456"
              }
            ],
            "subtitle": "Example subtitle",
            "default_action": {
              "type": "postback",
              "value": "hello"
            }
          },
          {
            "media": {
              "url": "https://res.cloudinary.com/dey0ylu2x/image/upload/v1607095100/carousel/image3.png",
              "type": "image"
            },
            "title": "Example Webview",
            "buttons": [
              {
                "url": "https://www.google.com",
                "type": "url",
                "label": "Button"
              }
            ],
            "subtitle": "Example subtitle webview",
            "default_action": {
              "url": "https://integration-guides.vercel.app/demo/demoForm",
              "type": "webview"
            }
          }
        ],
        "action_id": "6bd27163-2aa9-476b-8f53-8bf5300e1882"
      }
    ],
    "output": {
      "total_expenses": 100
    }
}

module.exports = response;