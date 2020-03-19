import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormattedMessage } from 'react-intl';
// Styles
import './product-details.scss';
// Config
import { ProductContext } from '../../config/productContext';
import * as Types from '../../config/constants/actionTypes';
import productSchema from './productSchema';


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
          <Link className="btn btn--primary" to="/">
            <FormattedMessage id="back" />
          </Link>
          { currentProductID && 
            <button className="btn btn--secondary" onClick={() => {
              setEditableForm(!editableForm);
            }}>
              <FormattedMessage id="editBtn" />
            </button>
          }
        </div>
        <Formik
          initialValues={ initialValues }
          validationSchema={ productSchema }
          onSubmit={(values) => {
            if(currentProductID) {
              dispatch({ type: Types.UPDATE_PRODUCT, payload: {
                id: currentProductID,
                name: values.name,
                description: values.description,
                price: values.price,
                inventoryDate: values.inventoryDate
              } });
              props.history.push('/');
            } else {
              console.log(potentialID)
              dispatch({ type: Types.ADD_PRODUCT, payload: {
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
                <label htmlFor="name">
                  <FormattedMessage id="name" />
                </label>
                <Field type="text" name="name" disabled={editableForm} />
                <ErrorMessage name="name" component="div" className="field-errors" />
             </div>
             <div className="styled-field">
                <label htmlFor="name">
                  <FormattedMessage id="desc" />
                </label>
                <Field component="textarea" rows="10" cols="50" name="description" disabled={editableForm} />
                <ErrorMessage name="description" component="div" className="field-errors" />
              </div>
              <div className="styled-field">
                <label htmlFor="name">
                  <FormattedMessage id="price" />
                </label>
                <Field type="text" name="price" disabled={editableForm} />
                <ErrorMessage name="price" component="div" className="field-errors" />
              </div>
              <div className="styled-field">
                <label htmlFor="name">
                  <FormattedMessage id="date" />
                </label>
                <Field type="date" name="inventoryDate" disabled={editableForm} />
                <ErrorMessage name="inventoryDate" component="div" className="field-errors" />
              </div>
              <button type="submit" className="btn btn--document" disabled={editableForm}>
                <FormattedMessage id="formBtn" />
              </button>
            </Form>
        </Formik>
      </div>  
  );
}

