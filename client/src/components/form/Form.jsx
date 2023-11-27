import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import validationInputs from "./validationInputs.js";
import validationSend from "./validationSend.js";
import ButtonCreate from '../buttons/ButtonCreate.jsx';
import ButtonCancel from '../buttons/ButtonCancel.jsx';
import { createProduct, getAllProducts, updateProduct } from '../../redux/actions.js';
import ButtonUpdate from '../buttons/ButtonUpdate.jsx';

export default function Form({ onCancel, isEdit, productToUpdate }) {
    const dispatch = useDispatch();

    const [input, setInput]= useState({
      name: isEdit ? productToUpdate.title : "",
      image: isEdit ? productToUpdate.image : "",
      category: isEdit ? productToUpdate.category : "",
      price: isEdit ? productToUpdate.price.toString() : "",
      review: isEdit ? productToUpdate.rating.rate.toString() : "",
      description: isEdit ? productToUpdate.description : "",
    });
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        category: "",
        price: "",
        review: "",
        description: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        image: false,
        category: false,
        price: false,
        review: false,
        description: false,
    });

    const [disable, setDisable]= useState(false);

    // Este useEffect controla que el boton "Create" se habilite o no
    useEffect(() => { 
        let errExists = validationSend(errors);
        errExists
        ? setDisable(true)
        : setDisable(false)
    }, [errors]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput({
          ...input,
          [name]: value,
        });
        // Marca el campo como "touched" cuando el usuario interactúa con el mismo
        setTouched({
          ...touched,
          [name]: true,
        });
    };

    //Valida los campos solo si el usuario interactua con ellos (touched) o cuando isEdit esta activo (para que verifique errores en primera instancia)
    useEffect(() => {
        if (touched.name || isEdit) {
          const validationErrors = validationInputs({ name: input.name });
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: validationErrors.name,
          }));
        }
        if (touched.image || isEdit) {
          const validationErrors = validationInputs({ image: input.image });
          setErrors((prevErrors) => ({
            ...prevErrors,
            image: validationErrors.image,
          }));
        }
        if (touched.category || isEdit) {
          const validationErrors = validationInputs({ category: input.category });
          setErrors((prevErrors) => ({
            ...prevErrors,
            category: validationErrors.category,
          }));
        }
        if (touched.price || isEdit) {
          const validationErrors = validationInputs({ price: input.price });
          setErrors((prevErrors) => ({
            ...prevErrors,
            price: validationErrors.price,
          }));
        }
        if (touched.review || isEdit) {
          const validationErrors = validationInputs({ review: input.review });
          setErrors((prevErrors) => ({
            ...prevErrors,
            review: validationErrors.review,
          }));
        }
        if (touched.description || isEdit) {
          const validationErrors = validationInputs({ description: input.description });
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: validationErrors.description,
          }));
        }
    }, [input, touched]);

    //Funcion que despacha los inputs
    const handleSubmit = (event) => {
      // Verifica si el precio tiene una coma, en ese caso la convierte un número y reemplaza la coma por punto
      const priceString = String(input.price);
      const hasComma = priceString.includes(','); 
      const formattedPrice = hasComma ? parseFloat(priceString.replace(',', '.')) : parseFloat(priceString);

      // Verifica si la califiacion contiene una coma, en ese caso la convierte un número y reemplaza la coma por punto
      const reviewString = String(input.review);
      const hasCommaInReview = reviewString.includes(',');
      const formattedReview = hasCommaInReview ? parseFloat(reviewString.replace(',', '.')): parseFloat(reviewString);
      
      //Creo un objeto para guardar en BD respetando el formato del objeto obtenido de la API externa
      let data = {}
      if(input){
        data.title = input.name;
        data.price = formattedPrice;
        data.description = input.description;
        data.category = input.category;
        data.image = input.image;
        data.rating = {
          rate: formattedReview,
          count: 1
        };
      }
      
      try{
        event.preventDefault();
        dispatch(createProduct(data));
        dispatch(getAllProducts()); 
        setInput({
          name: "",
          image: "",
          category: "",
          price: "",
          review: "",
          description: "",
        });
        } catch (error) {
          window.alert(error.message);
      }
    }

    const handleSubmitUpdate = (event) => {
       // Verifica si el precio contiene una coma, en ese caso la convierte un número y reemplaza la coma por punto
       const priceString = String(input.price);
       const hasComma = priceString.includes(','); 
       const formattedPrice = hasComma ? parseFloat(priceString.replace(',', '.')) : parseFloat(priceString);

       // Verifica si la califiacion contiene una coma, en ese caso la convierte un número y reemplaza la coma por punto
       const reviewString = String(input.review);
       const hasCommaInReview = reviewString.includes(',');
       const formattedReview = hasCommaInReview ? parseFloat(reviewString.replace(',', '.')): parseFloat(reviewString);
       
       //Creo un objeto para guardar en BD respetando el formato del objeto obtenido de la API externa
       let data = {}
       if(input){
         data.id = productToUpdate?.id;
         data.title = input.name;
         data.price = formattedPrice;
         data.description = input.description;
         data.category = input.category;
         data.image = input.image;
         data.rating = {
           rate: formattedReview,
           count: productToUpdate?.rating.count,
         };
       }
       
       try{
         event.preventDefault();
         dispatch(updateProduct(data));
         dispatch(getAllProducts()); 
         setInput({
           name: "",
           image: "",
           category: "",
           price: "",
           review: "",
           description: "",
         });
         } catch (error) {
           window.alert(error.message);
       }
    };
 
  return (
    <div className=' flex flex-col w-[300px] sm:w-[400px]'>
        {
          isEdit ?
          <h1 className=' text-blue-500'><b>Edit Product</b></h1>
          :
          <h1 className=' text-blue-500'><b>Create Product</b></h1>
        }
        <form onSubmit={isEdit ? handleSubmitUpdate : handleSubmit} >
            <div>
                <div className="flex flex-col flex-grow">
                    <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={input.name} 
                    className=" w-full rounded-lg pl-2 border-2 border-blue-500 h-[30px] 2xl:h-[35px]"
                    placeholder="Enter a name..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] md:min-h-[28px] text-start text-[12px] xs:text-sm md:text-lg ">
                        {errors.name ? <p className="md:pl-1 text-red-600 ">{errors.name}</p> : null}
                    </section>
                </div>
                <div className="flex flex-col flex-grow">
                    <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Image</label>
                    <input 
                    type="text" 
                    name="image" 
                    value={input.image} 
                    className=" w-full rounded-lg pl-2 border-2 border-blue-500 h-[30px] 2xl:h-[35px]"
                    placeholder="Enter an URL..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] md:min-h-[28px] text-start xs:text-sm  text-[12px] md:text-lg">
                        {errors.image ? <p className="md:pl-1 text-red-600">{errors.image}</p> : null}
                    </section>
                </div>
                <div className="flex flex-col flex-grow">
                    <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Category</label>
                    <input 
                    type="text" 
                    name="category" 
                    value={input.category} 
                    className=" w-full rounded-lg pl-2 border-2 border-blue-500 h-[30px] 2xl:h-[35px]"
                    placeholder="Enter a category..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] md:min-h-[28px] text-start xs:text-sm  text-[12px] md:text-lg">
                        {errors.category ? <p className="md:pl-1 text-red-600">{errors.category}</p> : null}
                    </section>
                </div>
                <div className="flex flex-col flex-grow">
                    <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Price</label>
                    <input 
                    type="text" 
                    name="price" 
                    value={input.price} 
                    className=" w-full rounded-lg pl-2 border-2 border-blue-500 h-[30px] 2xl:h-[35px]"
                    placeholder="Enter a price..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] md:min-h-[28px] text-start xs:text-sm  text-[12px] md:text-lg">
                        {errors.price ? <p className="md:pl-1 text-red-600">{errors.price}</p> : null}
                    </section>
                </div>
                <div className="flex flex-col flex-grow">
                    <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Reviews rating</label>
                    <input 
                    type="text" 
                    name="review" 
                    value={input.review} 
                    className=" w-full rounded-lg pl-2 border-2 border-blue-500 h-[30px] 2xl:h-[35px]"
                    placeholder="Enter a reviews rating..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] md:min-h-[28px] text-start xs:text-sm  text-[12px] md:text-lg">
                        {errors.review ? <p className="md:pl-1 text-red-600">{errors.review}</p> : null}
                    </section>
                </div>
            </div>
            <div className="flex flex-col text-black text-sm md:text-lg xl:text-xl">
                <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    value={input.description} 
                    className=" w-full h-[70px] sm:h-[100px] md:h-[120px] rounded-lg pl-2 pb-12 sm:pb-14 text-start border-2 border-blue-500 "
                    placeholder="Enter a description here..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] text-start text-[12px] xs:text-sm md:text-lg md:min-h-[28px]">
                    {errors.description ? (
                        <p className="md:pl-1 text-red-600">{errors.description}</p>
                        ) : (
                        input.description && !errors.description ? (
                            <p className="md:pl-1 text-lime-600">{`Maximum of  500 characters (${input.description.length}/500)`}</p>
                        ) : null
                    )}
                    </section>
            </div>
            <div className="flex justify-center items-center gap-6">
              <ButtonCancel onClick={onCancel}/> 
              {
                isEdit ? 
                <ButtonUpdate onClick={handleSubmitUpdate} onCloseModal={onCancel} disable={disable}/>
                :
                <ButtonCreate onClick={handleSubmit} onCloseModal={onCancel} disable={disable}/> 
              }
              
            </div>
        </form>
    </div>
  )
}