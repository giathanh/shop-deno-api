import { Client } from "postgres";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      hostname: "localhost",
      user: "postgres",
      database: "logrocket_deno",
      password: "123456",
      port: 5432
    });

    await this.client.connect();
  }
}

export default new Database().client;