    const button = document.getElementById("btn");
    const div2 = document.getElementById("div2");
    const div1 = document.getElementById("div1");
    const SecBtn = document.getElementById("btn2");
    const EmailBox = document.querySelector(".email");

    const Div1_H1 = document.getElementById("div1_H1");
    const Div1_Btn= document.getElementById("registerbtn");

    const Div2_FH1 = document.getElementById("firstH1");
    const Div2_FH2 = document.getElementById("FirstH2");

    const SH1_Div2 = document.getElementById("SecH1");
    const SH2_Div2 = document.getElementById("SecH2");


    button.addEventListener("click",(e)=>{
        e.preventDefault();
        button.disabled = true;
        div2.classList.add("fullwidth");

        button.classList.add("disappearOne");
        Div2_FH1.classList.add("disappearOne");
        Div2_FH2.classList.add("disappearOne");
        

        button.classList.remove("returnDefault");
        Div2_FH1.classList.remove("returnDefault");
        Div2_FH2.classList.remove("returnDefault");




        setTimeout(() => {
            div2.classList.remove("fullwidth");
            div2.classList.toggle("toLeft");
            div1.classList.toggle("toRight");
            EmailBox.classList.add("hideTheEmail");
            Div1_H1.textContent = "Login";
            Div1_Btn.textContent = "Login";

            SecBtn.classList.add("returnDefault");
            SH1_Div2.classList.add("returnDefault");
            SH2_Div2.classList.add("returnDefault");


            SecBtn.disabled =false;

            SecBtn.classList.remove("disappearTwo");
            SH1_Div2.classList.remove("disappearTwo");
            SH2_Div2.classList.remove("disappearTwo");



        }, 1000);
    },)

    SecBtn.addEventListener("click",(e)=>{
        e.preventDefault();

        button.disabled = false;
        SecBtn.disabled =true;
        div2.classList.add("fullwidth");

        SecBtn.classList.add("disappearTwo");
        SH1_Div2.classList.add("disappearTwo");
        SH2_Div2.classList.add("disappearTwo");




        setTimeout(() => {
            div2.classList.remove("fullwidth");
            div2.classList.toggle("toLeft");
            div1.classList.toggle("toRight");
            EmailBox.classList.remove("hideTheEmail");
            Div1_H1.textContent = "Registration";
            Div1_Btn.textContent = "Register";

            button.classList.add("returnDefault");
            Div2_FH1.classList.add("returnDefault");
            Div2_FH2.classList.add("returnDefault");

        }, 1000);


    },)
