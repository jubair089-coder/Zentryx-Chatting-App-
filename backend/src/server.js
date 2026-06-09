import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log('env file running at port no:', process.env.PORT); // Check if the PORT variable is loaded correctly    

    console.log(`Server is running on port https://localhost:${PORT}`);
});