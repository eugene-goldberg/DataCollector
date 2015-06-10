angular.module('collector')
    .controller('PhoneListCtrl', function ($scope) {

        var obj = [
            { "EmployeeID": 1, "LastName": "Davolio", "FirstName": "Nancy", "Title": "Sales Representative", "City": "Seattle", "Country": "USA" },
            { "EmployeeID": 2, "LastName": "Fuller", "FirstName": "Andrew", "Title": "Vice President, Sales", "City": "Tacoma", "Country": "USA" },
            { "EmployeeID": 3, "LastName": "Leverling", "FirstName": "Janet", "Title": "Sales Representative", "City": "Kirkland", "Country": "USA" },
            { "EmployeeID": 4, "LastName": "Peacock", "FirstName": "Margaret", "Title": "Sales Representative", "City": "Redmond", "Country": "USA" },
            { "EmployeeID": 5, "LastName": "Buchanan", "FirstName": "Steven", "Title": "Sales Manager", "City": "London", "Country": "UK" },
            { "EmployeeID": 6, "LastName": "Suyama", "FirstName": "Michael", "Title": "Sales Representative", "City": "London", "Country": "UK" },
            { "EmployeeID": 7, "LastName": "King", "FirstName": "Robert", "Title": "Sales Representative", "City": "London", "Country": "UK" },
            { "EmployeeID": 8, "LastName": "Callahan", "FirstName": "Laura", "Title": "Inside Sales Coordinator", "City": "Seattle", "Country": "USA" },
            { "EmployeeID": 9, "LastName": "Dodsworth", "FirstName": "Anne", "Title": "Sales Representative", "City": "London", "Country": "UK" },
            { "EmployeeID": 4, "LastName": "Peacock", "FirstName": "Margaret", "Title": "Sales Representative", "City": "Redmond", "Country": "USA" },
            { "EmployeeID": 5, "LastName": "Buchanan", "FirstName": "Steven", "Title": "Sales Manager", "City": "London", "Country": "UK" },
            { "EmployeeID": 6, "LastName": "Suyama", "FirstName": "Michael", "Title": "Sales Representative", "City": "London", "Country": "UK" },
            { "EmployeeID": 7, "LastName": "King", "FirstName": "Robert", "Title": "Sales Representative", "City": "London", "Country": "UK" },
            { "EmployeeID": 8, "LastName": "Callahan", "FirstName": "Laura", "Title": "Inside Sales Coordinator", "City": "Seattle", "Country": "USA" },
            { "EmployeeID": 9, "LastName": "Dodsworth", "FirstName": "Anne", "Title": "Sales Representative", "City": "London", "Country": "UK" },
            { "EmployeeID": 10, "LastName": "Suyama", "FirstName": "Margaret", "Title": "Sales Representative", "City": "London", "Country": "UK" }
        ];

        $scope.selectedRow = 2;
        $scope.page = 2;
        $scope.data = obj;
        $scope.actionBegin = function (args) {
            if (args.requestType == "grouping")
                $("#selectedRow").ejNumericTextbox("option", { value: -1 });
        }


    });
