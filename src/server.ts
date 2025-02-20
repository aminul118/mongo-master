import { connect } from "mongoose";
import app from "./app";
import config from "./config";

const serverStatrt = async () => {
  try {
    await connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`🔰 DB connected on port ${config.port}`);
    });
  } catch (error) {
    console.log(`🔰 DB connection failed`, error);
  }
};

serverStatrt();
