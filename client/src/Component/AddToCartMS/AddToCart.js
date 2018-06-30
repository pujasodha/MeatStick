<div id='product-component-89d805b2ef7'></div>

function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'meatstick05.myshopify.com',
      apiKey: '3c27692609d90e3fdccfe84d13d6a502',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [1649514643574],
        node: document.getElementById('product-component-89d805b2ef7'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#fd9626",
        "font-family": "Arial, sans-serif",
        ":hover": {
          "background-color": "#e48722"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#e48722"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#fd9626",
        "font-family": "Arial, sans-serif",
        ":hover": {
          "background-color": "#e48722"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#e48722"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#fd9626",
        "font-family": "Arial, sans-serif",
        ":hover": {
          "background-color": "#e48722"
        },
        "border-radius": "5px",
        ":focus": {
          "background-color": "#e48722"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Arial, sans-serif",
        "font-weight": "normal"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Arial, sans-serif",
        "background-color": "#fd9626",
        ":hover": {
          "background-color": "#e48722"
        },
        ":focus": {
          "background-color": "#e48722"
        },
        "font-weight": "normal"
      }
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Arial, sans-serif"
      },
      "select": {
        "font-family": "Arial, sans-serif"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
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
