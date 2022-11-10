export function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE";
  const url = "https://xzvxbsabbtvyjadarzzt.supabase.co";
  fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dnhic2FiYnR2eWphZGFyenp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDA0NTQsImV4cCI6MTk4MzY3NjQ1NH0.Z4BtwWfFmlNfVJk5UlDZ9OMPrfXOSQaCkfTY6zyUCNE",
      "Content-Type": "application/json",
      Prefer: "return=presentation",
    },
    body: JSON.stringify(payload),
  });
  console.log(payload);
}

/* 

const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpY2Njanp4a2xscWxoYnVvenFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjYsImV4cCI6MTk4MjE3NDcyNn0.0fy2lU1BbfgzXVllYJiYei1pl2Pua6RR9ndixISNEXU',
    'Content-Type': 'application/json',
    Prefer: 'return=presentation'
  },
  body: '{"name":"Game of Thrones","seasons":2,"director":"Gareth Davies","rating":4.15,"ongoing":true}'
};

fetch('https://kicccjzxkllqlhbuozqh.supabase.co/rest/v1/tvshows', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

*/
