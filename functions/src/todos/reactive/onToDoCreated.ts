import * as functions from "firebase-functions";
import { Comment } from "../models/models";
//import getAllBadWords from "../restful/getAllBadWords";

const onToDoCreated = functions.firestore
  .document("comments/{commentsId}")
  .onCreate((snapshot, context) => {
    const body = snapshot.data() as Comment;
    console.log("Created new todo", body);
    //var array:any  = getAllBadWords();
    var array: string[] = ['jebote', 'jebo te'];
      
    var r: string = body.desc;
    console.log(r);
    for (const x of array) { 
      console.log(x);   
      r = r.split(x).join("****");
    }
    console.log(r);
    return snapshot.ref.update({desc: r});
    
  });

export default onToDoCreated;