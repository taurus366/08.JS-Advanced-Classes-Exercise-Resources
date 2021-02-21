// const getMain = document.querySelector('#main');
// const main = document.querySelector('body');
// main.addEventListener('click',()=>{
//     console.log('loaded');
// })

class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;

    }

    get online() {
        return this._online;
    }


    set online(type) {
        let getUser = document.querySelectorAll('.title');


        let isFind = Array.from(getUser)
            .find(u => {

                Array.from(u.childNodes)
                    .forEach(f => {
                        return f === this.firstName + ' ' + this.lastName
                    })
                return u.innerHTML === `${this.firstName} ${this.lastName}<button>ℹ</button>`

            });

        if (isFind) {

            if (type === true) {

                isFind.classList.add('online');

                this._online = true;
            } else if (type === false) {
                isFind.classList.remove('online');
                this._online = false;
            }


        }


    }


    showInfo(ev) {
        let parent = ev.target.parentNode.parentNode;
        parent.querySelector('.info').style.display = 'block';
    }

    render(id) {


        const getMain = document.getElementById(id);

        let article = document.createElement('article');

        let btn = document.createElement('button');
        btn.addEventListener('click', this.showInfo);
        btn.innerHTML = '&#8505;';
        let div = document.createElement('div');
        div.classList.add('title');
        div.textContent = `${this.firstName} ${this.lastName}`;
        div.appendChild(btn);

        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.style.display = 'none';

        let spanPhone = document.createElement('span');
        spanPhone.innerHTML = `&phone; ${this.phone}`;
        let spanEmail = document.createElement('span');
        spanEmail.innerHTML = `&#9993; ${this.email}`;

        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);
        article.appendChild(div);
        article.appendChild(divInfo);
        getMain.appendChild(article);

    }

}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
