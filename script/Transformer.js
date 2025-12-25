function calculate() {
            let Ns = parseFloat(document.getElementById("Ns").value);
            let Np = parseFloat(document.getElementById("Np").value);
            let Vs = parseFloat(document.getElementById("Vs").value);
            let Vp = parseFloat(document.getElementById("Vp").value);
            let e = parseFloat(document.getElementById("e").value);


            function Voltage_in_secondary() {
                let vs1 = (!isNaN(Vp) && Vp !== 0) ? Ns * Vp / Np : NaN;
                let vs2 = (!isNaN(e) && e !== 0) ? Ns * e : NaN;
                return  !isNaN(vs1) ? vs1 : vs2 ;
            }

            function Number_of_turns_in_secondary() {
                return  Np * Vs / Vp ;
            }

            function Voltage_in_primary() {
                let vp1 = (!isNaN(Np) && Np !== 0) ? Np * Vs / Ns : NaN;
                let vp2 = (!isNaN(e) && e !== 0) ? Vs * e : NaN; 
                return !isNaN(vp1) ? vp1 : vp2 ;
            }

            function Number_of_turns_in_primary() {
                return Ns * Vp / Vs;
            }


            let select = parseInt(document.getElementById("option").value);
            let result;

// just adding the unit
            if (select === 1) {
                result = Voltage_in_secondary() + " V";
            } else if (select === 2) {
                result = Number_of_turns_in_secondary() + " turns";
            } else if (select === 3) {
                result = Voltage_in_primary() + " V";
            } else if (select === 4) {
                result = Number_of_turns_in_primary() + " turns";
            } 

            document.getElementById("result").innerText = "Result: " + result;
        }