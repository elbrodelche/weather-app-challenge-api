define({ "api": [
  {
    "type": "get",
    "url": "/location",
    "title": "",
    "group": "Location",
    "name": "Get_Location",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Contains",
            "description": "<p>the response of the backend with 2 parameters.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Respnse status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": {\"ip\":\"181.44.60.35\",\"city\":\"Buenos Aires\",\"region\":\"Buenos Aires F.D.\",\"region_code\":\"C\",\"country\":\"AR\",\"country_code\":\"AR\",\"country_code_iso3\":\"ARG\",\"country_capital\":\"Buenos Aires\",\"country_tld\":\".ar\",\"country_name\":\"Argentina\",\"continent_code\":\"SA\",\"in_eu\":false,\"postal\":\"1871\",\"latitude\":-34.6021,\"longitude\":-58.3845,\"timezone\":\"America/Argentina/Buenos_Aires\",\"utc_offset\":\"-0300\",\"country_calling_code\":\"+54\",\"currency\":\"ARS\",\"currency_name\":\"Peso\",\"languages\":\"es-AR,en,it,de,fr,gn\",\"country_area\":2766890,\"country_population\":41343201,\"asn\":\"AS27747\",\"org\":\"Telecentro S.A.\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Can't reach location.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/v1/location",
        "type": "curl"
      }
    ],
    "description": "<p>All users can see their location</p>",
    "version": "0.0.0",
    "filename": "src/services/location.service.ts",
    "groupTitle": "Location"
  }
] });
