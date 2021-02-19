class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        // const valid =
        //     [username, position, department].map((el) => Boolean(el)).includes(false) ||
        //     salary <= 0
        //         ? false
        //         : true;
    let valid =
        [username, position, department].map(s => Boolean(s)).includes(false) || salary <=0 ? false : true
        //  if (username.length === 0 || salary < 0 || position.length === 0 || department.length === 0 || salary === undefined) {
        if (!valid){
            throw new Error('Invalid input!');
        } else {
           if (this.departments[department]) {
                this.departments[department].push({
                    username: `${username}`,
                    salary: `${salary}`,
                    position: `${position}`,
                })
           } else {
                this.departments[department] = [{
                    username: `${username}`,
                    salary: `${salary}`,
                    position: `${position}`,
                }]
                return `New employee is hired. Name: ${username}. Position: ${position}`

           }

        }
    }

    bestDepartment(){
        let bestAverageSalary = {average : 0};
        for (const department in this.departments) {
            let currentAverageSalary = this.departments[department].reduce((a,s)=> a += Number(s.salary),0) / this.departments[department].length

            if (currentAverageSalary > bestAverageSalary.average){
                bestAverageSalary.average = currentAverageSalary;
                bestAverageSalary['department'] = department;
            }
        }

       const sortedEmployees = this.departments[bestAverageSalary.department]
            .sort((a, b)=> b.salary - a.salary || a.username.localeCompare(b.username))
            .reduce((a,c)=> {
                a.push(`${c.username} ${c.salary} ${c.position}`);
                return a },[])
            .join('\n');

        return `Best Department is: ${bestAverageSalary.department}\nAverage salary: ${bestAverageSalary.average.toFixed(2)}\n${sortedEmployees}`

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


