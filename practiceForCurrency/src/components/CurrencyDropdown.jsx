export default function CurrencyDropdown({ currencies, selected, setCurr }) {
    return (
        <select
            value={selected}
            onChange={(e) => setCurr(e.target.value)}
            className="
        bg-white 
        text-gray-800 
        border 
        border-gray-300 
        rounded-lg 
        px-3 
        py-2 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-400
        shadow-sm
      "
        >
            {currencies.map((c) => (
                <option key={c} value={c}>
                    {c}
                </option>
            ))}
        </select>
    );
}
