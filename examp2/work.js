class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = []; // [{id:1,username:ali,content:hello},{id:2,username:ali,content:hello},{id:1.1,username:ali,content:hello}]
        this.likes = [];
        this.counter = 0;
    }

    set likes(array) {
        this._likes = array;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else if (this.likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        let indexToDelete = this._likes.indexOf(username);
        this._likes.splice(indexToDelete, 1);

        return `${username} disliked ${this.title}`;
    }


    comment(username, content, id) {


        if (id) {

            let isValid = false;
            this.comments
                .forEach(c => {
                    if (c.id === id) {
                        return isValid = true;
                    }
                })
            let isOk = false
            let validId = 1;
            while (!isOk) {
                let isFound = false;
                this.comments
                    .forEach(c => {
                        if (c.id.toString() === (`${id}.${validId}`)) {
                            return isFound = true;
                        }
                    })
                if (isFound) {
                    validId++;
                } else {
                    isOk = true;
                }

            }


            if (isValid) {
                this.comments.push({
                    id: `${id}.${validId}`,
                    username: username,
                    content: `${content}`
                });
                return 'You replied successfully';

            }

        } else {

            this.counter++;
            this.comments.push({
                id: this.counter,
                username: username,
                content: content
            })

            return `${username} commented on ${this.title}`;
        }
    }

    toString(typeToSort){
        let string = '';
        string += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.likes}\nComments:\n`;

        // [{id:1,username:ali,content:hello},{id:2,username:ali,content:hello},{id:1.1,username:ali,content:hello}]

        if (typeToSort === 'username'){
        this.comments
            .filter(l => l.id.toString().length <= 2)
            .sort((l1, l2)=> {
               // if(l1.id.toString().length  <= 2){
                    return  l1.username.localeCompare(l2.username)
               // }

            })
            .forEach(line => {
                if (line.id.toString().length > 2){
                    string += `--- ${line.id}. ${line.username}: ${line.content}\n`;
                }else {
                    string += `-- ${line.id}. ${line.username}: ${line.content}\n`;
                }

            })

            this.comments
                .filter(l => l.id.toString().length > 2)
                .sort((l1, l2)=> {
                    // if(l1.id.toString().length  <= 2){
                    return  l1.username.localeCompare(l2.username)
                    // }

                })
                .forEach(line => {
                 //   if (line.id.toString().length > 2){
                        string += `--- ${line.id}. ${line.username}: ${line.content}\n`;
                  //  }else {
                    //    string += `-- ${line.id}. ${line.username}: ${line.content}\n`;
                  //  }

                })

        }else if (typeToSort ==='asc'){

            this.comments
                .filter(l => l.id.toString().length <= 2)
                .sort((l1, l2)=> {
                    // if(l1.id.toString().length  <= 2){
                  let one = parseInt(l1.id);
                   let second = parseInt(l2.id);
                    return  one - second
                    // }

                })
                .forEach(line => {
                    // if (line.id.toString().length > 2){
                    //     string += `--- ${line.id}. ${line.username}: ${line.content}\n`;
                  //  }else {
                        string += `-- ${line.id}. ${line.username}: ${line.content}\n`;
                //    }

                })

            this.comments
                .filter(l => l.id.toString().length > 2)
                .sort((l1, l2)=> {
                    // if(l1.id.toString().length  <= 2){
                    let one = parseInt(l1.id);
                    let second = parseInt(l2.id);
                    return  l1.id.localeCompare(l2.id)
                    // }

                })
                .forEach(line => {
                   // if (line.id.toString().length > 2){
                        string += `--- ${line.id}. ${line.username}: ${line.content}\n`;
                    // }else {
                    //     string += `-- ${line.id}. ${line.username}: ${line.content}\n`;
                    // }

                })

        }else if (typeToSort ==='desc'){
            this.comments
                .filter(l => l.id.toString().length <= 2)
                .sort((l1, l2)=> {
                    // if(l1.id.toString().length  <= 2){
                    let one = parseFloat(l1.id);
                    let second = parseFloat(l2.id);
                    return  second - one
                    // }

                })
                .forEach(line => {
                    // if (line.id.toString().length > 2){
                    //     string += `--- ${line.id}. ${line.username}: ${line.content}\n`;
                    //  }else {
                    string += `-- ${line.id}. ${line.username}: ${line.content}\n`;
                    //    }

                })

            this.comments
                .filter(l => l.id.toString().length >= 2)
                .sort((l1, l2)=> {
                    // if(l1.id.toString().length  <= 2){
                    let one = parseInt(l1.id);
                    let second = parseInt(l2.id);
                    console.log(one, second)
                    return  l2.id.localeCompare(l1.id)
                    // }

                })
                .forEach(line => {
                    // if (line.id.toString().length > 2){
                    string += `--- ${line.id}. ${line.username}: ${line.content}\n`;
                    // }else {
                    //     string += `-- ${line.id}. ${line.username}: ${line.content}\n`;
                    // }

                })
        }
        return string;

    }


}

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.likes);
//console.log(art.dislike("Sally"));
console.log(art.like("Ivan"));
console.log(art.like("Steven"));
console.log(art.likes);
console.log(art.comment("Anny", "Some Content"));
console.log(art.comment("Ammy", "New Content", 1));
console.log(art.comment("Zane", "Reply", 2));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 2));
