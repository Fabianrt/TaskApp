import mongoose, {Schema, Document} from "mongoose";

export type ProjectType = Document & {
    projectName: string,
    clientName: string,
    description: string
}

const ProjectSchema: Schema = new Schema({
    projectName : {        
        required: true,
        trim: true,
        type:String,        
    },
    clientName : {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

const Project = mongoose.model<ProjectType>('project', ProjectSchema)

export default Project