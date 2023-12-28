'use client'
import CreditCard from "@/components/CreditCard";
// const CardNumbers = [
//     "",
//     "4242424242424242",
//     "5200828282828210",
//     "6011000990139424",
//     "3566002020360505",
//     "36227206271667",
//     "371449635398431",
//     "5105105105105100",
//     "2223003122003222",
// ];
// const CardNames = ["", "John Doe", 'kayz', 'matthew'];
// const CardFocusStates: Focused[] = ["", "number", "name", "cvc", "expiry"];
// const CardExpiryOptions = ["", "12/2025", "12/25", "12/5", "12/05", "12/2056"];
// const CardCvcOptions = ["", "123", "1234"];


export default function Home() {
    // const [number, setNumber] = useState<string | number>("");
    // const [name, setName] = useState<string>("");
    // const [focused, setFocused] = useState<Focused>("");
    // const [expiry, setExpiry] = useState("");
    // const [cvc, setCvc] = useState("");

    return (
        <header>
            <h1 className="text-4xl font-bold">Credit Cards</h1>
            <div className="flex">
                <div className="m-4">
                    <CreditCard number="4242424242424242" name="mathew" cvc="123" focused="number" expiry="12/2025" />
                </div>
                <div className="m-4">
                    <CreditCard number="5105105105105100" name="mathew" cvc="123" focused="number" expiry="12/2025" />
                </div>
                <div className="m-4">
                    <CreditCard number="6011000990139424" name="mathew" cvc="123" focused="" expiry="12/2025" />
                </div>
                <div className="m-4">
                    <CreditCard number="36227206271667" name="mathew" cvc="123" focused="" expiry="12/2025" />
                </div>
                <div className="m-4">
                    <CreditCard number="2223003122003222" name="mathew" cvc="123" focused="" expiry="12/2025" />
                </div>

            </div>
        </header>
    );
};

