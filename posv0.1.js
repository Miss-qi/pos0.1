/**
 * Created by qiyanzi on 16-7-18.
 */
function printReceipt(inputs) {
    let cartItems = countNum(cartItems);
    let receipt = calculateSubtotal(merNum);
    let total = calculateTotal(merSubtotal);
    receiptText = print(merTotal);

    console.log(receiptText);
}

function countNum(cartItems) {
    let merNum = [{info:cartItems[0],count:1}];

    for(let i = 1;i < cartItems.length;i++) {
        for(let k = 0; k < merNum.length && Cart[i].barcode != merNum[k].info.barcode; k++) ;

        if(k < merNum.length){
            merNum[k].count++;
        }
        else{
            merNum.push({info:cartItems[i],count:1});
        }
    }
    return merNum;
}

function calculateSubtotal(merNum) {
    let merSubtotal = [{item:merNum[0],subtotal:0}];

    for(let i = 1;i < merNum.length;i++) {
        merSubtotal[i].subtotal = merNum[i].count * merNum[i].info.price;
    }
    return merSubtotal;
}

function calculateTotal(merSubtotal) {
    let merTotal = {count:merSubtotal[0],total:0};
    let total = 0;

    for(let i = 1;i < merSubtotal.length; i++) {
        total += merSubtotal[i].subtotal;
    }
    merTotal = {count:merSubtotal,total:total};
    return merTotal;
}

function print(merTotal) {
    var receiptText = '***<没钱赚商店>收据***\n';

    for(var i = 0;i < merTotal.items.length;i++) {
        receiptText += '名称：' + merTotal.items[i].item.info.name
            + '，数量：' + merTotal.items[i].item.count + merTotal.items[i].item.info.unit
            + '，单价：' + merTotal.items[i].item.info.price.toFixed(2) + '(元)'
            + '，小计：' + merTotal.items[i].subtotal.toFixed(2) + '(元)' + '\n';
    }
    receiptText += '----------------------\n'
        + '总计：' + merTotal.total.toFixed(2) + '(元)' + '\n'
        + '**********************';

    return receiptText;
}