import AWS from 'aws-sdk';

// Initialize AWS DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

export const createItem = async (params) => {
    try {
        await docClient.put(params).promise();
        console.log("Item created successfully");
    } catch (err) {
        console.error("Unable to create item. Error JSON:", JSON.stringify(err, null, 2));
    }
};

export const getItem = async (params) => {
    try {
        const data = await docClient.get(params).promise();
        console.log("Item retrieved successfully:", JSON.stringify(data.Item));
        return data.Item;
    } catch (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    }
};

export const updateItem = async (params) => {
  try {
      await docClient.update(params).promise();
      console.log("Item updated successfully");
  } catch (err) {
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
  }
};

export const deleteItem = async (params) => {
  try {
      await docClient.delete(params).promise();
      console.log("Item deleted successfully");
  } catch (err) {
      console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
  }
};

