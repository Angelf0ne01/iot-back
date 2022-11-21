import { UserId } from "@context/iot/users/domain/UserId";
import { WorkerRepository } from "../domain/worker-respository";

export class WorkerFinderAll {
  constructor(private workerRepository: WorkerRepository) { }

  async run() {
    const courses = await this.workerRepository.searchAllByUser();

    return courses;
  }
}
