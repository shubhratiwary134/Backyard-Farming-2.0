import { Formik } from "formik";
import { FaLeaf } from "react-icons/fa6";
import { chatSchema } from "../../Schema/ChatSchema";
import { ChatValues } from "../../Types/ChatTypes";
import { useAppDispatch, useAppSelector } from "../../store/Hook";
import { addQueryToCurrentChat } from "../../store/slices/chatSlice";
import { getResponseThunk, postChatThunk } from "../../store/thunks/chatThunk";
import { useUser } from "@clerk/clerk-react";
const ChatQuestionBar = () => {
  const { currentChat, error } = useAppSelector((state) => state.chat);
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const userId = user?.id;
  const handleSubmit = async (values: ChatValues) => {
    const query = values.query;
    values.query = "";
    if (userId && query) {
      if (currentChat.currentMessages.length === 0) {
        const firstQuery = query;
        const result = await dispatch(postChatThunk({ userId, firstQuery }));
        // using the result directly here because the chatId is required in the getResponseThunk
        // while the slice updates the currentChatId for the future in the fulfilled state
        const newChatId = result.payload?.simplifiedChat?.chatId;
        if (newChatId) {
          await dispatch(
            getResponseThunk({ chatId: newChatId, query: firstQuery })
          );
        }
      }
      // dispatch adding to the query here
      // dispatch response Thunk
      else {
        dispatch(addQueryToCurrentChat(query));
        await dispatch(
          getResponseThunk({
            chatId: currentChat.currentChatId,
            query: query,
          })
        );
      }
    }
  };

  const initialValues: ChatValues = {
    query: "",
  };
  return (
    <div className="fixed bottom-10 w-3/4 mb-10 ">
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
              className="w-4/5 h-5 py-8 px-10 bg-[#83a388] rounded-3xl placeholder:text-white placeholder:text-xl text-white text-2xl focus:outline-none"
              placeholder="Ask Question "
            />
            <button type="submit" disabled={!(error === null)}>
              <FaLeaf size={48} color="#006838" />
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ChatQuestionBar;
