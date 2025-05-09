const ChatQuestionBar = () => {
  return (
    <div className="w-1/2 mt-4">
      <input
        type="text"
        className="w-96 h-5 py-8 px-10 bg-slate-300 rounded-3xl placeholder:text-black"
        placeholder="Ask Question Here "
      />
    </div>
  );
};

export default ChatQuestionBar;
