function calculate() {
            let I = parseFloat(document.getElementById("I").value);
            let V = parseFloat(document.getElementById("V").value);
            let R = parseFloat(document.getElementById("R").value);
            let t = parseFloat(document.getElementById("t").value);
            let H = parseFloat(document.getElementById("H").value);


            function Heat() {
                let h1 = (!isNaN(I) && I !== 0) ? (I * I) * R * t : NaN;
                let h2 = (!isNaN(V) && V !== 0) ? ((V * V) / R ) *t : NaN;
                return !isNaN(h1) ? h1 : h2  ;
            }

            function Voltage() {
                return I * R;
            }

            function Power() {
                let p1 = (!isNaN(I) && I !== 0) ? (I * I) * R : NaN;
                let p2 = (!isNaN(V) && V !== 0) ? (V * V) / R : NaN; 
                let p3 = (!isNaN(R) && R !== 0) ? V * I : NaN; 
                return !isNaN(p1) ? p1 : (!isNaN(p2) ? p2 : p3);
            }


            let select = parseInt(document.getElementById("option").value);
            let result;

// just adding the unit
            if (select === 1) {
                result = Heat() + " J";
            } else if (select === 2) {
                result = Voltage() + " V";
            } else if (select === 3) {
                result = Power() + " W";
            } 

            document.getElementById("result").innerText = "Result: " + result;
        }