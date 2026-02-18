import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionsTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
}

export type TaskActionsWithPayload = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.RESET_STATE;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    };

export type TaskActionsModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;

TaskActionsTypes.START_TASK;
