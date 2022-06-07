document.getElementById('Calcular').addEventListener('click', calcularMedidas);
document.getElementById('voltar').addEventListener('click', voltarPag)

function calcularMedidas(){
    document.getElementById('corpo').style.display='none';
    document.getElementById('quadroResumo').style.display = 'block';
    homens = document.getElementById('qtdHomens').value;
    mulheres = document.getElementById('qtdMulheres').value;
    criancas = document.getElementById('qtdBebes').value;
    duracao = document.getElementById('opcoes').value;

    if(duracao == "a"){
        let carnesAdulto = 400; 
        let carnesCrianca= 150;
        qtdCervejaHomem = 6 * homens;
        qtdCervejaMulher = 4 * mulheres;
        qtdRefri = 400 * criancas;
        qtdCarnes = (homens * carnesAdulto) + (mulheres * carnesAdulto) + (criancas * carnesCrianca);
        quadroCarnes(qtdCarnes);
        quadroBebidas(qtdCervejaHomem, qtdCervejaMulher, qtdRefri);
    }
    
    else if(duracao == "b"){
        let carnesAdulto = 450;
        let carnesCrianca = 200;
        qtdCervejaHomem = 8 * homens;
        qtdCervejaMulher = 6 * mulheres;
        qtdRefri = 500 * criancas;
        qtdCarnes = (homens * carnesAdulto) + (mulheres * carnesAdulto) + (criancas * carnesCrianca);
        quadroCarnes(qtdCarnes);
        quadroBebidas(qtdCervejaHomem, qtdCervejaMulher, qtdRefri);
    }

    else{
        let carnesAdulto = 500;
        let carnesCrianca = 250;
        qtdCervejaHomem = 10 * homens;
        qtdCervejaMulher = 8 * mulheres;
        qtdRefri = 600 * criancas;
        qtdCarnes = (homens * carnesAdulto) + (mulheres * carnesAdulto) + (criancas * carnesCrianca);
        quadroCarnes(qtdCarnes);
        quadroBebidas(qtdCervejaHomem, qtdCervejaMulher, qtdRefri);  
    }  
}

function quadroCarnes(carnes){
    let bovina = document.getElementById('carneBovina');
    let suina = document.getElementById('carneSuina');
    let aviaria = document.getElementById('carneAviaria');
    
    if(bovina.checked && suina.checked && aviaria.checked){
        document.getElementById('qtdCarnesBovinas').innerHTML = `${qtdCarnes/3} gramas`;
        document.getElementById('qtdCarnesSuinas').innerHTML = `${qtdCarnes/3} gramas`;
        document.getElementById('qtdCarnesAviarias').innerHTML = `${qtdCarnes/3} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes/3 * 0.04) + (qtdCarnes/3 * 0.02) +  (qtdCarnes/3 * 0.015)} R$`
    }else if(bovina.checked && suina.checked){
        document.getElementById('qtdCarnesBovinas').innerHTML = `${qtdCarnes*2/3} gramas`;
        document.getElementById('qtdCarnesSuinas').innerHTML = `${qtdCarnes/3} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes*2/3 * 0.04)+ (qtdCarnes/3 * 0.02)} R$`
    }else if(bovina.checked && aviaria.checked){
        document.getElementById('qtdCarnesBovinas').innerHTML = `${qtdCarnes*2/3} gramas`;
        document.getElementById('qtdCarnesAviarias').innerHTML = `${qtdCarnes/3} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes*2/3 * 0.04)+ (qtdCarnes/3 * 0.015)} R$`
    }else if(suina.checked && aviaria.checked){
        document.getElementById('qtdCarnesAviarias').innerHTML = `${qtdCarnes/2} gramas`;
        document.getElementById('qtdCarnesSuinas').innerHTML = `${qtdCarnes/2} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes/2 * 0.02)+ (qtdCarnes/2 * 0.015)} R$`
    }else if(bovina.checked){
        document.getElementById('qtdCarnesBovinas').innerHTML = `${qtdCarnes} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes * 0.04)} R$`
    }else if(suina.checked){
        document.getElementById('qtdCarnesSuinas').innerHTML = `${qtdCarnes} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes * 0.02)} R$`
    }else if(aviaria.checked){
        document.getElementById('qtdCarnesAviarias').innerHTML = `${qtdCarnes} gramas`;
        document.getElementById('gastosCarnes').innerHTML = `${(qtdCarnes * 0.015)} R$`
    }

}

function quadroBebidas(qtdCervejaHomem, qtdCervejaMulher, qtdRefri){
    let qtdTotalCervejas = qtdCervejaHomem + qtdCervejaMulher;
    document.getElementById('cervejas').innerHTML = `${qtdTotalCervejas} latas`
    document.getElementById('refrigerantes').innerHTML = `${qtdRefri} ML`

    let nivel = document.getElementById('opBrejas').value;
    if(nivel == "A+"){
        document.getElementById("gastosCervejas").innerHTML = `${qtdTotalCervejas * 5} R$`
    }else if(nivel == "B+"){
        document.getElementById("gastosCervejas").innerHTML = `${qtdTotalCervejas * 3} R$`
    }else if(nivel == "C+"){
        document.getElementById("gastosCervejas").innerHTML = `${qtdTotalCervejas * 2.20} R$`
    }
    let marcaRefri = document.getElementById('opRefris').value;
    if(marcaRefri == "coca"){
        document.getElementById('gastosRefri').innerHTML = `${qtdRefri * 0.008} R$ `
    }else if(marcaRefri == "fanta" || marcaRefri == "guarana"){
        document.getElementById('gastosRefri').innerHTML = `${qtdRefri * 0.007} R$ `
    }
}

function voltarPag(){
    location.reload();
    document.getElementById('corpo').style.display='block';
    document.getElementById('quadroResumo').style.display = 'none';
}
