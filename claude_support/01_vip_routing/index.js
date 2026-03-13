{
  "Details": {
    "ContactData": {
      "CustomerEndpoint": {
        "Address": "+6421234567"
      }
    },
    "Parameters": {
      "CallerType": "VIP"
    }
  }
}

exports.handler = async (event) => {

  const callerType = event.Details.Parameters.CallerType;
  let queueName;

  if (callerType === "VIP") {
    queueName = "PriorityQueue";
  } else {
    queueName = "StandardQueue";
  }

  return {
    queueName: queueName
  };

};