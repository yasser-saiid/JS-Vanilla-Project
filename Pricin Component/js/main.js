//select toggle button
const toggleBtn = document.getElementById('togBtn');
const basicPlan = document.getElementById('basic');
const professionalPlan = document.getElementById('professional');
const masterPlan = document.getElementById('master');

toggleBtn.addEventListener('click', (e)=>{
    if(toggleBtn.checked){
        basicPlan.textContent = '$19.99'
        professionalPlan.textContent = '$24.99'
        masterPlan.textContent = '$39.99'
    }else{
        basicPlan.textContent = '$199.99'
        professionalPlan.textContent = '$249.99'
        masterPlan.textContent = '$399.99'
    }
})

















