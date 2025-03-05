import { Formik } from "formik";
import { FaLeaf } from "react-icons/fa6";
import { chatSchema } from "../../Schema/ChatSchema";

import { ChatValues } from "../../Types/ChatTypes";
const ChatQuestionBar = () => {
  const handleSubmit = (values: ChatValues) => {
    console.log(values.query);
  };

  const initialValues: ChatValues = {
    query: "",
  };
  return (
    <div className=" w-full mb-10 ">
      <Formik
        initialValues={initialValues}
        validationSchema={chatSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form className="w-full flex gap-5 " onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              value={values.query}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-4/5 h-5 py-8 px-10 bg-slate-300 rounded-3xl placeholder:text-zinc-700 placeholder:text-xl focus:outline-none"
              placeholder="Ask Question "
            />
            <button type="submit">
              <FaLeaf size={48} />
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ChatQuestionBar;
