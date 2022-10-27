import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class MyInterceptor1 implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const hardCodedToken = "1d38fe-8671-6735-7360-2hjhsjh5";

        if(!req.url.includes('users')){
            const modifiedReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${hardCodedToken}`
              }
            });
            return next.handle(modifiedReq);
        }else{
            return next.handle(req);   
        }
        
    }
    
}
// http.get() - 100 
// 95 - interceptor
// 5 - withoutout interceptor