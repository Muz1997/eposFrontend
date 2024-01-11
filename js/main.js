$(document).ready(function () {
  var jsonData = {
    products: [
      {
        category: "laptops",
        products: [
          {
            brand: "Acer",
            model: "Aspire 5",
            specifications: {
              processor: "Intel Core i5",
              ram: "8GB",
              storage: "256GB SSD",
              display: "15.6-inch",
              graphics: "NVIDIA GeForce MX250",
            },
            price: 699.99,
          },
          {
            brand: "Apple",
            model: "MacBook Air",
            specifications: {
              processor: "Apple M1",
              ram: "8GB",
              storage: "256GB SSD",
              display: "13.3-inch Retina",
              graphics: "Apple M1 GPU",
            },
            price: 999.99,
          },
          {
            brand: "Dell",
            model: "XPS 13",
            specifications: {
              processor: "Intel Core i7",
              ram: "16GB",
              storage: "512GB SSD",
              display: "13.4-inch",
              graphics: "Intel Iris Xe Graphics",
            },
            price: 1299.99,
          },
          {
            brand: "HP",
            model: "Spectre x360",
            specifications: {
              processor: "Intel Core i7",
              ram: "16GB",
              storage: "1TB SSD",
              display: "13.3-inch 4K OLED",
              graphics: "Intel Iris Xe Graphics",
            },
            price: 1499.99,
          },
        ],
      },
      {
        category: "mobiles",
        products: [
          {
            brand: "Samsung",
            model: "Galaxy S21",
            specifications: {
              display: "6.2-inch",
              processor: "Exynos 2100",
              ram: "8GB",
              storage: "128GB",
              camera: "Triple 12MP+12MP+64MP",
              battery: "4000mAh",
            },
            price: 799.99,
          },
          {
            brand: "Apple",
            model: "iPhone 12",
            specifications: {
              display: "6.1-inch Super Retina XDR",
              processor: "A14 Bionic",
              ram: "4GB",
              storage: "128GB",
              camera: "Dual 12MP+12MP",
              battery: "2815mAh",
            },
            price: 899.99,
          },
          {
            brand: "Google",
            model: "Pixel 6",
            specifications: {
              display: "6.4-inch",
              processor: "Google Tensor",
              ram: "8GB",
              storage: "128GB",
              camera: "Dual 50MP+12MP",
              battery: "4600mAh",
            },
            price: 799.99,
          },
          {
            brand: "OnePlus",
            model: "9 Pro",
            specifications: {
              display: "6.7-inch",
              processor: "Snapdragon 888",
              ram: "12GB",
              storage: "256GB",
              camera: "Quad 48MP+50MP+8MP+2MP",
              battery: "4500mAh",
            },
            price: 999.99,
          },
        ],
      },
    ],
  };

  // Iterate through categories and generate buttons
  $.each(jsonData.products, function (index, category) {
    var categoryName = category.category;
    // var button = $("<div>").text(categoryName).addClass("category-button");
    var button = $("<div>")
      .addClass("col-xs-3 col-sm-3 col-md-3 col-lg-3")
      .append($("<div>").text(categoryName).addClass("fig-button text-center"));

    button.click(function () {
      // Clear existing brand divs
      $("#brandDivs").empty();

      // Populate brand names and create brand divs
      $.each(category.products, function (index, product) {
        var brandName = product.brand;
        var brandDiv = $("<div>")
          .addClass("col-xs-3 col-sm-3 col-md-3 col-lg-3")
          .append(
            $("<div>").text(brandName).addClass("fig-button text-center")
          );

        $("#brandDivs").append(brandDiv);
      });
    });

    $("#categoryButtons").append(button);
  });
});
