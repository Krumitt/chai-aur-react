export default function SwapButton({
    setTo,
    setFrom,
    to,
    from,
    curr1,
    curr2,
    setCurr1,
    setCurr2,
}) {
    return (
        <button
            onClick={() => {
                setTo(from);
                setFrom(to);
                setCurr1(curr2);
                setCurr2(curr1);
            }}
            className="
        bg-yellow-400
        hover:bg-yellow-500
        active:scale-95
        transition
        px-4
        py-2
        rounded-full
        font-semibold
        shadow-md
      "
        >
            ⇄
        </button>
    );
}
