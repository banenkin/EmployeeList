import {decorate, observable, action} from 'mobx'
import $ from "jquery"
import { allowStateReadsStart } from 'mobx/lib/internal';

export default class Store {
  employeesList = observable([
    "Nikola Banenkin"
  ]);

  private selectedEmplyee : string;
  private newEmployee : string;
  private apiURL: string;

  constructor() {
    this.newEmployee = "";
    this.selectedEmplyee = "";
    this.apiURL = "http://localhost:51000/employee";
  }
  
  addEmployee() {
    this.employeesList.push(this.newEmployee);
    $.ajax(this.apiURL + "/add", {
      data: {
          name: this.newEmployee
      },
      error: function (d) {
        //log
      }
    })
  }

  removeSelectedEmployee(e: React.MouseEvent) {
        const index = this.employeesList.indexOf(this.selectedEmplyee);
        if (index > -1) {
            this.employeesList.splice(index, 1);
            $.ajax(this.apiURL + "/remove", {
              data: {
                  name: this.selectedEmplyee
              },
              error: function (d) {
                //log
              }
            })
        }
  }

  handleEmployeeChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.newEmployee = e.target.value.toString();
  }

  handleSelectEmployeeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.selectedEmplyee = e.target.value.toString();
  }

  loadEmployeeList() {
    var request = $.ajax({
      url: this.apiURL + "/GetList",
      type: "GET",
      dataType: "json"
    });

    request.done(function( msg ) {
      debugger;
    });
    request.fail(function( jqXHR, textStatus ) {
      debugger;
    });
  }
}

decorate(Store, {
    addEmployee: action,
    removeSelectedEmployee: action
  })