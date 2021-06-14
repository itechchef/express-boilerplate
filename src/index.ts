import { getApp } from 'src/app';
const startServer = () => {
   try {
      const app = getApp();
      const PORT: string = process.env.PORT || '3001';
      app.listen(PORT, () => {
         console.log(`server started at http://localhost:${PORT}`);
      });
   } catch (error) {
      console.error(error);
   }
};
startServer();
