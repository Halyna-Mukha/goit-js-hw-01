function getElementWidth(content, padding, border) {

    const Npx = (parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2);
  
    console.log(Npx);
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");