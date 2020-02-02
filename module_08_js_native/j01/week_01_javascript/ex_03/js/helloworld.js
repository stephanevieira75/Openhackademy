function swapValues(a, b){
    let tmp;
    tmp = b, b = a, a = tmp;
    return 'a=' + a + '\n' + 'b=' +  b;
}