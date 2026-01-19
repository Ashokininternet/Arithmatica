function calculate() {
            let opp = parseFloat(document.getElementById("opp").value);
            let hyp = parseFloat(document.getElementById("hyp").value);
            let adj = parseFloat(document.getElementById("adj").value);


            function sin() {
                return opp / hyp;
            }

            function cos() {
                return adj / hyp;
            }

            function tan() {
                return opp / adj;
            }


            let select = parseInt(document.getElementById("option").value);
            let result;

            if (select === 1) {
                result = sin() + " cm";
            } else if (select === 2) {
                result = cos() + " cm";
            } else if (select === 3) {
                result = tan() + " cm";
            } else {
                result = "Invalid selection.";
            }

            document.getElementById("result").innerText = "Result: " + result;
        }