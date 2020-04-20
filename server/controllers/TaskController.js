import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { taskService } from '../services/TaskService'

export class TaskController extends BaseController {
  constructor() {
    super("api/task")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      // .get('', this.getAll)
      .get('/:id', this.getByListId)
      .post('', this.createTask)
      .put('/:id', this.editTask)
      .delete('/:id', this.deleteTask)
  }
  async getByListId(req, res, next) {
    try {
      let data = await taskService.getByListId(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) 
    }
  }

  async createTask(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await taskService.createTask(req.title)
      return res.send(data)

    } catch (error) { next(error) }
  }
  async editTask(req, res, next) {
    try {
      let data = await taskService.editTask(req.params.id, req.userInfo.email, req.title)
    } catch (error) { next(error)
    }
  }
  async deleteTask(req, res, next) {
    try {
      await taskService.deleteTask(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted!!!!!!!!!!")
    } catch (error) { next(error)
    } 
  }
}