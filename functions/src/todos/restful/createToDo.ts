import db from "../../config/firestore.config";
import createRestuflFunction, { MethodEnum } from "../../utils/helpers";
import { createToDoRequest } from "../helpers/helpers";
import { CreateDoRequest } from "../models/models";


const createToDo = createRestuflFunction({
  method: MethodEnum.POST,
  callback: async (req, res) => {
    try {
      const body: CreateDoRequest = req.body;
      

      const todo = createToDoRequest({
        title: body.title,
        desc: body.desc,
      });

      const ref = await db.collection("comments").add(todo);
      const doc = await ref.get();
      res.status(200).json({
        message: "Todo created",
        data: {
          id: doc.id,
          todo: doc.data(),
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

export default createToDo;