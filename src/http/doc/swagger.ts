export default {
  openapi: '3.0.0',
  info: {
    title: 'API Growdev TaskList Dnr',
    version: '1.0',
    description: 'API developed for the Growdev TaskList Dnr project',
    contact: {
      name: 'Diener',
      url: 'https://github.com/dienerld',
      email: 'diener.ld@outlook.com'
    }
  },
  servers: [
    {
      url: 'https://dnr-growdev.fly.dev',
      description: 'Production'
    },
    {
      url: 'http://localhost:8080',
      description: 'development'
    }
  ],
  tags: [
    {
      name: 'User',
      description: 'Routes for User'
    },
    {
      name: 'Auth',
      description: 'Routes for Auth'
    }
  ],
  paths: {
    '/users': {
      get: {
        tags: ['User'],

        summary: 'Get data of user authenticated',
        description: 'Get data of user authenticated',
        operationId: 'getUser',
        security: [
          {
            bearerAuth: ['read:user']
          }
        ],
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Unauthorized',
            $ref: '#/components/responses/500'
          }
        }
      },
      post: {
        tags: ['User'],
        summary: 'Create  a new user',
        description: 'Create a new user',
        operationId: 'createUser',
        requestBody: {
          $ref: '#/components/requestBodies/User'
        },
        responses: {
          201: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      }
    },
    '/users/login': {
      post: {
        tags: ['User', 'Auth'],
        summary: 'Login user',
        description: 'Login user',
        operationId: 'loginUser',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Login'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    token: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      }
    },
    '/users/{id}': {
      put: {
        tags: ['User'],
        summary: 'Update user authenticated',
        description: 'Update user authenticated',
        operationId: 'updateUser',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of user to return',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid'
            }
          }
        ],
        security: [
          {
            bearerAuth: ['update:user']
          }
        ],
        requestBody: {
          $ref: '#/components/requestBodies/User'
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      },
      delete: {
        tags: ['User'],
        summary: 'Delete user authenticated',
        description: 'Delete user authenticated',
        operationId: 'deleteUser',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of user to return',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid'
            }
          }
        ],
        security: [
          {
            bearerAuth: ['delete:user']
          }
        ],
        responses: {
          204: {
            description: 'Success'
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      }
    },
    '/tasks': {
      get: {
        tags: ['Task'],
        summary: 'Get all tasks',
        description: 'Get all tasks',
        operationId: 'getTasks',
        security: [
          {
            bearerAuth: ['read:task']
          }
        ],
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Task'
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      },
      post: {
        tags: ['Task'],
        summary: 'Create a new task',
        description: 'Create a new task',
        operationId: 'createTask',
        security: [
          {
            bearerAuth: ['create:task']
          }
        ],
        requestBody: {
          $ref: '#/components/requestBodies/Task'
        },
        responses: {
          201: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task'
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      }
    },
    '/tasks/{id}': {
      put: {
        summary: 'Update task',
        description: 'Update task - when body sent blank, the hidden will be updated',
        operationId: 'updateTask',
        tags: ['Task'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of task to return',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid'
            }
          }
        ],
        security: [
          {
            bearerAuth: ['update:task']
          }
        ],
        requestBody: {
          $ref: '#/components/requestBodies/UpdateTask'
        },
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task'
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      },
      delete: {
        summary: 'Delete task',
        description: 'Delete task',
        operationId: 'deleteTask',
        tags: ['Task'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of task to return',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        security: [
          {
            bearerAuth: ['delete:task']
          }
        ],
        responses: {
          204: {
            description: 'Success'
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      }
    },
    '/tasks/search': {
      get: {
        summary: 'Search task',
        description: 'Search task',
        operationId: 'searchTask',
        tags: ['Task'],
        parameters: [
          {
            name: 'hidden',
            in: 'query',
            description: 'Search query',
            schema: {
              type: 'string'
            }
          },
          {
            name: 'title',
            in: 'query',
            description: 'Search query',
            schema: {
              type: 'string'
            }
          }
        ],
        security: [
          {
            bearerAuth: ['read:task']
          }
        ],
        responses: {
          200: {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Task'
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad Request',
            $ref: '#/components/responses/400'
          },
          401: {
            description: 'Unauthorized',
            $ref: '#/components/responses/401'
          },
          500: {
            description: 'Internal Server Error',
            $ref: '#/components/responses/500'
          }
        }
      }
    }
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          name: {
            type: 'string',
            example: 'User name'
          },
          email: {
            type: 'string',
            example: 'email@mail.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          },
          tasks: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Task'
            }
          }
        }
      },
      Task: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          title: {
            type: 'string',
            example: 'Task name'
          },
          date: {
            type: 'string',
            example: '2020-10-10'
          },
          hour: {
            type: 'string',
            example: '10:00'
          },
          done: {
            type: 'boolean'
          },
          hidden: {
            type: 'boolean',
            example: false
          }
        }
      },
      Login: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            example: 'mail@mail.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          }
        },
        required: ['email', 'password']
      }
    },
    responses: {
      400: {
        description: '',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Bad Request'
                }
              }
            }
          }
        }
      },
      401: {
        description: '',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Unauthorized'
                }
              }
            }
          }
        }
      },
      500: {
        description: '',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error'
                }
              }
            }
          }
        }
      }
    },
    requestBodies: {
      User: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: 'User name'
                },
                email: {
                  type: 'string',
                  example: 'mail@mail.com'
                },
                password: {
                  type: 'string',
                  example: 'password123'
                },
                password_confirm: {
                  type: 'string',
                  example: 'password123'
                }
              },
              required: ['name', 'email', 'password', 'password_confirm']
            }
          }
        }
      },
      Task: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Task name'
                },
                date: {
                  type: 'string',
                  example: '2021-01-01'
                },
                hour: {
                  type: 'string',
                  example: '12:00'
                }
              },
              required: ['title', 'date', 'hour']
            }
          }
        }
      },
      UpdateTask: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Task name'
                },
                date: {
                  type: 'string',
                  example: '2021-01-01'
                },
                hour: {
                  type: 'string',
                  example: '12:00'
                },
                done: {
                  type: 'boolean',
                  example: true
                },
                hidden: {
                  type: 'boolean',
                  example: true
                }
              }
            }
          }
        }
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};
