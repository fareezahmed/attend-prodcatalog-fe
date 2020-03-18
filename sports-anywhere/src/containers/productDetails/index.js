import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './product-details.scss';

import { ProductContext } from '../../config/productContext';

const yesterday = new Date()
yesterday.setDate((yesterday.getDate()-1))
const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
    price: Yup.number()
    .moreThan(0, 'Should be more than 0')
    .required('Required'),
    inventoryDate: Yup.date()
    .min(new Date(yesterday), 'Cannot add date in the past')
    .required('Required'),
});


export default (props) => {
  const localState = JSON.parse(localStorage.getItem("products"));
  const params = new URLSearchParams(props.location.search);
  const currentProductID = params.get('id');
  const mode = params.get('mode');
  const [editableForm, setEditableForm] = useState(mode === 'edit' ? false : true);
  const { state, dispatch } = useContext(ProductContext);

  const currentProduct = Object.values(localState || state).filter((product) => {
    return product.id === currentProductID;
  });
  
  const potentialID = (localState || state).length;
  const initialValues = currentProduct.length ? {
                          name: currentProduct[0].name,
                          description: currentProduct[0].description,
                          price: currentProduct[0].price,
                          inventoryDate: currentProduct[0].inventoryDate
                        } 
                        : { name: '', description: '', price: '', inventoryDate: '' }  
  return (
      <div className="product-details">
        <div className="product-details_nav">
          <Link className="btn btn--primary" to="/">Back</Link>
          { currentProductID && 
            <button className="btn btn--secondary" onClick={() => {
              setEditableForm(!editableForm);
            }}>
              Edit
            </button>
          }
        </div>
        <Formik
          initialValues={ initialValues }
          validationSchema={ productSchema }
          onSubmit={(values) => {
            if(currentProductID) {
              dispatch({ type: "edit", payload: {
                id: currentProductID,
                name: values.name,
                description: values.description,
                price: values.price,
                inventoryDate: values.inventoryDate
              } });
              props.history.push('/');
            } else {
              dispatch({ type: "add", payload: {
                id: potentialID,
                name: values.name,
                description: values.description,
                price: values.price,
                inventoryDate: values.inventoryDate
              } });
              props.history.push('/');
            }
          }}
        >
           <Form>
             <div className="styled-field">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" disabled={editableForm} />
                <ErrorMessage name="name" component="div" className="field-errors" />
             </div>
             <div className="styled-field">
                <label htmlFor="name">Description</label>
                <Field component="textarea" rows="10" cols="50" name="description" disabled={editableForm} />
                <ErrorMessage name="description" component="div" className="field-errors" />
              </div>
              <div className="styled-field">
                <label htmlFor="name">Price</label>
                <Field type="text" name="price" disabled={editableForm} />
                <ErrorMessage name="price" component="div" className="field-errors" />
              </div>
              <div className="styled-field">
                <label htmlFor="name">Inventory Date</label>
                <Field type="date" name="inventoryDate" disabled={editableForm} />
                <ErrorMessage name="inventoryDate" component="div" className="field-errors" />
              </div>
              <button type="submit" className="btn btn--document" disabled={editableForm}>
                Submit
              </button>
            </Form>
        </Formik>
      </div>  
  );
}

