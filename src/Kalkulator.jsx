import { createSignal } from "solid-js";
import "./Kalkulator.css"; 

export default function Kalkulator(props) {
    const [ukupniTrosak, setUkupniTrosak] = createSignal(0); 

    function submit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        // Dobavljanje i validacija 
        const stanarina = parseFloat(formData.get("stanarina"));
        const struja = parseFloat(formData.get("struja"));
        const voda = parseFloat(formData.get("voda"));
        const plin = parseFloat(formData.get("plin"));
        const internet = parseFloat(formData.get("internet"));
        const komunalneUsluge = parseFloat(formData.get("komunalneUsluge")); 

        // Provjera 
        if (
            isNaN(stanarina) ||
            isNaN(struja) ||
            isNaN(voda) ||
            isNaN(plin) ||
            isNaN(internet) ||
            isNaN(komunalneUsluge) 
        ) {
            alert("Molimo unesite ispravne brojeve za sve troškove.");
            return;
        }

        // Izračunavanje ukupnog troška
        const total = stanarina + struja + voda + plin + internet + komunalneUsluge; 
        setUkupniTrosak(total);
    }

    return (
        <div>

            <h1>💸Kalkulator mjesečnih troškova i komunalnih usluga💸</h1>
            <form onSubmit={submit}>

                <div>💰Upišite svoju stanarinu u eurima💰</div>
                <input
                    type="text"
                    name="stanarina"
                    pattern="^\d*\.?\d*$"
                    title="Molimo unesite ispravne brojeve."
                />
                <br /><br />

                <div>⚡Upišite trošak struje u eurima⚡</div>
                <input
                    type="text"
                    name="struja"
                    pattern="^\d*\.?\d*$"
                    title="Molimo unesite ispravne brojeve."
                />
                <br /><br />

                <div>🚰Upišite trošak vode u eurima🚰</div>
                <input
                    type="text"
                    name="voda"
                    pattern="^\d*\.?\d*$"
                    title="Molimo unesite ispravne brojeve."
                />
                <br /><br />

                <div>☴Upišite trošak plina u eurima☴</div>
                <input
                    type="text"
                    name="plin"
                    pattern="^\d*\.?\d*$"
                    title="Molimo unesite ispravne brojeve."
                />
                <br /><br />

                <div>🌐Upišite trošak interneta u eurima🌐</div>
                <input
                    type="text"
                    name="internet"
                    pattern="^\d*\.?\d*$"
                    title="Molimo unesite ispravne brojeve."
                />
                <br /><br />

               
                <div>♻️Upišite trošak komunalnih usluga u eurima♻️</div>
                <input
                    type="text"
                    name="komunalneUsluge"
                    pattern="^\d*\.?\d*$"
                    title="Molimo unesite ispravne brojeve."
                />
                <br /><br />

                <input type="submit" value="Izračunaj ukupni trošak" />
            </form>

            <div>
                <h3>Ukupni trošak: {ukupniTrosak()} eura💸</h3>
            </div>
        </div>
    );
}
