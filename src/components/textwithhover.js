const TextWithHover = ({displayText}) => {
    return (
        <div className="flex items-center justify-start cursor-pointer">
        <div className="mx-4 my-2">
              {displayText}
            </div>
        </div>
    );
};

export default TextWithHover;