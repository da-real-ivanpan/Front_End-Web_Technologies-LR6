NameText = "???";
GroupText= "???";
IDText = "???";
BDText = "???";
EmailText = "???";

function toName()
{
    document.getElementById("Name").innerHTML = NameText;
    document.getElementById("Group").innerHTML = GroupText;
    document.getElementById("ID-card").innerHTML = IDText;
    document.getElementById("BD").innerHTML = BDText;
    document.getElementById("Email").innerHTML = EmailText; 
}

function Formdata(data){
    /* якщо не заповнено поле Ваше им’я, довжина менше 3-x*/
    if (data.nsp != null && data.nsp.value.length < 3 )
    {
    alert('Заповніть поле "ПІБ"');
    return false;}
    
    if(!(/([A-Za-zА-Яа-я']*?)\s([A-Za-zА-Яа-я]{1})\./.test(data.nsp.value)))
    {
    alert('"ПІБ" вказано невірно');
    return false;}
    
    /* якщо не заповнено поле Група */
    if (data.group != null && data.group.value.length < 2)
    {
    alert('Заповніть поле "Група"');
    return false;}

    if(!(/([A-ZА-Я]{1})\-([0-9]{2})/.test(data.group.value)))
    {
    alert('"Група" вказано невірно');
    return false;}
       
    /* ID-card */
    if(data.idcard != null && data.idcard.value.length == 0)
    {
    alert('поле "ID-card" пусте');
    return false;}
      /*
    if(data.idcard != null && data.idcard.value.length < 9)
    {
    alert('поле "ID-card" повинно містити 9 символів');
    return false;}*/
      
    if(!(/[A-ZА-Я]{2}\№[0-9]{6}/.test(data.idcard.value)))
    {
    alert('"ID-card" вказано невірно');
    return false;}

        /* якщо не заповнено поле День Народження */
    if (data.bd.value == '' || data.bd.value.length < 3)
    {
    alert('Заповніть поле "День народження"');
    return false;}

    /* e-mail Юзера */
    if(data.email != null && data.email.value.length == 0)
    {
    alert('поле "E-Mail" пусте');
    return false;}
    
    if(data.email != null && data.email.value.length < 6)
    {
    alert('дуже малий "E-Mail"');
    return false;}
    
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email.value)) )
    {
    alert("Введіть правильний E-Mail");
    return false;}

    /* робимо щоб поле сума дорівнювало числу */
    number = document.getElementById("suma");
    if (number.value !== '20')
    {
    alert('"Сума" не введена або введена невірно');
    return false;}

    NameText = data.nsp.value;
    GroupText = data.group.value;
    IDText = data.idcard.value;
    BDText = data.bd.value;
    EmailText = data.email.value; 
    document.getElementById("Name").innerHTML = NameText;
    document.getElementById("Group").innerHTML = GroupText;
    document.getElementById("ID-card").innerHTML = IDText;
    document.getElementById("BD").innerHTML = BDText;
    document.getElementById("Email").innerHTML = EmailText;    
    alert('ПІБ: ' + NameText + '\nГрупа: ' + GroupText + '\nID-card: ' + IDText + '\nДата народження: ' + BDText +'\ne-mail: ' + EmailText);
}
    
function boxClick(){
    x = document.getElementById("Cell8");
    y = document.getElementById("Pallete");
    x.style.backgroundColor = y.value;
}

function boxHover(){
    min = Math.ceil(0);
    max = Math.floor(255);
    x = document.getElementById("Cell8");
    r = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    g = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    b = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    x.style.backgroundColor= "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
}

/*card.addEventListener('dblclick', function (e) {
    card.classList.toggle('large');
  });*/

  function rowColor(){
    min = Math.ceil(0);
    max = Math.floor(255);
    rowN = 2;
    x = document.getElementById("Row" + rowN.toString());
    while (x != null)
    {
        r = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        g = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        b = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive      
        x.style.backgroundColor= "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
        rowN+=2;
        x = document.getElementById("Row" + rowN.toString())
    }
}