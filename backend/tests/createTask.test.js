const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/app');
const connection = require('../src/models/connection');

chai.use(chaiHttp);

const { expect } = chai;

const tasksToBeCreated = [
  { text: 'Tarefa 1', active: false, edit: false },
  { text: 'Tarefa 2', active: false, edit: false },
  { text: 'Tarefa 3', active: false, edit: false },
];

describe('/post/ - Adiciona nova tarefa', function () {
  describe('Verifica se ele envia as informações ao banco de dados', function () {
      let connectionMock;
      let response;

      before(async function () {
        const DBServer = await MongoMemoryServer.create();
        const URLMock = await DBServer.getUri();
        const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
        connectionMock = await MongoClient.connect(URLMock, OPTIONS).then((conn) => {
         const db = conn.db('todo_list');
          return db;
        });
        
        // sinon.stub(MongoClient, 'connect').resolves(connectionMock);
        sinon.stub(connection, 'connection').resolves(connectionMock);

        // await connectionMock.db('todo-list').collection('task').insertOne(tasksToBeCreated);
        await connectionMock.collection('tasks').insertMany(tasksToBeCreated);

        response = await chai.request(server).post('/todo/post/').send(tasksToBeCreated);
        response = await chai
        .request(server)
        .post('/todo/post/')

        .send(tasksToBeCreated);
      });

      after(async function () {
      connection.connection.restore();
      // await DBServer.stop();
      await connectionMock.collection('tasks').deleteMany({});
    });

      it('retorna o código de status 200', function () {
        expect(response).to.have.status(200);
      });
      
      it('Deve retornar um objeto', function () {
        expect(response.body).to.be.an('object');
      });

      it('Dentro do objeto deve ter a propriedade "acknowledged", "insertedId"', function () {
        const { acknowledged, insertedId } = response.body;
        expect(acknowledged).to.exist;
        expect(acknowledged).to.be.an('boolean');
        expect(insertedId).to.exist;
        expect(insertedId.length).to.equal(24);
      });
  });
});