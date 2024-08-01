const TextCarousel = ({ text, textColor, animation }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap w-full">
      <div className={`flex w-max ${animation}`}>
        {text.concat(text).map((text, index) => (
          <span
            key={index}
            className="inline-block px-5 text-3xl whitespace-nowrap  font-semibold"
            style={{ color: textColor }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
