import * as Yup from 'yup';

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

export default productSchema;