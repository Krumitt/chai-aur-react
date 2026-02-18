export default function ColorOptions({ setColor }) {
    const handleColorChange = (selectedColor) => {
        setColor(selectedColor);
        localStorage.setItem("color", selectedColor);
    };

    return (
        <div
            className="
        absolute
        bottom-16
        left-1/2
        -translate-x-1/2
        flex
        items-center
        gap-12
        bg-white
        rounded-3xl
        px-20
        py-12
        shadow-2xl

      "
        >
            <button
                onClick={() => handleColorChange("red")}
                className="
          px-8
          py-3
          rounded-full
          bg-red-600
          text-white
          font-semibold
          cursor-pointer
          transition
          hover:bg-red-700
        "
            >
                Red
            </button>

            <button
                onClick={() => handleColorChange("black")}
                className="
          px-8
          py-3
          rounded-full
          bg-black
          text-white
          font-semibold
          cursor-pointer
          transition
          hover:bg-gray-800
        "
            >
                Black
            </button>

            <button
                onClick={() => handleColorChange("blue")}
                className="
          px-8
          py-3
          rounded-full
          bg-blue-500
          text-white
          font-semibold
          cursor-pointer
          transition
          hover:bg-blue-600
        "
            >
                Blue
            </button>
        </div>
    );
}
