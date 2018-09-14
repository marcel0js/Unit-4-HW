let userCommand = '';

const runCommand = function (e) {
    e.preventDefault();
    switch (userCommand) {
        case 'print':
            let htmlStr = '';
            for (let i = 0; i < employeeList.length; i++) {
                htmlStr += `<p> ${employeeList[i].name}</p>`;
                htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
                htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
            }
            render(htmlStr);
            break;
        case 'verify':
            let employeeName = $('input').val();
            render(employeeList.some(e => e.name.toLowerCase() === employeeName.toLowerCase()) ? 'Employee Found' : 'Employee Not Found');
            break;
        // case 'lookup':
        //     let employeeName = $('input').val();
        //     render(employeeList.some(e => e.name.toLowerCase() === employeeName.toLowerCase())  ? : 'Employee Not Found');
        //     break;
        // case contains
        //     let employeeName = $('input').val();
        //     render(employeeList.some(e => e.name.toLowerCase() === employeeName.toLowerCase()) ? 'Employee Deleted': 'Employee Not Found');
        //     break;
        // case update
        //     let employeeName = $('input').val();
        //     render(employeeList.some(e => e.name.toLowerCase() === employeeName.toLowerCase()) ? 'Employee Deleted': 'Employee Not Found');
        //     break;
        // case add
        //     let employeeName = $('input').val();
        //     render(employeeList.some(e => e.name.toLowerCase() === employeeName.toLowerCase()) ? 'Employee Deleted': 'Employee Not Found');
        //     break;
        // case deleted
        //     let employeeName = $('input').val();
        //     render(employeeList.some(e => e.name.toLowerCase() === employeeName.toLowerCase()) ? 'Employee Deleted': 'Employee Not Found');
        //     break;


    }
}

const verify = function () {
    userCommand = 'verify';
    $('input').addClass('show');
}

const print = function () {
    userCommand = 'print';
    $('input').removeClass('show');

}

const lookup = function () {
    userCommand = 'lookup';
    
}

const contains = function () {
    userCommand = 'contains';
    
}

const update = function () {
    userCommand = 'update';
    // $('#name').addClass('show');
    // $('#number').addClass('show');
    // $('#phone').addClass('show');
}

const add = function () {
    userCommand = 'add';
    // $('input').addClass('show');
}

const deleted = function () {
    userCommand = 'delete';
    // $('input').addClass('show');
}

const render = function (e) {
    $('#list').html(e);
}

$('#print').on('click', print);
$('#verify').on('click', verify);
$('#lookup').on('click', lookup);
$('#contains').on('click', contains);
$('#update').on('click', update);
$('#add').on('click', add);
$('#delete').on('click', deleted);

$('#submit').on('click', runCommand);