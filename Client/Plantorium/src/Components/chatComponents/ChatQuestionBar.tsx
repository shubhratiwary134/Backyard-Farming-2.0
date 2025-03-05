const ChatQuestionBar = () => {
  return (
    <div className=" w-full mb-10 ">
      <input
        type="text"
        className="w-4/5 h-5 py-8 px-10 bg-slate-300 rounded-3xl placeholder:text-black"
        placeholder="Ask Question Here "
      />
    </div>
  );
};

export default ChatQuestionBar;
