<div id="product-component-886aec4b2be" />(function() {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "meatstick.myshopify.com",
      apiKey: "b403ab90557a2bc47c77e9cf1d25a750",
      appId: "6"
    });

    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent("product", {
        id: [1114032472179],
        node: document.getElementById("product-component-886aec4b2be"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            variantId: "all",
            width: "240px",
            contents: {
              img: false,
              imgWithCarousel: false,
              title: false,
              variantTitle: false,
              price: false,
              description: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "50px"
                }
              },
              button: {
                "background-color": "#fd9626",
                ":hover": {
                  "background-color": "#e48722"
                },
                ":focus": {
                  "background-color": "#e48722"
                }
              },
              title: {
                "font-size": "26px"
              },
              price: {
                "font-size": "18px"
              },
              compareAt: {
                "font-size": "15px"
              }
            }
          },
          cart: {
            contents: {
              button: true
            },
            styles: {
              button: {
                "background-color": "#fd9626",
                ":hover": {
                  "background-color": "#e48722"
                },
                ":focus": {
                  "background-color": "#e48722"
                }
              },
              footer: {
                "background-color": "#ffffff"
              }
            }
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              variantTitle: false,
              buttonWithQuantity: true,
              button: false,
              quantity: false
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              button: {
                "background-color": "#fd9626",
                ":hover": {
                  "background-color": "#e48722"
                },
                ":focus": {
                  "background-color": "#e48722"
                }
              }
            }
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#fd9626",
                ":hover": {
                  "background-color": "#e48722"
                },
                ":focus": {
                  "background-color": "#e48722"
                }
              }
            }
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          }
        }
      });
    });
  }
})();
