/* eslint-disable no-unused-vars */
import { randomUUID } from 'crypto';

enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  HIDDEN = 'HIDDEN',
}

class Task {
  #id: string;
  #title: string;
  #description: string;
  #status: TaskStatus;

  constructor (title: string, description: string) {
    this.#id = randomUUID();
    this.#title = title;
    this.#description = description;
    this.#status = TaskStatus.PENDING;
  }

  get id () {
    return this.#id;
  }

  get title () {
    return this.#title;
  }

  set title (title: string) {
    this.#title = title;
  }

  get description () {
    return this.#description;
  }

  set description (description: string) {
    this.#description = description;
  }

  get status () {
    return this.#status;
  }

  set status (status: TaskStatus) {
    this.#status = status;
  }

  toJSON () {
    return {
      id: this.#id,
      title: this.#title,
      description: this.#description,
      status: this.#status
    };
  }
}

export { Task, TaskStatus };
