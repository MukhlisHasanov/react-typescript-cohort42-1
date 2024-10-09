import { ContactUsContainer, InputsContainer, Title } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact_us() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name field is required")
      .min(3, "The min fullname lenght is 3")
      .max(50, "The max fullname lenght is 50"),
    phone: Yup.string()
      .required("Phone field is required")
      .min(4, "The min phone lenght is 4")
      .max(20, "The max phone lenght is 20"),
    email: Yup.string()
      .email()
      .min(6, "The min email lenght is 6")
      .max(60, "The max email lenght is 60"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="contact-us-fullname"
          name="fullName"
          placeholder="Your full name"
          label="Full name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.errors.fullName}
        />
        <Input
          id="contact-us-phone"
          name="phone"
          placeholder="Your phone number"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <Input
          id="contact-us-email"
          name="email"
          placeholder="Your email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
      </InputsContainer>
      <Button type="submit" name="SEND REQUEST" />
    </ContactUsContainer>
  );
}

export default Contact_us;
