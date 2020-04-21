import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { listService } from '../services/ListService'

export class ListController extends BaseController {
  constructor() {
    super("api/list")
    this.router
    .use(auth0provider.getAuthorizedUserInfo)
    // .get('', this.getAll)
    .get('/:id', this.getByBoardId)
    .post('', this.createList)
    .put('/:id', this.editList)
    .delete('/:id', this.deleteList)
  }
  async getByBoardId(req, res, next) {
    try {
      let data = await listService.getByBoardId(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) 
    }
  }

  async createList(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await listService.createList(req.title)
      return res.send(data)

    } catch (error) { next(error) }
  }
  async editList(req, res, next) {
    try {
      let data = await listService.editList(req.params.id, req.userInfo.email, req.title)
    } catch (error) { next(error)
    }
  }
  async deleteList(req, res, next) {
    try {
      await listService.deleteList(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted!!!!!!!!!!")
    } catch (error) { next(error)
    } 
  }
}