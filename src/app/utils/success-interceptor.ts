import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class SuccessInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // show the loader
        return next.handle(req).pipe(tap(event=>{
            // hide the loader
            if(event instanceof HttpResponse){
                // console.log('data fetched successfully!!!')
            }else{
                // console.log('data couldnt be fetched successfully!!!')
            }
        }))
    }
}
