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

describe('GET /todo/get/datesort/', function () {
  describe('Busca as tarefas cadastradas no banco de dados mais recentes', function () {
    let response;
    let connectionMock;
    
    before(async function () {
      const DBServer = await MongoMemoryServer.create();
      const URLMock = await DBServer.getUri();
      const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
      connectionMock = await MongoClient.connect(URLMock, OPTIONS).then((conn) => {
       const db = conn.db('todo_list');
        return db;
      });

      sinon.stub(connection, 'connection').resolves(connectionMock);
      // sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      await connectionMock.collection('tasks').insertMany(tasksToBeCreated);

      response = await chai.request(server).get('/todo/get/datesort/');
    });

    after(async function () {
      connection.connection.restore();
      // await connectionMock.db('todo-list').collection('tasks').deleteMany({});
    });
  
    it('retorna o código de status 200', function () {
      expect(response).to.have.status(200);
    });

    it('retorna um array com 3 objetos', function () {
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.equal(3);
    });

    it('Deve ter um array contendo as tarefas que foram criadas anteriormente', function () {
      expect(response.body[0].text).to.be.equal('Tarefa 1');
      expect(response.body[1].text).to.be.equal('Tarefa 2');
      expect(response.body[2].text).to.be.equal('Tarefa 3');
    });

    it('Should have the propeties, "_id", "text", "active", "edit"', function () {
      const { _id, text, active, edit } = response.body[0];
      expect(_id).to.exist;
      expect(_id.length).to.equal(24);
      expect(text).to.exist;
      expect(text).to.be.an('string');
      expect(active).to.exist;
      expect(active).to.be.an('boolean');
      expect(edit).to.exist;
      expect(edit).to.be.an('boolean');
    });
  });
});