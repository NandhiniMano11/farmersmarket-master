import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI ||
        'mongodb+srv://dbUser:Wl66jXfVKaGuz5cT@cluster0.opiwjxh.mongodb.net/test?authSource=admin&replicaSet=atlas-updfm9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      },
    );
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
