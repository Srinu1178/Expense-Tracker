 let table = document.getElementById("table")

    function deleteRow(row){
    const amount = parseInt(row.children[0].innerText);
    const type = row.children[1].innerText;

    let totalIncome = parseInt(document.getElementById("totalIncome").innerText);
    let totalExpense = parseInt(document.getElementById("expense").innerText);
    let balance = parseInt(document.getElementById("balance").innerText);

    if (type === "income") {
        totalIncome -= amount;
        balance -= amount;
        document.getElementById("totalIncome").innerText = totalIncome;
        document.getElementById("balance").innerText = balance;
    } else if (type === "expense") {
        totalExpense -= amount;
        balance += amount;
        document.getElementById("expense").innerText = totalExpense;
        document.getElementById("balance").innerText = balance;
    }

    row.remove();
   }

        function addValue(){
           let date = document.getElementsByClassName("dateInput")[0].value
           let amount = document.getElementsByClassName("amountInput")[0].value
           let transactionType = document.getElementsByClassName("transactionType")[0].value

           if(date!="" && amount!="" && transactionType!="Transaction Type"){
           let row = document.createElement("tr")
           let amountCell = document.createElement("td")
           amountCell.innerText = amount;

           let transactionCell = document.createElement("td")
           transactionCell.innerText = transactionType;

           let dateCell = document.createElement("td")
           dateCell.innerText = date;
           let binCell = document.createElement("td")

           let deleteButton = document.createElement("button")
           let binImage = document.createElement("img")
           binImage.src = "./recycle-bin.png"
           binImage.style.width="35px"
           binImage.style.height="35px"
           deleteButton.classList.add("delete-button")
           deleteButton.onclick=()=>deleteRow(row)
           deleteButton.appendChild(binImage)
           binCell.appendChild(deleteButton)

           row.appendChild(amountCell);
           row.appendChild(transactionCell);
           row.appendChild(dateCell);
           row.appendChild(binCell)
           table.appendChild(row);

           let totalIncome = document.getElementById("totalIncome").innerText
           let totalExpense = document.getElementById("expense").innerText
           let balance = document.getElementById("balance").innerText
        
           if(transactionType == "income"){
              if(totalIncome == "0"){
                  document.getElementById("totalIncome").innerText = amount
              }
              else{
                 document.getElementById("totalIncome").innerText = parseInt(totalIncome)+parseInt(amount)
               }

               if(balance == "0"){
                  document.getElementById("balance").innerText = amount
               }
               else{
                 document.getElementById("balance").innerText = parseInt(balance)+parseInt(amount)
               }
           }
           else if(transactionType == "expense"){
             if(totalExpense == "0"){
                document.getElementById("expense").innerText = amount
             }
             else{
                document.getElementById("expense").innerText = parseInt(totalExpense)+parseInt(amount) 
             }
             if(balance == "0"){
                  document.getElementById("balance").innerText = amount
               }
               else{
                 document.getElementById("balance").innerText = parseInt(balance)-parseInt(amount)
               }
           }
         } 
         else{
            alert("Enter all the Fields");
         }
        }