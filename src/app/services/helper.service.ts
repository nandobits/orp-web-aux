import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-type':  'application/x-www-form-urlencoded'
        })
    };
    private authorizationOptions = {
        headers: new HttpHeaders({
            'Authorization':  'Basic bW9tc19vYXV0aDptdG0oNzg5Nik='
        })
    };

    public getHttpOptions(){
        return this.httpOptions;
    }

    public getAuthorizationOptions(){
        return this.authorizationOptions;
    }

    public getFormData(object) {
        var formData = new FormData();
        Object.keys(object).forEach(key => {formData.append(key, object[key])});
        return formData;
    }
}
