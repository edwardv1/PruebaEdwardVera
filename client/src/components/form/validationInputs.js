const validationInputs = (input) => {
  let errors = {};

  // Validacion de Name 
  if (!input.name) {
    errors.name = "You must enter a product name.";
  } else {
    if (input.name.length > 100) errors.name = "The name cannot have more than 100 letters.";
  }

  // Validacion de Image 
  let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png)$/;
  if (!input.image) {
    errors.image = "You must enter a image.";
  } else {
    if (!regexImage.test(input.image)) errors.image = "The URL must end with .jpg, .jpeg or .png";
  }

  // Validacion de Category
  if (!input.category) {
    errors.category = "You must enter a category.";
  } else {
    if (input.category.length > 40) errors.category = "The category cannot have more than 40 letters.";
  }

  // Validacion de Price 
  if (!input.price) {
    errors.price = "You must enter a price value";
  } else {
    const priceString = String(input.price);
    
    if (!/^\d+(\.\d{1,2})?$/.test(priceString.replace(',', '.'))) {
      errors.price = "Invalid price format. Please use only numbers and an optional decimal point with up to two decimal places.";
    } else if (parseFloat(priceString) < 0) {
      errors.price = "The price must be greater than or equal to 0.";
    }
  }

  // Validacion de Reviews rating
  if (!input.review) {
    errors.review = "You must enter a reviews rating";
  } else {
    const reviewString = String(input.review);
    
    if (!/^\d+(\.\d{1,2})?$/.test(reviewString.replace(',', '.'))) {
      errors.review = "Invalid reviews rating format. Please use only numbers and an optional decimal point with up to two decimal places.";
    } else if (parseFloat(reviewString) < 0) {
      errors.review = "The review must be greater than or equal to 0.";
    } else if (parseFloat(reviewString) > 5) {
      errors.review = "The review must be less than or equal to 5.";
    }
  }
  
  // Validacion de Description  
  if (!input.description) {
    errors.description = "You must enter a description.";
  } else {
    if (input.description.length > 500) errors.description = "You should not enter more than 500 characters.";
  }

  return errors;
};

  
  export default validationInputs;