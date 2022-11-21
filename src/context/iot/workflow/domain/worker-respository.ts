import { Worker } from "cluster";

export interface WorkerRepository {
    searchAllByUser(): Worker[] | undefined
}