import { FormikErrors } from "formik";
import Superhero from "../../../../../entities/superhero.entity";

const validateSuperhero = (values: Superhero) => {
    let errors = {} as FormikErrors<Superhero>;
    if (!values.nickname) {
        errors.nickname = 'Required';
    } else if (values.nickname.length > 30) {
        errors.nickname = 'Must be 30 characters or less';
    }
    if (!values.real_name) {
        errors.real_name = 'Required';
    } else if (values.real_name.length > 30) {
        errors.real_name = 'Must be 30 characters or less';
    }
    if (!values.origin_description) {
        errors.origin_description = 'Required';
    } else if (values.origin_description.length > 200) {
        errors.origin_description = 'Must be 200 characters or less';
    }
    if (!values.superpowers) {
        errors.superpowers = 'Required';
    } else if (values.superpowers.length > 200) {
        errors.superpowers = 'Must be 200 characters or less';
    }
    if (!values.catch_phrase) {
        errors.catch_phrase = 'Required';
    } else if (values.catch_phrase.length > 100) {
        errors.catch_phrase = 'Must be 30 characters or less';
    }
    return errors;
};

export default validateSuperhero;