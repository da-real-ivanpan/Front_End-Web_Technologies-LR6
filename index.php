<form action='index.php' method="post">
<h1 style="margin: 25px; text-align: center;">Форма для заповнення</h1>
        <div class="flexRow">
            <div class="flexCol">
                <input type="text" id="name" pattern="[A-Za-zА-Яа-я'-]*?\s[A-Za-zА-Яа-я]{1}\.\S[A-Za-zА-Яа-я]{1}\." placeholder="ПІБ">
                <input type="text" id="group" pattern="[A-ZА-Я]{2}+-[0-9]{2}" placeholder="Група">
                <input type="text" id="idcard" pattern="[A-ZА-Я]{2}+\s№[0-9]{6}" placeholder="ID-card">
                <input type="date" id="bd" placeholder="Дата народж.">
                <input type="email" id="email" placeholder="e-mail">
                <input type="number" id="suma" placeholder="10+10=?">
                <button onClick="return Formdata(this.form)">Підтвердити</button>
            </div>
            <div class="flexCol">
                <h2>Введені дані</h2>
                <div class="textCol" style="margin: 15">
                    <b>ПІБ: </b> <p id="Name">???</p>
                </div>
                <div class="textCol" style="margin: 15">
                    <b>Група: </b> <p id="Group">???</p>
                </div>
                <div class="textCol" style="margin: 15">
                    <b>ID-card: </b> <p id="IDcard">???</p>
                </div>
                <div class="textCol" style="margin: 15">
                    <b>Дата народження: </b> <p id="BD">???</p>
                </div>
                <div class="textCol" style="margin: 15">
                    <b>e-mail: </b> <p id="Email">???</p>
                </div>
            </div>
        </div>
</form>
