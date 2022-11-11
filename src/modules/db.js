export async function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE";
  const url = "https://xzvxbsabbtvyjadarzzt.supabase.co";
  const res = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}

/* 

const options = {  method: 'POST',  headers: {    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE',    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE',    'Content-Type': 'application/json',    Prefer: 'return=representation'  },  body: '{"name":"Jonas","email":"a@a.dk","address":"secret"}'
};

fetch('https://xzvxbsabbtvyjadarzzt.supabase.co/rest/v1/simpleshop', options)  .then(response => response.json())  .then(response => console.log(response))  .catch(err => console.error(err));





*/
