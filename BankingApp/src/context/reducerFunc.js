export const iniState = { bal: 10000, fine: true };
export default function reducerFunc(prev, action) {
    //action is an object having properties 'type' and 'amt'
    const amt = Number(action.amt);
    switch (action.type) {
        case 'withdraw':
            return {
                ...prev, bal: amt > prev.bal ? prev.bal : prev.bal - amt,
                fine: amt > prev.bal ? false : true
            }
        case 'deposit':
            return {
                ...prev, bal: prev.bal + amt,
                fine: true
            }
        case 'reset':
            return { ...iniState }
        default:
            return prev;
    }
}