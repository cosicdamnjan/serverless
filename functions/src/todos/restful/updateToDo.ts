import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";

const updateToDo = createRestuflFunction({
  method: MethodEnum.PATCH,
  callback: async (req, res) => {
    try {
      const docId = req.params["0"];
      const desc = req.body["desc"];

      const query = db.collection("comments").doc(docId);
      await query.set({ desc }, { merge: true });
      const snap = await query.get();

      res.status(200).json({
        message: "Todo updated",
        data: {
          id: docId,
          todo: snap.data(),
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error",
        err,
      });
    }
  },
});

export default updateToDo;