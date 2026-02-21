export default function MoneyInput({
    money,
    moneySetter,
    readOnly = false,
}) {
    return (
        <input
            type="number"
            value={money}
            readOnly={readOnly}
            onChange={(e) => moneySetter?.(Number(e.target.value))}
            placeholder="Enter amount"
            className={`
        w-40
        bg-white
        text-gray-800
        border
        border-gray-300
        rounded-lg
        px-3
        py-2
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        ${readOnly ? "bg-gray-100 cursor-not-allowed" : ""}
      `}
        />
    );
}
