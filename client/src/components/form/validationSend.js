const validationSend = (errors) => {
    return Object.values(errors).some((error) => error !== undefined);
  };

export default validationSend;