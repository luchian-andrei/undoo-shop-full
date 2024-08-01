const LogInFooter = ({ setAction, question, action }) => {
  return (
    <div className="flex justify-center items-center text-base gap-2 border-t-2 border-gray-400 pt-4">
      <p>{question}</p>
      <span
        className="underline cursor-pointer"
        onClick={() => setAction("CreateAccount")}
      >
        {action}
      </span>
    </div>
  );
};

export default LogInFooter;
