document.addEventListener("DOMContentLoaded", function () {
  // Get search params
  const urlParams = new URLSearchParams(window.location.search);

  // Function to fill data attributes
  function fillDataAttributes() {
    const template = document.getElementById("template");
    const jsonDataParam = urlParams.get("json");

    if (jsonDataParam) {
      try {
        const jsonData = JSON.parse(decodeURIComponent(jsonDataParam));
        fillFields(template, jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }

  // Recursive function to fill template fields
  function fillFields(element, data) {
    for (const key in data) {
      const value = data[key];
      if (typeof value === "object") {
        // If value is an object, recursively fill its fields
        const subElement = element.querySelector(`[data-field="${key}"]`);
        if (subElement) {
          fillFields(subElement, value);
        }
      } else {
        // If value is not an object, fill the corresponding field
        const field = element.querySelector(`[data-field="${key}"]`);
        if (field) {
          field.textContent = value;
        }
      }
    }
  }

  // Call the function to fill data attributes
  fillDataAttributes();
});
