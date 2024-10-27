import { createSignal } from "solid-js";

export default function Forms(props) {

    const [secondNumber, setsecondNumber] = createSignal();

    function submit(event) {

        event.preventDefault();
        const formData = new FormData(event.target);
        const number = formData.get("number");
        console.log("Upisali ste broj " + number);
        setsecondNumber(number);

    }

    return (
        <div>

            <div></div>
            <form onSubmit={submit}>

                <input type="text" name="number"></input>
                <input type="submit" value="potvrdi"></input>

            </form>

            <input type="number" value={secondNumber()} onInput={(event) => setsecondNumber(event.target.value)}></input>

            <div>Drugi broj je : {secondNumber()}</div>
        </div>
    );



}