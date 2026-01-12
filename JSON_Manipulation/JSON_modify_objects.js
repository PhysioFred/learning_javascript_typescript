//Accessing nesteed data in JSON

const contact = {                     // ← Level 1 (root object)
  contactId: "abc123",               // ← Level 2 (direct property)
  queue: "Support",                  // ← Level 2 (direct property)
  attributes: {                      // ← Level 2 (property that's also an object)
    priority: "high",                // ← Level 3 (nested property)
    language: "en",                  // ← Level 3 (nested property)
  },
};

for (const key in contact) {
  console.log(`${key}: ${contact[key]}`);
}

//from the above it prints out attributes: [object Object], thus we know there is a level 3 (nested property)

for (const bre in contact.attributes) {
  console.log(`${bre}: ${contact.attributes[bre]}`);
}

console.log("------")

//Print out level 2 and level 3 together using JSON.stringify()
// JSON.stringify(value, replacer, space)
//                  ↓         ↓         ↓
//              what to   filter/   indentation
//              convert   transform  spaces
console.log(JSON.stringify(contact, ['attributes', 'priority', 'language'], 2));
