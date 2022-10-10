import db from "../../config/firestore.config";

const getAllBadWords = async function () {
    try {
        const query = db.collection("badwords");
        const querySnapshot = await query.get();
        const data: string[] = [];
        querySnapshot.forEach((doc) =>
          data.push(doc.data().word)
        );
  
        return data;
      } catch (err) {
        console.log(err)
        return null;
      }
}
    

export default getAllBadWords;