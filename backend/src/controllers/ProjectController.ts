import type { Request, Response } from "express"
import Project, { ProjectType } from "../models/project"
import color from 'colors'

export class ProjectController{
    static getAllProjects = async(req:Request, res:Response)=>{
        res.send('Consultando proyectos')
    }

    static createProject = async(req:Request, res:Response)=>{

        const project = new Project(req.body)

        try {
            await project.save()
            res.send('Proyecto Creado Correctamente')
        } catch (error) {
            console.log(color.bgRed.white(error.message))
            res.status(500).send(error.message)
        }
        
    }
}