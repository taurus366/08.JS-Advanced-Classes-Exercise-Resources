let g = [{id:1,username:'ali',content:'hello'},{id:2,username:'cli',content:'hello'},{id:1.1,username:'bli',content:'hello'}];

g.sort((s1,s2)=> s1.username.localeCompare(s2.username))
    .forEach(s => console.log(s.username))
