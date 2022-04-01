import express from 'express'
import { getIndex } from './controller/FilmesController.js'

export const routes = express.Router() //trazendo apenas as rotas ao inves do express inteiro

routes.get("/", getIndex)


