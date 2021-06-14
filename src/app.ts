import express from 'express';
import bodyParser from 'body-parser';
export const getApp = () => {
   const app = express();
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

   app.get('/', (_, res) => {
      res.json({ ok: true });
   });
   return app;
};
