const validationSend = (errors, input) => {
    let errExists = false;

    errors.name === undefined &&
    errors.image === undefined &&
    errors.category === undefined &&
    errors.price === undefined &&
    errors.review === undefined &&
    errors.description === undefined
    ?
    errExists = false
    :
    errExists = true;

    return errExists;
};

export default validationSend;