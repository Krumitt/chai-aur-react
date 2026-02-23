export default function expenseReducerFunc(prev, action) {

    let newState;

    switch (action.type) {
        case 'add':
            newState = [
                ...prev,
                {
                    id: action.payload.id,
                    amount: action.payload.amount,
                    category: action.payload.category
                }
            ];
            break;

        case 'del':
            newState = prev.filter(
                ele => ele.id !== action.payload.id
            );
            break;

        default:
            return prev;
    }

    // SIDE EFFECT (Not recommended)
    localStorage.setItem("expenses", JSON.stringify(newState));

    return newState;
}