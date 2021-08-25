---
id: css-variables
title: CSS Color Variables
sidebar_label: CSS Color Variables
---

All colors used in each Design System theme are provided as CSS variables on the `:root` pseudo-element.

Use any of these colors in your CSS by wrapping them in `var()`:

```css
.my-element {
    color: var(--primaryColor);
    border-bottom: 1px solid var(--primaryDark2Color);
}
```

## Example

The following are the CSS variables provided with the `blue` theme. All semantic colors (such as 'primary', 'secondary', 'success', 'danger', etc...) are relative to the current theme, and each individual color is also provided along with 4 light and 4 dark variations provided. 

```css
--primaryColor: #00a7cf;
--secondaryColor: #ffb819;
--tertiaryColor: #00c4b4;
--quaternaryColor: #ca2e55;
--successColor: #00c4b4;
--infoColor: #555387;
--warningColor: #ffb819;
--dangerColor: #ff5a34;
--headerPrimaryColor: #00a7cf;
--headerUnderlineColor: #0096ba;
--headerSecondaryColor: #0096ba;
--blueColor: #00a7cf;
--goldColor: #ffb819;
--greenColor: #00c4b4;
--orangeColor: #ff6c0c;
--purpleColor: #555387;
--redColor: #ff5a34;
--darkBlueColor: #0085a5;
--darkGoldColor: #e5a516;
--darkGreenColor: #3fae2a;
--darkRedColor: #e5512e;
--magentaColor: #ca2e55;
--primaryDark1Color: #009fc5;
--primaryDark2Color: #0096ba;
--primaryDark3Color: #008eb0;
--primaryDark4Color: #007591;
--primaryLight1Color: #0dabd1;
--primaryLight2Color: #1ab0d4;
--primaryLight3Color: #26b4d6;
--primaryLight4Color: #4dc1dd;
--secondaryDark1Color: #f2af18;
--secondaryDark2Color: #e6a617;
--secondaryDark3Color: #d99c15;
--secondaryDark4Color: #b38112;
--secondaryLight1Color: #ffbc25;
--secondaryLight2Color: #ffbf30;
--secondaryLight3Color: #ffc33c;
--secondaryLight4Color: #ffcd5e;
--tertiaryDark1Color: #00baab;
--tertiaryDark2Color: #00b0a2;
--tertiaryDark3Color: #00a799;
--tertiaryDark4Color: #00897e;
--tertiaryLight1Color: #0dc7b8;
--tertiaryLight2Color: #1acabc;
--tertiaryLight3Color: #26cdbf;
--tertiaryLight4Color: #4dd6cb;
--quaternaryDark1Color: #c02c51;
--quaternaryDark2Color: #b6294d;
--quaternaryDark3Color: #ac2748;
--quaternaryDark4Color: #8d203c;
--quaternaryLight1Color: #cd385e;
--quaternaryLight2Color: #cf4366;
--quaternaryLight3Color: #d24d6f;
--quaternaryLight4Color: #da6d88;
--successDark1Color: #00baab;
--successDark2Color: #00b0a2;
--successDark3Color: #00a799;
--successDark4Color: #00897e;
--successLight1Color: #0dc7b8;
--successLight2Color: #1acabc;
--successLight3Color: #26cdbf;
--successLight4Color: #4dd6cb;
--infoDark1Color: #514f80;
--infoDark2Color: #4d4b7a;
--infoDark3Color: #484773;
--infoDark4Color: #3c3a5f;
--infoLight1Color: #5e5c8d;
--infoLight2Color: #666493;
--infoLight3Color: #6f6d99;
--infoLight4Color: #8887ab;
--warningDark1Color: #f2af18;
--warningDark2Color: #e6a617;
--warningDark3Color: #d99c15;
--warningDark4Color: #b38112;
--warningLight1Color: #ffbc25;
--warningLight2Color: #ffbf30;
--warningLight3Color: #ffc33c;
--warningLight4Color: #ffcd5e;
--dangerDark1Color: #f25631;
--dangerDark2Color: #e6512f;
--dangerDark3Color: #d94d2c;
--dangerDark4Color: #b33f24;
--dangerLight1Color: #ff623e;
--dangerLight2Color: #ff6b48;
--dangerLight3Color: #ff7352;
--dangerLight4Color: #ff8c71;
--blueDark1Color: #009fc5;
--blueDark2Color: #0096ba;
--blueDark3Color: #008eb0;
--blueDark4Color: #007591;
--blueLight1Color: #0dabd1;
--blueLight2Color: #1ab0d4;
--blueLight3Color: #26b4d6;
--blueLight4Color: #4dc1dd;
--goldDark1Color: #f2af18;
--goldDark2Color: #e6a617;
--goldDark3Color: #d99c15;
--goldDark4Color: #b38112;
--goldLight1Color: #ffbc25;
--goldLight2Color: #ffbf30;
--goldLight3Color: #ffc33c;
--goldLight4Color: #ffcd5e;
--greenDark1Color: #00baab;
--greenDark2Color: #00b0a2;
--greenDark3Color: #00a799;
--greenDark4Color: #00897e;
--greenLight1Color: #0dc7b8;
--greenLight2Color: #1acabc;
--greenLight3Color: #26cdbf;
--greenLight4Color: #4dd6cb;
--orangeDark1Color: #f2670b;
--orangeDark2Color: #e6610b;
--orangeDark3Color: #d95c0a;
--orangeDark4Color: #b34c08;
--orangeLight1Color: #ff7318;
--orangeLight2Color: #ff7b24;
--orangeLight3Color: #ff8230;
--orangeLight4Color: #ff9855;
--purpleDark1Color: #514f80;
--purpleDark2Color: #4d4b7a;
--purpleDark3Color: #484773;
--purpleDark4Color: #3c3a5f;
--purpleLight1Color: #5e5c8d;
--purpleLight2Color: #666493;
--purpleLight3Color: #6f6d99;
--purpleLight4Color: #8887ab;
--redDark1Color: #f25631;
--redDark2Color: #e6512f;
--redDark3Color: #d94d2c;
--redDark4Color: #b33f24;
--redLight1Color: #ff623e;
--redLight2Color: #ff6b48;
--redLight3Color: #ff7352;
--redLight4Color: #ff8c71;
--darkBlueDark1Color: #007e9d;
--darkBlueDark2Color: #007895;
--darkBlueDark3Color: #00718c;
--darkBlueDark4Color: #005d74;
--darkBlueLight1Color: #0d8baa;
--darkBlueLight2Color: #1a91ae;
--darkBlueLight3Color: #2697b3;
--darkBlueLight4Color: #4daac0;
--darkGoldDark1Color: #da9d15;
--darkGoldDark2Color: #ce9514;
--darkGoldDark3Color: #c38c13;
--darkGoldDark4Color: #a0740f;
--darkGoldLight1Color: #e6aa22;
--darkGoldLight2Color: #e8ae2d;
--darkGoldLight3Color: #e9b339;
--darkGoldLight4Color: #edc05c;
--darkGreenDark1Color: #3ca528;
--darkGreenDark2Color: #399d26;
--darkGreenDark3Color: #369424;
--darkGreenDark4Color: #2c7a1d;
--darkGreenLight1Color: #49b235;
--darkGreenLight2Color: #52b63f;
--darkGreenLight3Color: #5cba4a;
--darkGreenLight4Color: #79c66a;
--darkRedDark1Color: #da4d2c;
--darkRedDark2Color: #ce4929;
--darkRedDark3Color: #c34527;
--darkRedDark4Color: #a03920;
--darkRedLight1Color: #e65a38;
--darkRedLight2Color: #e86243;
--darkRedLight3Color: #e96b4d;
--darkRedLight4Color: #ed856d;
--magentaDark1Color: #c02c51;
--magentaDark2Color: #b6294d;
--magentaDark3Color: #ac2748;
--magentaDark4Color: #8d203c;
--magentaLight1Color: #cd385e;
--magentaLight2Color: #cf4366;
--magentaLight3Color: #d24d6f;
--magentaLight4Color: #da6d88;
```
