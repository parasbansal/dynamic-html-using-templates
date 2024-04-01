# Dynamic HTML creation using templates

## Description

This project is a simple example of how to create a dynamic HTML using templates.

## How to run

1. Clone the repository
2. Run the `.html` file in a browser, use a live server or just open the file in a browser.
3. Append the search parameter to see the dynamic content. For example, `?name=John&age=25`

## How to use

Create more templates by creating more HTML files. Link the respective css file. Use the `script.js` file for all the templates. Use `template` as the id of the container of the whole page. Data can be linked using `data-field` attribute in the HTML. The data can be passed as a query parameter in the URL.

Data is expected to be encoded and in JSON format. For example, `?data=%7B%22name%22%3A%22John%22%2C%22age%22%3A25%7D` is the encoded form of `?data={"name":"John","age":25}`.

### Nested data

There could be nested data in the json, the js file will automatically find the nested data and replace the content.
The HTML file should have the data-field attribute on the parent and then on the actual children. For example, if the data is

```json
{
  "name": "John",
  "address": {
    "city": "New York",
    "country": "USA"
  }
}
```

, then the HTML should have the following structure:

```html
<div data-field="address">
  <p data-field="city"></p>
  <p data-field="country"></p>
</div>
```

## How it works

The project uses the `URLSearchParams` to get the search parameters from the URL. Then, it uses the `document.querySelector` to get the elements from the HTML and change the content based on the search parameters.

## License

This project is licensed under the Apache License 2.0. Read more about it in the `LICENSE` file.

## Author

This project is created by [Paras Bansal](github.com/parasbansal)
