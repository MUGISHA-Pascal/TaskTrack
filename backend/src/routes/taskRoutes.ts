import { Router } from "express";
import {
  add_task,
  get_task,
  update_task,
  delete_task,
  get_all_task,
  update_status,
} from "../controllers/taskController";

const taskRoutes = Router();

taskRoutes.post("/add_task", add_task);
taskRoutes.get("/get_task", get_task);
taskRoutes.put("/update_task", update_task);
taskRoutes.delete("/delete_task", delete_task);
taskRoutes.get("/get_all_task", get_all_task);
taskRoutes.patch("/update_status_task", update_status);

export default taskRoutes;
