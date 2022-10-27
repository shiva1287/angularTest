// Model For Comment object
/* export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
} */

export class Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  
  constructor(postId: number,id:number,name:string,email:string,body:string){
    this.postId = postId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
  }

  fullName(){
    return this.name + "  "+this.id;
  }
}
