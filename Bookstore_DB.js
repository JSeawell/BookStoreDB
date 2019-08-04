/* Bookstore Database JavaScript */

ID_Count = 2;

function addProduct(){
    //create row
    row = document.createElement("tr");
    //add row to table
    ProdTable.appendChild(row);
    
    //add column
    column = document.createElement("td");
                
    let productID = ID_Count + 1;
    column.textContent = productID;
    ID_Count ++;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let productName = document.getElementsByName("pName")[0].value;
    column.textContent = productName;
                
    //add column to row
    row.appendChild(column);
    
    //productStore currently unused
    //let productStore = document.getElementsByName("pBookstoreID")[0].value;
    
    //add column
    column = document.createElement("td");
                
    let productCat = document.getElementsByName("pCategory")[0].value;
    column.textContent = productCat;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let productAuth = document.getElementsByName("pAuthor")[0].value;
    column.textContent = productAuth;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let productQuan = document.getElementsByName("pQuantity")[0].value;
    column.textContent = productQuan;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let productCond = document.getElementsByName("pCondition")[0].value;
    column.textContent = productCond;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let productPrice = document.getElementsByName("pPrice")[0].value;
    column.textContent = productPrice;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    var btn1 = document.createElement("BUTTON");   // Create a <button> element
    btn1.innerHTML = "Modify Item";
    btn1.id = "Modify";
    
    var btn2 = document.createElement("BUTTON");   // Create a <button> element
    btn2.innerHTML = "Remove Item";
    btn2.id = "Remove";
    btn2.addEventListener = "click", deleteRowProd(row);
    
    column.appendChild(btn1);
    column.appendChild(btn2);
                
    //add column to row
    row.appendChild(column);
    
}

function addBookstore(){
    //create row
    row = document.createElement("tr");
    //add row to table
    StoresTable.appendChild(row);
    
    //add column
    column = document.createElement("td");
                
    let bookstoreID = ID_Count + 1;
    column.textContent = bookstoreID;
    ID_Count ++;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let storeName = document.getElementsByName("bName")[0].value;
    column.textContent = storeName;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let storeLoc = document.getElementsByName("bLocation")[0].value;
    column.textContent = storeLoc;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let storeType = document.getElementsByName("bType")[0].value;
    column.textContent = storeType;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    var btn1 = document.createElement("BUTTON");   // Create a <button> element
    btn1.innerHTML = "Modify Item";
    btn1.id = "Modify"
    
    var btn2 = document.createElement("BUTTON");   // Create a <button> element
    btn2.innerHTML = "Remove Item";
    btn2.id = "Remove"
    
    column.appendChild(btn1);
    column.appendChild(btn2);
                
    //add column to row
    row.appendChild(column);
}

function addCustomer(){
    
    //create row
    row = document.createElement("tr");
    //add row to table
    CustomersTable.appendChild(row);
    
    //add column
    column = document.createElement("td");
                
    let customerID = ID_Count + 1;
    column.textContent = customerID;
    ID_Count ++;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let customerName = document.getElementsByName("cName")[0].value;
    column.textContent = customerName;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let customerAdd = document.getElementsByName("cAddress")[0].value;
    column.textContent = customerAdd;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let customerPhone = document.getElementsByName("cPhone")[0].value;
    column.textContent = customerPhone;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    var btn1 = document.createElement("BUTTON");   // Create a <button> element
    btn1.innerHTML = "Modify Item";
    btn1.id = "Modify"
    
    var btn2 = document.createElement("BUTTON");   // Create a <button> element
    btn2.innerHTML = "Remove Item";
    btn2.id = "Remove"
    
    column.appendChild(btn1);
    column.appendChild(btn2);
                
    //add column to row
    row.appendChild(column);
}

function addSale(){
    
    //create row
    row = document.createElement("tr");
    //add row to table
    SalesTable.appendChild(row);
    
    //add column
    column = document.createElement("td");
                
    let saleStore = document.getElementsByName("sBookstoreID")[0].value;
    column.textContent = saleStore;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let saleProd = document.getElementsByName("sProductID")[0].value;
    column.textContent = saleProd;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let saleCust = document.getElementsByName("sCustomerID")[0].value;
    column.textContent = saleCust;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let salePrice = document.getElementsByName("sPrice")[0].value;
    column.textContent = salePrice;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    let saleDate = document.getElementsByName("sDate")[0].value;
    column.textContent = saleDate;
                
    //add column to row
    row.appendChild(column);
    
    //add column
    column = document.createElement("td");
                
    var btn1 = document.createElement("BUTTON");   // Create a <button> element
    btn1.innerHTML = "Modify Item";
    btn1.id = "Modify"
    
    var btn2 = document.createElement("BUTTON");   // Create a <button> element
    btn2.innerHTML = "Remove Item";
    btn2.id = "Remove"
    
    column.appendChild(btn1);
    column.appendChild(btn2);
                
    //add column to row
    row.appendChild(column);
}


 function deleteRowProd(row){
      var d = row.parentNode.parentNode.rowIndex;
      document.getElementById('ProdTable').deleteRow(d);
   }

function deleteRowBook(row){
      var d = row.parentNode.parentNode.rowIndex;
      document.getElementById('StoresTable').deleteRow(d);
   }

function deleteRowCust(row){
      var d = row.parentNode.parentNode.rowIndex;
      document.getElementById('CustomersTable').deleteRow(d);
   }

function deleteRowSale(row){
      var d = row.parentNode.parentNode.rowIndex;
      document.getElementById('SalesTable').deleteRow(d);
   }

