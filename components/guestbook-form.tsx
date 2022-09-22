import { Form, Formik, FormikHelpers, useField } from "formik";
import * as Yup from "yup";

import type { FieldHookConfig, FieldMetaProps, FormikConfig } from "formik";
import type { ClassAttributes, HTMLAttributes } from "react";

type FieldProps<T, U> = {
  label: string;
} & HTMLAttributes<T> &
  ClassAttributes<T> &
  FieldHookConfig<U>;

type InputProps = FieldProps<HTMLInputElement, string>;

type TextAreaProps = FieldProps<HTMLTextAreaElement, string>;

type ErrorMessageProps = Pick<FieldMetaProps<string>, "error" | "touched">;

function Input({ label, required, ...props }: InputProps) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-3">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1">
        <input
          className="block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-400 shadow-sm"
          {...field}
          {...props}
        />
      </div>
      <ErrorMessage {...meta} />
    </div>
  );
}

function TextArea({ label, required, ...props }: TextAreaProps) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-3">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1">
        <textarea
          className="block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-400 shadow-sm"
          {...field}
          {...props}
        />
      </div>
      <ErrorMessage {...meta} />
    </div>
  );
}

function ErrorMessage({ touched, error }: ErrorMessageProps) {
  return touched && error ? (
    <div className="mt-1 text-xs text-red-500">{error}</div>
  ) : null;
}

export default function GuestBookForm() {
  const initialValues = {
    author: "",
    placement: "",
    body: "",
  };

  const validationSchema = Yup.object({
    author: Yup.string(),
    placement: Yup.string(),
    body: Yup.string()
      .required("Pesan harus diisi")
      .max(288, "Maksimal 288 karakter"),
  });

  const onSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      <Form>
        <Input id="author" name="author" label="Nama" />
        <Input id="placement" name="placement" label="Penempatan" />
        <TextArea
          id="body"
          name="body"
          label="Pesan"
          maxLength={288}
          rows={4}
          required
        />
        <div className="flex flex-row justify-end mt-3">
          <button
            type="submit"
            className="px-4 py-2 rounded text-sm md:text-base bg-slate-600"
          >
            Kirim
          </button>
        </div>
      </Form>
    </Formik>
  );
}
