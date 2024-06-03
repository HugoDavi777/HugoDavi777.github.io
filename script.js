function calcular() {
    const p1_idade_anos = parseInt(document.getElementById('p1_idade_anos').value);
    const p1_idade_meses = parseInt(document.getElementById('p1_idade_meses').value);
    const p2_idade_anos = parseInt(document.getElementById('p2_idade_anos').value);
    const p2_idade_meses = parseInt(document.getElementById('p2_idade_meses').value);
    const p3_idade_anos = parseInt(document.getElementById('p3_idade_anos').value);
    const p3_idade_meses = parseInt(document.getElementById('p3_idade_meses').value);
    const resultado= document.querySelector("#resultado");
    const resultado_2= document.querySelector("#resultado_2");

    var idade_1 = Math.round(((p1_idade_anos*12)+p1_idade_meses)/12);
    var idade_2 = Math.round(((p2_idade_anos*12)+p2_idade_meses)/12);
    var idade_3 = Math.round(((p3_idade_anos*12)+p3_idade_meses)/12);

    if(idade_3==0){

        if(idade_1<=13 || idade_1>=100){
            resultado.innerHTML ="Vôçe não esta na idade de namorar"
        }else{
           var idade_min = (idade_1/2)+7;
           var idade_max = (idade_1 -7)*2;
           if(idade_2 >= idade_min && idade_2 <= idade_max && idade_2 !=100){resultado.innerHTML ="parceiro compativel"}
           else if(idade_2 < idade_min){resultado.innerHTML ="parceiro incompativel (Muito joven)"}
           else {resultado.innerHTML ="parceiro incompativel (Muito velho)"}
           
        }

    }else{

    if(idade_1<=13 || idade_1>=100){
        resultado.innerHTML ="Vôçe não esta na idade de namorar"
    }else{
       var idade_min = (idade_1/2)+7;
       var idade_max = (idade_1 -7)*2;

        if(idade_2 >= idade_min && idade_2 <= idade_max && idade_2 !=100){resultado.innerHTML ="parceiro 1 compativel"}
        else if(idade_2 < idade_min){resultado.innerHTML ="parceiro 1 incompativel (Muito joven)"}
        else {resultado.innerHTML ="parceiro 1 incompativel (Muito velho)"}
       
        if(idade_3 >= idade_min && idade_3 <= idade_max && idade_3 !=100){resultado_2.innerHTML ="parceiro 2 compativel"}
        else if(idade_3 < idade_min){resultado_2.innerHTML ="parceiro 2 incompativel (Muito joven)"}
        else {resultado_2.innerHTML ="parceiro 2 incompativel (Muito velho)"}
    }
    }
}
