## introduction
````
this is webpack loader for cover .xls/xlsx to json which you can require excel file is javascript file.
````
## install
````
 npm install xlsx-loader --save-dev
````
## useage
````javascript
var data = require('excelFile.xlsx');
````
## your excel file:
| type_id | type_name | sku | title | 
| ---- | ---- | ---- | ---- |  
| 0 | typename | 122 | this is title |
| 1 | typename | 122 | this is title |
| 2 | typename | 122 | this is title |
| 3 | typename | 122 | this is title |
## return :
````javascript
{
  "list": [
    {
      "type_id" : 0,
      "type_name": "typename",
      "sku": 122,
      "title": "this is title"
    },
    {
      "type_id" : 1,
      "type_name": "typename",
      "sku": 122,
      "title": "this is title"
    },
    {
      "type_id" : 2,
      "type_name": "typename",
      "sku": 122,
      "title": "this is title"
    },
    {
      "type_id" : 3,
      "type_name": "typename",
      "sku": 122,
      "title": "this is title"
    }
  ]
}
````
## licence
MIT
