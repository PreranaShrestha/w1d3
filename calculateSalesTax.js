var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates) {
  var result = {};
  //making calculateSalesTax object
  for ( var i = 0; i < companySalesData.length; i++) {
    totalSales = 0;
    if(!result[companySalesData[i].name]) {
      result[companySalesData[i].name] = {};
    }
  }

  for(var i = 0; i < companySalesData.length; i++) {
    var province = companySalesData[i].province;
    var sales = companySalesData[i].sales;
    var name = companySalesData[i].name;
    var totalTaxes = 0;
    var totalSales = 0;
    sales.forEach((sale) => {
      totalSales += sale;
      totalTaxes += sale * salesTaxRates[province];
    });
    if(!result[name].totalSales) {
      result[name].totalSales = totalSales;
      result[name].totalTaxes = totalTaxes;
    } else {
      result[name].totalSales += totalSales;
      result[name].totalTaxes += totalTaxes;
    }

  }

  // console.log(totalSales);



  console.log(result);
}
var results = calculateSalesTax(companySalesData, salesTaxRates);