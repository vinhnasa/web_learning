import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  to: "",
  subject: "",
  message: "",
  attachment: null,
};

const validationSchema = Yup.object().shape({
  to: Yup.string().email("Invalid email address").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const App = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div>
            <label htmlFor="to">To</label>
            <Field type="email" name="to" id="to" />
            <ErrorMessage name="to" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <Field type="text" name="subject" id="subject" />
            <ErrorMessage name="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" id="message" />
            <ErrorMessage name="message" />
          </div>
          <div>
            <label htmlFor="attachment">Attachment</label>
            <Field type="file" name="attachment" id="attachment" />
          </div>
          <button type="submit" disabled={!formik.isValid}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
