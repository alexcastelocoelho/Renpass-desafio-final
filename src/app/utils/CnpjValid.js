function TestCNPJ(cnpj) {
	var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ];
	var c = String(cnpj).replace(/[^\d]/g, '');
    
	if(c.length !== 14)
		return false;

	if(/0{14}/.test(c))
		return false;
	let i;
	let n;

	for ( i = 0, n = 0; i < 12; n += c[i] * b[++i]);
	if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
		return false;

	for ( i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
	if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
		return false;

	return true;
}

module.exports = TestCNPJ;

