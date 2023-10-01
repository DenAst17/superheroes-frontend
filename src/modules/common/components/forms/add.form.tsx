import { Formik, Form, Field, ErrorMessage } from "formik";
import { FC } from "react";
import './add.form.css'
import validateSuperhero from "./validate/supehero.validate";
import submitSuperhero from "./submit//supehero.submit";
import { INITIAL_VALUES } from "../../consts";
import { IAddForm } from "../../types/form.types";

const AddForm: FC<IAddForm> = ({ closeForm, handleSubmit }) => {
  return (
    <div className="addFormWrapper">
      <h1>Add new Superhero</h1>
      <Formik
        initialValues={INITIAL_VALUES.VALUES_OBJECT}
        validate={validateSuperhero}
        onSubmit={(values, { setSubmitting }) => submitSuperhero(values, { setSubmitting }, handleSubmit)}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="addForm" encType="multipart/form-data">
            <Field
              type="text"
              name="nickname"
              placeholder="Nickname"
            />
            <ErrorMessage name="nickname" component="div" />

            <Field
              type="text"
              name="real_name"
              placeholder="Real name"
            />
            <ErrorMessage name="real_name" component="div" />

            <Field
              type="text"
              name="origin_description"
              placeholder="Origin description"
            />
            <ErrorMessage name="origin_description" component="div" />

            <Field
              type="text"
              name="superpowers"
              placeholder="Superpowers"
            />
            <ErrorMessage name="superpowers" component="div" />

            <Field
              type="text"
              name="catch_phrase"
              placeholder="Catch phrase"
            />
            <ErrorMessage name="catch_phrase" component="div" />

            <input
              id="new_images"
              name="new_images"
              type="file"
              multiple={true} 
              onChange={(event) => {
                setFieldValue("new_images", event.currentTarget?.files);
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button type="submit" onClick={closeForm}>
              Close
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default AddForm;