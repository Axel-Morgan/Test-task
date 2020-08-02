//Банк данных
var bank = {
	bankValueLicense: 13,
	bankNumberLicense: 1,
	bankTotalLicense: 13
}

//Получение стоимости лицензии
function getValueLicense (licencePrice,  numLic){
	bank.bankValueLicense = licencePrice;
	countTotal(bank.bankValueLicense, bank.bankNumberLicense);
    typeLicense(numLic);
    highlight(numLic);
    getNumberLicense ();
}

//Получение количества лицензий
function getNumberLicense (){
	let selectLicenses = document.getElementById("sel").selectedIndex;
	bank.bankNumberLicense = selectLicenses + 1;
	countTotal(bank.bankValueLicense, bank.bankNumberLicense);
}

//Вычилсение итоговой суммы
function countTotal (price, number){
	let finishTotal = Number(price) * Number(number);
    document.getElementById("totalScore").innerHTML = String(finishTotal);
    bank.bankTotalLicense = finishTotal;
}

//Отображение номера выбранной лицензии
function typeLicense (num){
	document.getElementById("plan").innerHTML = "#"+String(num);
}

//Вывод итоговой суммы
function outTotal(){
	alert("Итоговая цена: $"+bank.bankTotalLicense);
}

//Подсвветка выбранного типа лицензии
function highlight(num){
	var divBlocks = document.getElementsByClassName('choices');
	for (let i = 0; i < divBlocks.length; i++)
	{
		if (i == num - 1)
		{
			divBlocks[i].classList.add("choicesLight");
	    }   
	    else
	    {
	        divBlocks[i].classList.remove("choicesLight");
	    } 
    }
}