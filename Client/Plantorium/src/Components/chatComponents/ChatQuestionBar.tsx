import { FaLeaf } from "react-icons/fa6";
const ChatQuestionBar = () => {
  const handleSubmit = () => {
    console.log("submitting");
  };
  return (
    <div className=" w-full mb-10 flex gap-5">
      <input
        type="text"
        className="w-4/5 h-5 py-8 px-10 bg-slate-300 rounded-3xl placeholder:text-zinc-700 placeholder:text-xl focus:outline-none"
        placeholder="Ask Question "
      />
      <button type="submit">
        <FaLeaf size={48} onClick={handleSubmit} />
      </button>
    </div>
  );
};

export default ChatQuestionBar;
