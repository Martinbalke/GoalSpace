import express from 'express'
import GoalModel from '../model/goalModel';

const router = express.Router();
const goalModel = new GoalModel();

router.get('/' ,async (req, res) => {
  let goals = await goalModel.read();
  res.send(goals);
})


router.get('/:id', async (req, res) => {
  let goals = await goalModel.read(req.params.id);
  res.send(goals);
})

router.post('/', async (req, res) => {
 let deleted = goalModel.create(req.body)
 res.send(deleted);
})

router.put('/:id', async (req,res) => {
 let id = req.params.id;
 console.log(id, req.body)
 let updated = await goalModel.update(id, req.body)
 res.send(updated);
})

router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  let deleted = await goalModel.delete(id)
  res.send(deleted);
})
export default router;