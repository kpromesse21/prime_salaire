
// recuper les donnee d'un formulaire
console.log("hey")

const submit=()=>{
    let name=document.getElementById("nom")
    let salaire=document.getElementById("salaire")
    name=name.value
    salaire=salaire.value
    let empl={
        nom:name,
        salaire:salaire
    }
    let employeesStore=localStorage.getItem('empl')
    if(employeesStore==null) localStorage.setItem("empl","["+JSON.stringify(empl)) 
    else {
        localStorage.setItem("empl",employeesStore+","+JSON.stringify(empl))
}
    loading()
}
const loading=()=>{
    const container=document.getElementById("container")
    const container2=document.getElementById("classement")
    let json=localStorage.getItem('empl')+"]"
    let employees=JSON.parse(json);
    employees=employees.sort((a, b) => a.salaire - b.salaire);
    let lowestSalary = employees[0], highestSalary=employees[employees.length-1]
    let chaine=""
    employees.forEach((employe)=>{
        chaine+="<div class='card'><p> nom de l'employe : "+employe.nom+"</p><p> salaire : "+employe.salaire+"</p></div>"
    })
    container.innerHTML=chaine
    container2.innerHTML="<p> l'employe avec un salaire grand c'est "+highestSalary.nom+" avec comme salaire "+highestSalary.salaire+"</p><p> l'employe avec le salaire le plus bas c'est "+lowestSalary.nom+" avec comme salaire "+lowestSalary.salaire+"</p>"
   console.log(chaine);
}