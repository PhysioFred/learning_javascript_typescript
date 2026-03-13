// =============================================
// MOCK EVENT - simulates what Amazon Connect
// sends to Lambda. Used for local testing only.
// =============================================
const mockEvent = {
  Details: {
    ContactData: {
      CustomerEndpoint: {
        Address: "+6421234567"
      }
    },
    Parameters: {
      KeypadInput: "27"
    }
  }
};

// =============================================
// LAMBDA HANDLER
// =============================================
exports.handler = async (event) => {

  const keypadInput = event.Details.Parameters.KeypadInput;
  const callerNumber = event.Details.ContactData.CustomerEndpoint.Address;

  let department;

  if (keypadInput === "1") {
    department = "IT Support";
  } else if (keypadInput === "2") {
    department = "HR";
  } else if (keypadInput === "3") {
    department = "Accounts";
  } else {
    department = "Unknown";
  }

  console.log(`Caller ${callerNumber} pressed ${keypadInput} - routing to ${department}`);

  return {
    department: department,
    callerNumber: callerNumber
  };

};

// =============================================
// LOCAL TEST RUNNER
// Passes the mock event into the handler and
// prints the result. This block would not exist
// in a real Lambda deployment.
// =============================================
exports.handler(mockEvent).then(result => {
  console.log("Lambda returned:", result);
});