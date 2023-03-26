const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

// Create experss app
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mongodb uri and connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ts3db.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // Create Collection
    const database = client.db("geonoisECommerce");
    const products = database.collection("products");
    const categories = database.collection("categories");


    // All Products Get from the database
    app.get("/products", async (req, res) => {
      const query = {};
      const options = await products.find(query).toArray();
      res.send(options);
    });

    // Single course get
    app.get("/productDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = await products.findOne(query);
      res.send(options);
    });

    // Course post
    app.post('/courses', async (req, res) =>{
      const course = req.body;
      console.log(course)
      const result = await courses.insertOne(course);
      res.send(result);
    })

    // Course update
    app.put("/course/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id)
      const {title, price, category, rating, description} = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set:{
          title, price, category, rating, description
        }
      }
      const result = await courses.updateOne(query, updateDoc);
      console.log('course update successful')
      res.send(result);
    });

    // Course Delete
    app.delete("/course/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const options = await courses.deleteOne(query);
      res.send(options);
    })

    // All categories get from the database
    app.get('/categories', async (req, res) => {
      const query = {};
      const options = await categories.find(query).toArray();
      res.send(options);
    })

    // All user get
    app.get("/users", async (req, res) => {
      const query = {};
      const options = await users.find(query).toArray();
      res.send(options);
    });

    // single user get
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await users.findOne(query);
      res.send(user);
    });

    // User as a admin or not
    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await users.findOne(query);
      res.send({isAdmin: user?.role === 'admin'});
    });

    // User post
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await users.insertOne(user);
      res.send(result);
    });

    // User update
    app.put("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };

      const result = await users.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server runnning Successful");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
