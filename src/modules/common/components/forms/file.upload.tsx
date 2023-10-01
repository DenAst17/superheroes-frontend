import { FC } from "react";
import { FormikErrors } from "formik";

interface IFileUpload {
  data: { image?: File };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<{ image?: File }>> | Promise<void>;
  errors: FormikErrors<{ image?: File }>;
}

const FileUpload: FC<IFileUpload> = ({
  data,
  setFieldValue,
  errors
}) => {
  return (
    <div>
      <input
        type="file"
        name="image"
        accept="image/png, .svg, .jpg"
        onChange={(e) => {
          if (e.currentTarget.files) {
            setFieldValue("image", e.currentTarget.files[0]);
          }
        }}
        multiple={true}
      />
      {errors.image && (
        <>
          <br />
          <span id="error">{errors.image}</span>
          <br />
        </>
      )}
    </div>
  );
};

export default FileUpload;
