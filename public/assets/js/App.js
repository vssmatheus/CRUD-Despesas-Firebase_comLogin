function CadastrarDespesa(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var dateAdd = document.getElementById("dateAdd").value;

<<<<<<< HEAD
    console.log("Descrição",description,"Valor",amount,"Data",dateAdd);   
    /* var database = firebase.database(); */
    
    var despesas = {description:description,amount:amount,dateAdd:dateAdd};
=======
    console.log("Descrição",description,"Amount",amount,"DateAdd",dateAdd);       
    var despesas = {description:description,amount:amount,dateAdd:dateAdd};    
>>>>>>> 6eeffafa31bb273d0d2d071869a48df388b70de4
    db.database().ref('minhasdespesas').push(despesas);
    console.log(despesas);
}