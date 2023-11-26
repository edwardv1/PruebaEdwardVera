import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import validationInputs from "./validationInputs.js";
import validationSend from "./validationSend.js";
import ButtonCreate from '../buttons/ButtonCreate.jsx';
import ButtonCancel from '../buttons/ButtonCancel.jsx';
import { createProduct, getAllProducts } from '../../redux/actions.js';

export default function Form({onCancel}) {
    const dispatch = useDispatch();

    const [input, setInput]= useState({
        name: "",
        image: "",
        category: "",
        price: "",
        review: "",
        description: "",
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

    // Este useEffect controla que el boton "Enviar" se habilite o no
    useEffect(() => { 
        let errExists = validationSend(errors, input);
        errExists
        ? setDisable(true)
        : setDisable(false)
    }, [errors, input]);

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

    // Valida los campos solo si el usuario interactua con ellos (touched)
    useEffect(() => {
        if (touched.name) {
          const validationErrors = validationInputs({ name: input.name });
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: validationErrors.name,
          }));
        }
        if (touched.image) {
          const validationErrors = validationInputs({ image: input.image });
          setErrors((prevErrors) => ({
            ...prevErrors,
            image: validationErrors.image,
          }));
        }
        if (touched.category) {
          const validationErrors = validationInputs({ category: input.category });
          setErrors((prevErrors) => ({
            ...prevErrors,
            category: validationErrors.category,
          }));
        }
        if (touched.price) {
          const validationErrors = validationInputs({ price: input.price });
          setErrors((prevErrors) => ({
            ...prevErrors,
            price: validationErrors.price,
          }));
        }
        if (touched.review) {
          const validationErrors = validationInputs({ review: input.review });
          setErrors((prevErrors) => ({
            ...prevErrors,
            review: validationErrors.review,
          }));
        }
        if (touched.description) {
          const validationErrors = validationInputs({ description: input.description });
          setErrors((prevErrors) => ({
            ...prevErrors,
            description: validationErrors.description,
          }));
        }
    }, [input, touched]);

    //Funcion que despacha los inputs
    const handleSubmit = (event) => {
      // Verifica si la cadena tiene una coma, en ese caso la convierte un número y reemplaza la coma por punto
      const priceString = String(input.price);
      const hasComma = priceString.includes(','); 
      const formattedPrice = hasComma ? parseFloat(priceString.replace(',', '.')) : parseFloat(priceString);
      
      //Creo un objeto para guardar en BD respetando el formato del objeto obtenido de la API externa
      let data = {}
      if(input){
        data.title = input.name;
        data.price = formattedPrice;
        data.description = input.description;
        data.category = input.category;
        data.image = input.image;
        data.rating = {
          rate: input.review,
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
 
  return (
    <div className=' flex flex-col w-[400px]'>
        <h1 className=' text-blue-500'><b>Create a new Product</b></h1>
        <form onSubmit={handleSubmit} >
            <div className="">
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
                    className=" w-full h-[70px] sm:h-[100px] md:h-[90px] rounded-lg pl-2 pb-12 sm:pb-14 text-start border-2 border-blue-500 xl:h-[190px] xl:pb-40"
                    placeholder="Enter a description here..."
                    onChange={(event) => handleInputChange(event)}
                    />
                    <section className="min-h-[20px] text-start text-[12px] xs:text-sm md:text-lg md:min-h-[28px]">
                    {errors.description ? (
                        <p className="md:pl-1 text-red-600">{errors.description}</p>
                        ) : (
                        input.description && !errors.description ? (
                            <p className="md:pl-1 text-lime-600">{`Maximum of 300 characters (${input.description.length}/300)`}</p>
                        ) : null
                    )}
                    </section>
            </div>
            <div className="flex justify-center items-center gap-6">
              <ButtonCancel onClick={onCancel}/>
              <ButtonCreate onClick={handleSubmit} onCloseModal={onCancel} disable={disable}/> 
            </div>
        </form>
    </div>
  )
}