import * as Yup from "yup";
export const chatSchema = Yup.object().shape({
  query: Yup.string().required(),
});
