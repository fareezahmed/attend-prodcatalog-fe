import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './product-details.scss';

import { ProductContext } from '../../config/productContext';

export default (props) => {
  console.log(props.location);
  const params = new URLSearchParams(props.location.search);
  const currentProductID = params.get('id');
  const mode = params.get('mode');
  const [editableForm, setEditableForm] = useState(mode === 'edit' ? false : true);
  const { state, dispatch } = useContext(ProductContext);

  console.log(state)

  const currentProduct = Object.values(state).filter((product) => {
    console.log(product.id === currentProductID);
    return product.id === currentProductID;
  });
  
  const initialValues = currentProduct.length ? {
                          name: currentProduct[0].name,
                          description: currentProduct[0].description,
                          price: currentProduct[0].price,
                          inventoryDate: currentProduct[0].date
                        } 
                        : { name: '', description: '', price: '', date: '' }
  console.log("currentProduct", currentProduct)
  console.log("initialValues", initialValues)
  console.log("editableForm", editableForm)
  

  return (
      <div className="product-list">
        <Link to="/">Back</Link>
        {currentProductID && <button onClick={() => {
          setEditableForm(!editableForm);
        }}>EDIT</button>}
        <Formik
          initialValues={ initialValues }
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log('formButton', values.formButton)
            if(mode === 'edit' && currentProductID) {
              dispatch({ type: "edit", payload: {
                id: currentProductID,
                name: values.name,
                description: values.description,
                price: values.price,
                inventoryDate: values.inventoryDate
              } });
            } else if(mode === 'edit') {
              dispatch({ type: "add", payload: {
                name: values.name,
                description: values.description,
                price: values.price,
                inventoryDate: values.inventoryDate
              } });
            }
          }}
        >
           <Form>
              <Field type="text" name="name" disabled={editableForm} />
              <ErrorMessage name="name" component="div" />
              <Field type="text" as="textarea" name="description" disabled={editableForm} />
              <ErrorMessage name="description" component="div" />
              <Field type="text" name="price" disabled={editableForm} />
              <ErrorMessage name="price" component="div" />
              <Field type="date" name="inventoryDate" disabled={editableForm} />
              <ErrorMessage name="inventoryDate" component="div" />
              <button type="submit" disabled={editableForm}>
                Submit
              </button>
            </Form>
        </Formik>
      </div>  
  );
}

