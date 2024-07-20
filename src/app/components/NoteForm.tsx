"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define validation schema using Yup (optional)
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

function NoteForm(props: any) {
  return (
    <div className="mt-5 w-100 mb-4">
      <div className="d-flex justify-content-between container">
        <div>
          <h3 className="text-primary fw-bold">Your Notes</h3>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ADD NOTES
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Make Notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <Formik
              initialValues={{ title: "", description: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                props.onAdd(values);
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="modal-body">
                    <div className="col mb-3">
                      <Field
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        aria-label="Title"
                      />
                      
                      <ErrorMessage
                        name="title"
                        component="p"
                        className="text-danger mt-2"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        name="description"
                        as="textarea"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Write Something"
                      />
                      <ErrorMessage
                        name="description"
                        component="p"
                        className="text-danger mt-2"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-outline-primary">
                      Add Note
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteForm;
