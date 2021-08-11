import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({
    models:{
      transaction: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Desenvolviemnto Front-end',
            type: 'deposit',
            category: 'Dev',
            amount: 5000,
            createdAt: new Date ('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Escritório',
            amount: 600,
            createdAt: new Date ('2021-02-14 19:00:00'),
          }
        ],
      })


    },

  routes(){
    this.namespace =  'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
