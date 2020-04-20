import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class ListService {
  async getByBoardId(boardId, userEmail) {
    let data = await dbContext.Task.findOne({ _id: boardId, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Inalid ID or you do not own this list!!!!")
    }
    return data
  }
  async createList(rawData) {
    let data = await dbContext.Task.create(rawData)
    return data
  }
  async editList(boardId, userEmail, update) {
    let data = await dbContext.Task.findOneAndUpdate({ _id: boardId, creatorEmail: userEmail },
      update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you don't have permissions")
    }
    return data;
  }
  async deleteList(boardId, userEmail) {
    let data = await dbContext.Task.findOneAndRemove({ _id: boardId, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you don't have permissions")
    }
  }
}

export const listService = new ListService()